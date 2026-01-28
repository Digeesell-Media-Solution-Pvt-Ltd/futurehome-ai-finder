import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";

interface DeveloperSearchProps {
  value: string;
  onChange: (value: string) => void;
}

export function DeveloperSearch({ value, onChange }: DeveloperSearchProps) {
  return (
    <div className="relative max-w-md mx-auto mb-8">
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
      <Input
        type="text"
        placeholder="Search developers (e.g., Emaar, Danube, Nakheel...)"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="pl-12 pr-10 py-6 rounded-xl bg-card/50 border-border/50 focus:border-primary text-base"
      />
      {value && (
        <button
          onClick={() => onChange('')}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-muted transition-colors"
        >
          <X className="w-4 h-4 text-muted-foreground" />
        </button>
      )}
    </div>
  );
}
