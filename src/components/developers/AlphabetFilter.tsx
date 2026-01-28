import { cn } from "@/lib/utils";
import { alphabet } from "@/data/developers";

interface AlphabetFilterProps {
  selectedLetter: string | null;
  onSelect: (letter: string | null) => void;
  availableLetters: Set<string>;
}

export function AlphabetFilter({ selectedLetter, onSelect, availableLetters }: AlphabetFilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-1 sm:gap-2 mb-8">
      <button
        onClick={() => onSelect(null)}
        className={cn(
          "px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200",
          selectedLetter === null
            ? "bg-primary text-primary-foreground shadow-md"
            : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground"
        )}
      >
        All
      </button>
      {alphabet.map((letter) => {
        const isAvailable = letter === '#' 
          ? Array.from(availableLetters).some(l => /^[0-9]/.test(l))
          : availableLetters.has(letter);
        
        return (
          <button
            key={letter}
            onClick={() => onSelect(letter)}
            disabled={!isAvailable}
            className={cn(
              "w-9 h-9 rounded-lg text-sm font-medium transition-all duration-200",
              selectedLetter === letter
                ? "bg-primary text-primary-foreground shadow-md scale-110"
                : isAvailable
                  ? "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground hover:scale-105"
                  : "bg-muted/20 text-muted-foreground/30 cursor-not-allowed"
            )}
          >
            {letter}
          </button>
        );
      })}
    </div>
  );
}
