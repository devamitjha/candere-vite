import React, { useState } from 'react';
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from './ui/button';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FilterSidebar = ({ filterItem }) => {
  // Track show/hide state per filter label
  const [showAllMap, setShowAllMap] = useState({});

  const toggleShowAll = (label) => {
    setShowAllMap((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  return (
    <ScrollArea className="h-screen w-full">
      {filterItem.map((filterSection, index) => {
        const showAll = showAllMap[filterSection.label] || false;
        const sortedOptions = [...filterSection.options].sort((a, b) => b.value - a.value);
        const displayedOptions = showAll ? sortedOptions : sortedOptions.slice(0, 4);
        const hiddenCount = sortedOptions.length - 4;

        return (
          <div key={filterSection.label} className="py-4">
            <h4 className="mb-6 text-lg leading-none font-medium">{filterSection.label}</h4>
            <div className="flex flex-col gap-6">
              {displayedOptions.map((item) => (
                <div className="flex items-center gap-3" key={item.id}>
                  <Checkbox id={item.id} className="cursor-pointer" />
                  <Label htmlFor={item.id} className="cursor-pointer">
                    {item.label} ({item.value})
                  </Label>
                </div>
              ))}

              {sortedOptions.length > 4 && (
                <Button
                  onClick={() => toggleShowAll(filterSection.label)}
                  variant="none"
                  className="flex items-center gap-2 self-start text-cyan-600 cursor-pointer"
                >
                  {showAll ? (
                    <>
                      <ChevronUp className="w-4 h-4" />
                      Show Less
                    </>
                  ) : (
                    <>
                      <ChevronDown className="w-4 h-4" />
                      {hiddenCount} More
                    </>
                  )}
                </Button>
              )}

              {/* Show separator except for the last section */}
              {index !== filterItem.length - 1 && <Separator />}
            </div>           
          </div>
        );
      })}
       <Button
            variant="outline"
            className="flex items-center gap-2 self-start text-cyan-600 cursor-pointer w-full"
        >Show More</Button>
    </ScrollArea>
  );
};

export default FilterSidebar;
