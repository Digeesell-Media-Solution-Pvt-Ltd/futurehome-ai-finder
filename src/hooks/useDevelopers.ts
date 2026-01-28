import { useState, useEffect, useMemo } from "react";
import { Developer, featuredDevelopers, parseDevelopersFromCSV, generateSlug } from "@/data/developers";
import developersCSV from "@/data/developers.csv?raw";

export function useDevelopers() {
  const [allDevelopers, setAllDevelopers] = useState<Developer[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null);

  useEffect(() => {
    function loadDevelopers() {
      try {
        if (developersCSV) {
          const developers = parseDevelopersFromCSV(developersCSV);
          setAllDevelopers(developers);
        } else {
          // Fallback to featured developers if CSV fails to load
          setAllDevelopers(featuredDevelopers);
        }
      } catch (error) {
        console.error("Error loading developers:", error);
        setAllDevelopers(featuredDevelopers);
      } finally {
        setIsLoading(false);
      }
    }

    loadDevelopers();
  }, []);

  // Get available letters for the filter
  const availableLetters = useMemo(() => {
    const letters = new Set<string>();
    allDevelopers.forEach(dev => {
      const firstChar = dev.nameEn.charAt(0).toUpperCase();
      if (/[A-Z]/.test(firstChar)) {
        letters.add(firstChar);
      } else if (/[0-9]/.test(firstChar)) {
        letters.add('#');
      }
    });
    return letters;
  }, [allDevelopers]);

  // Filter developers based on search and letter
  const filteredDevelopers = useMemo(() => {
    let result = allDevelopers;

    // Filter by letter
    if (selectedLetter) {
      if (selectedLetter === '#') {
        result = result.filter(dev => /^[0-9]/.test(dev.nameEn));
      } else {
        result = result.filter(dev => 
          dev.nameEn.charAt(0).toUpperCase() === selectedLetter
        );
      }
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      result = result.filter(dev =>
        dev.nameEn.toLowerCase().includes(query) ||
        dev.nameAr?.includes(searchQuery)
      );
    }

    return result;
  }, [allDevelopers, selectedLetter, searchQuery]);

  // Get featured developers
  const featured = useMemo(() => 
    allDevelopers.filter(dev => dev.featured),
    [allDevelopers]
  );

  return {
    allDevelopers,
    filteredDevelopers,
    featuredDevelopers: featured,
    isLoading,
    searchQuery,
    setSearchQuery,
    selectedLetter,
    setSelectedLetter,
    availableLetters,
    totalCount: allDevelopers.length,
    filteredCount: filteredDevelopers.length,
  };
}
