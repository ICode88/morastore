"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface InstructionItem {
  title: string;
  content: string;
}

interface AccordionInstructionProps {
  items: InstructionItem[];
}

const AccordionInstruction = ({ items }: AccordionInstructionProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="border border-primary/30 rounded-lg overflow-hidden">
      {items.map((item, index) => (
        <div key={index} className="border-b border-primary/30 last:border-b-0">
          <button
            className="flex justify-between items-center w-full p-4 text-left transition-colors hover:bg-primary/10"
            onClick={() => toggleAccordion(index)}
          >
            <span className="text-sm font-medium">{item.title}</span>
            <ChevronDown 
              className={`w-5 h-5 transition-transform ${
                activeIndex === index ? "transform rotate-180" : ""
              }`}
            />
          </button>
          
          <div 
            className={`overflow-hidden transition-all duration-300 ${
              activeIndex === index 
                ? "max-h-96 opacity-100" 
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="p-4 pt-0 text-sm text-gray-400">
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AccordionInstruction;