import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import type { Project, Area, Developer, ProjectFilters } from "@/types/project";
import { normalizeDeveloperKey } from "@/lib/normalize";

export function useAreas() {
  return useQuery({
    queryKey: ["areas"],
    queryFn: async (): Promise<Area[]> => {
      const { data, error } = await supabase
        .from("areas")
        .select("id, name, slug, description, city, image_url")
        .order("name");
      if (error) throw error;
      return data as Area[];
    },
    staleTime: 5 * 60 * 1000,
  });
}

export function useDevelopersList() {
  return useQuery({
    queryKey: ["developers-list"],
    queryFn: async (): Promise<Developer[]> => {
      const { data, error } = await supabase
        .from("developers")
        .select("id, name, name_ar, slug, logo_url, description, featured")
        .order("name");
      if (error) throw error;
      return data as Developer[];
    },
    staleTime: 5 * 60 * 1000,
  });
}

export function useFilteredProjects(filters: ProjectFilters) {
  return useQuery({
    queryKey: ["projects", filters],
    queryFn: async (): Promise<Project[]> => {
      let query = supabase
        .from("projects")
        .select("*, developers(name, slug), areas(name, slug)")
        .order("created_at", { ascending: false });

      // Apply filters
      if (filters.min_price) {
        query = query.gte("starting_price", filters.min_price);
      }
      if (filters.max_price) {
        query = query.lte("starting_price", filters.max_price);
      }
      if (filters.handover_year) {
        query = query.eq("handover_year", filters.handover_year);
      }
      if (filters.property_types && filters.property_types.length > 0) {
        query = query.overlaps("property_types", filters.property_types);
      }
      if (filters.bedroom_types && filters.bedroom_types.length > 0) {
        query = query.overlaps("bedroom_types", filters.bedroom_types);
      }
      if (filters.investment_tags && filters.investment_tags.length > 0) {
        query = query.overlaps("investment_tags", filters.investment_tags);
      }
      if (filters.lifestyle_tags && filters.lifestyle_tags.length > 0) {
        query = query.overlaps("lifestyle_tags", filters.lifestyle_tags);
      }

      const { data, error } = await query;
      if (error) throw error;

      let results = (data || []) as unknown as Project[];

      // Client-side filtering for area and developer names (joined fields)
      if (filters.areas && filters.areas.length > 0) {
        const areaLower = filters.areas.map(a => a.toLowerCase());
        results = results.filter(p => 
          p.areas && areaLower.includes(p.areas.name.toLowerCase())
        );
      }
      if (filters.developers && filters.developers.length > 0) {
        const selectedDeveloperKeys = filters.developers.map((developer) =>
          normalizeDeveloperKey(developer),
        );
        results = results.filter((project) => {
          if (!project.developers) return false;
          const developerNameKey = normalizeDeveloperKey(project.developers.name);
          const developerSlugKey = normalizeDeveloperKey(project.developers.slug);
          return (
            selectedDeveloperKeys.includes(developerNameKey) ||
            selectedDeveloperKeys.includes(developerSlugKey)
          );
        });
      }

      return results;
    },
    staleTime: 30 * 1000,
  });
}

export function useAISearch() {
  const parseQuery = async (query: string): Promise<ProjectFilters> => {
    const { data, error } = await supabase.functions.invoke("ai-search", {
      body: { query },
    });
    if (error) throw error;
    return data?.filters || {};
  };

  return { parseQuery };
}
