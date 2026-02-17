import { useState } from "react";
import { Sparkles, Search, Loader2 } from "lucide-react";
import { useAISearch } from "@/hooks/useProjects";
import type { ProjectFilters } from "@/types/project";
import { toast } from "@/hooks/use-toast";

interface Props {
  onFiltersApplied: (filters: ProjectFilters) => void;
}

export function AISearchBar({ onFiltersApplied }: Props) {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const { parseQuery } = useAISearch();

  const handleSearch = async () => {
    if (!query.trim()) return;
    setLoading(true);
    try {
      const filters = await parseQuery(query.trim());
      onFiltersApplied(filters);
      toast({
        title: "AI Search Applied",
        description: "Filters have been set based on your search.",
      });
    } catch (e) {
      console.error("AI search error:", e);
      toast({
        title: "Search Failed",
        description: "Could not process your search. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <div className="relative">
      <div className="glass-card p-1 flex items-center gap-2">
        <div className="flex items-center gap-2 px-3 text-primary">
          <Sparkles className="h-4 w-4" />
          <span className="text-xs font-medium hidden sm:inline">AI Search</span>
        </div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Try: Waterfront 2BR under 1.5M with 2026 handover..."
          className="flex-1 bg-transparent border-0 outline-none text-sm text-foreground placeholder:text-muted-foreground py-3 px-2"
          disabled={loading}
        />
        <button
          onClick={handleSearch}
          disabled={loading || !query.trim()}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-charcoal text-white text-sm font-medium hover:bg-charcoal/90 disabled:opacity-50 transition-all mr-1"
        >
          {loading ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <Search className="h-4 w-4" />
          )}
          <span className="hidden sm:inline">Search</span>
        </button>
      </div>
      <p className="text-[10px] text-muted-foreground mt-1.5 px-1">
        Powered by AI — describe what you're looking for in natural language. Only real listed projects will be shown.
      </p>
    </div>
  );
}
