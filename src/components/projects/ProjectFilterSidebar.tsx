import { useState } from "react";
import { X, ChevronDown, ChevronUp, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import type { ProjectFilters, Area, Developer } from "@/types/project";
import {
  PROPERTY_TYPES,
  BEDROOM_TYPES,
  INVESTMENT_TAGS,
  LIFESTYLE_TAGS,
  HANDOVER_YEARS,
} from "@/types/project";

interface Props {
  filters: ProjectFilters;
  onFiltersChange: (filters: ProjectFilters) => void;
  areas: Area[];
  developers: Developer[];
  onClose?: () => void;
}

function FilterSection({
  title,
  defaultOpen = false,
  children,
}: {
  title: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <Collapsible open={open} onOpenChange={setOpen} className="border-b border-border pb-4">
      <CollapsibleTrigger className="flex w-full items-center justify-between py-2 text-sm font-medium text-foreground hover:text-primary transition-colors">
        {title}
        {open ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
      </CollapsibleTrigger>
      <CollapsibleContent className="pt-2 space-y-2">{children}</CollapsibleContent>
    </Collapsible>
  );
}

function CheckboxGroup({
  items,
  selected,
  onChange,
}: {
  items: string[];
  selected: string[];
  onChange: (items: string[]) => void;
}) {
  const toggle = (item: string) => {
    onChange(
      selected.includes(item)
        ? selected.filter((i) => i !== item)
        : [...selected, item]
    );
  };

  return (
    <div className="space-y-1.5 max-h-48 overflow-y-auto pr-1">
      {items.map((item) => (
        <label
          key={item}
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground cursor-pointer py-0.5"
        >
          <Checkbox
            checked={selected.includes(item)}
            onCheckedChange={() => toggle(item)}
            className="h-3.5 w-3.5"
          />
          {item}
        </label>
      ))}
    </div>
  );
}

export function ProjectFilterSidebar({ filters, onFiltersChange, areas, developers, onClose }: Props) {
  const activeCount = [
    filters.areas?.length,
    filters.developers?.length,
    filters.property_types?.length,
    filters.bedroom_types?.length,
    filters.min_price || filters.max_price ? 1 : 0,
    filters.handover_year ? 1 : 0,
    filters.investment_tags?.length,
    filters.lifestyle_tags?.length,
  ].reduce((a, b) => a + (b || 0), 0);

  const clearAll = () => onFiltersChange({});

  const priceValue = filters.max_price ? filters.max_price / 1000000 : 20;

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b border-border">
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="h-4 w-4 text-primary" />
          <span className="font-medium text-sm">Filters</span>
          {activeCount > 0 && (
            <Badge variant="secondary" className="text-xs px-1.5 py-0">
              {activeCount}
            </Badge>
          )}
        </div>
        <div className="flex items-center gap-2">
          {activeCount > 0 && (
            <button onClick={clearAll} className="text-xs text-muted-foreground hover:text-destructive transition-colors">
              Clear all
            </button>
          )}
          {onClose && (
            <button onClick={onClose} className="lg:hidden">
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>

      {/* Filters */}
      <div className="flex-1 overflow-y-auto space-y-1 pt-2">
        <FilterSection title="Area" defaultOpen>
          <CheckboxGroup
            items={areas.map((a) => a.name)}
            selected={filters.areas || []}
            onChange={(v) => onFiltersChange({ ...filters, areas: v.length ? v : undefined })}
          />
        </FilterSection>

        <FilterSection title="Developer" defaultOpen>
          <CheckboxGroup
            items={developers.map((d) => d.name)}
            selected={filters.developers || []}
            onChange={(v) => onFiltersChange({ ...filters, developers: v.length ? v : undefined })}
          />
        </FilterSection>

        <FilterSection title="Property Type" defaultOpen>
          <CheckboxGroup
            items={PROPERTY_TYPES}
            selected={filters.property_types || []}
            onChange={(v) => onFiltersChange({ ...filters, property_types: v.length ? v as any : undefined })}
          />
        </FilterSection>

        <FilterSection title="Bedrooms" defaultOpen>
          <CheckboxGroup
            items={BEDROOM_TYPES}
            selected={filters.bedroom_types || []}
            onChange={(v) => onFiltersChange({ ...filters, bedroom_types: v.length ? v as any : undefined })}
          />
        </FilterSection>

        <FilterSection title="Starting Price">
          <div className="px-1 pb-2">
            <Slider
              value={[priceValue]}
              onValueChange={([v]) =>
                onFiltersChange({ ...filters, max_price: v < 20 ? v * 1000000 : undefined })
              }
              min={0.3}
              max={20}
              step={0.1}
            />
            <div className="flex justify-between text-xs text-muted-foreground mt-1">
              <span>AED 300K</span>
              <span className="font-medium text-foreground">
                {priceValue >= 20 ? "Any" : `Up to AED ${priceValue.toFixed(1)}M`}
              </span>
              <span>AED 20M+</span>
            </div>
          </div>
        </FilterSection>

        <FilterSection title="Handover Year">
          <div className="flex flex-wrap gap-1.5">
            {HANDOVER_YEARS.map((year) => (
              <button
                key={year}
                onClick={() =>
                  onFiltersChange({
                    ...filters,
                    handover_year: filters.handover_year === year ? undefined : year,
                  })
                }
                className={`px-3 py-1 text-xs rounded-full border transition-all ${
                  filters.handover_year === year
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-border text-muted-foreground hover:border-primary hover:text-foreground"
                }`}
              >
                {year}
              </button>
            ))}
          </div>
        </FilterSection>

        <FilterSection title="Investment Tags">
          <CheckboxGroup
            items={INVESTMENT_TAGS}
            selected={filters.investment_tags || []}
            onChange={(v) => onFiltersChange({ ...filters, investment_tags: v.length ? v as any : undefined })}
          />
        </FilterSection>

        <FilterSection title="Lifestyle Tags">
          <CheckboxGroup
            items={LIFESTYLE_TAGS}
            selected={filters.lifestyle_tags || []}
            onChange={(v) => onFiltersChange({ ...filters, lifestyle_tags: v.length ? v as any : undefined })}
          />
        </FilterSection>
      </div>
    </div>
  );
}
