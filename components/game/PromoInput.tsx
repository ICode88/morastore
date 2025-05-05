"use client";

import { useState } from "react";
import { validatePromoCode, calculateDiscount } from "@/lib/data";
import { Promo } from "@/lib/types";
import { Check, X } from "lucide-react";

interface PromoInputProps {
  amount: number;
  onDiscount: (discount: number, promoCode: string) => void;
}

const PromoInput = ({ amount, onDiscount }: PromoInputProps) => {
  const [code, setCode] = useState("");
  const [isApplied, setIsApplied] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [appliedPromo, setAppliedPromo] = useState<Promo | null>(null);

  const handleApply = () => {
    if (!code.trim()) {
      setError("Masukkan kode promo");
      return;
    }

    setIsLoading(true);
    setError(null);

    // Simulate API call
    setTimeout(() => {
      const promo = validatePromoCode(code.trim().toUpperCase(), amount);
      
      if (promo) {
        const discount = calculateDiscount(amount, promo);
        setAppliedPromo(promo);
        setIsApplied(true);
        onDiscount(discount, code);
      } else {
        setError("Kode promo tidak valid atau sudah kadaluarsa");
        onDiscount(0, "");
      }
      
      setIsLoading(false);
    }, 800);
  };

  const handleReset = () => {
    setCode("");
    setIsApplied(false);
    setError(null);
    setAppliedPromo(null);
    onDiscount(0, "");
  };

  return (
    <div className="border border-primary/30 rounded-lg p-4">
      <p className="text-sm font-medium mb-2">Kode Promo</p>
      <div className="flex space-x-2">
        <div className="relative flex-1">
          <input
            type="text"
            value={code}
            onChange={(e) => {
              setCode(e.target.value);
              setError(null);
            }}
            disabled={isApplied || isLoading}
            placeholder="Masukkan kode promo"
            className="w-full bg-secondary/50 border border-primary/30 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary placeholder-gray-600 uppercase"
          />
          {isApplied && (
            <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
              <div className="bg-green-500/20 text-green-500 p-1 rounded-full">
                <Check className="h-4 w-4" />
              </div>
            </div>
          )}
        </div>
        
        {isApplied ? (
          <button 
            onClick={handleReset}
            className="px-3 py-2 bg-red-500/20 hover:bg-red-500/30 text-red-500 rounded-md text-sm transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        ) : (
          <button
            onClick={handleApply}
            disabled={isLoading}
            className="btn-primary"
          >
            {isLoading ? 'Loading...' : 'Pakai'}
          </button>
        )}
      </div>
      
      {error && (
        <p className="text-xs text-red-500 mt-1">{error}</p>
      )}
      
      {isApplied && appliedPromo && (
        <div className="mt-2 bg-primary/10 border border-primary/30 rounded p-2 text-xs">
          <p className="font-medium text-primary">
            Diskon {appliedPromo.discount}% berhasil diterapkan!
          </p>
          {appliedPromo.maxDiscount && (
            <p className="text-gray-400">
              Maksimal Rp {appliedPromo.maxDiscount.toLocaleString('id-ID')}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default PromoInput;