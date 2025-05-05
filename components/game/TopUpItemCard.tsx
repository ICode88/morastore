"use client";

import { useState } from "react";
import { TopUpItem } from "@/lib/types";
import { Check } from "lucide-react";

interface TopUpItemCardProps {
  item: TopUpItem;
  isSelected: boolean;
  onSelect: (item: TopUpItem) => void;
}

const TopUpItemCard = ({ item, isSelected, onSelect }: TopUpItemCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const hasDiscount = item.discountPrice && item.discountPrice < item.price;
  
  return (
    <button
      className={`
        w-full border rounded-lg transition-all duration-300
        hover:shadow-[0_0_15px_rgba(234,179,8,0.3)] hover:border-primary
        ${isSelected 
          ? 'border-primary bg-primary/10' 
          : 'border-primary/30 bg-card'}
      `}
      onClick={() => onSelect(item)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="p-4 relative">
        {isSelected && (
          <div className="absolute top-2 right-2 bg-primary text-black p-1 rounded-full">
            <Check className="h-4 w-4" />
          </div>
        )}
        
        <h3 className="text-base font-semibold mb-1">{item.name}</h3>
        
        {hasDiscount ? (
          <div className="flex flex-col">
            <span className="text-gray-400 line-through text-sm">
              Rp {item.price.toLocaleString('id-ID')}
            </span>
            <span className="text-primary font-semibold">
              Rp {item.discountPrice.toLocaleString('id-ID')}
            </span>
          </div>
        ) : (
          <span className="text-primary font-semibold">
            Rp {item.price.toLocaleString('id-ID')}
          </span>
        )}
        
        {(isSelected || isHovered) && hasDiscount && (
          <div className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-0.5 rounded">
            {Math.round(((item.price - item.discountPrice) / item.price) * 100)}% OFF
          </div>
        )}
      </div>
    </button>
  );
};

export default TopUpItemCard;