"use client";

import { useState } from "react";
import { categories } from "@/lib/data";

interface GameCategoryFilterProps {
  onCategoryChange: (category: string) => void;
}

const GameCategoryFilter = ({ onCategoryChange }: GameCategoryFilterProps) => {
  const [selectedCategory, setSelectedCategory] = useState("Semua");

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    onCategoryChange(category);
  };

  return (
    <div className="w-full overflow-x-auto no-scrollbar py-4">
      <div className="flex space-x-2 min-w-max">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 ${
              selectedCategory === category
                ? "bg-primary text-black"
                : "bg-black border border-primary/30 text-gray-300 hover:border-primary/60"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default GameCategoryFilter;