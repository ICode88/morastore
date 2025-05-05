"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import LoadingSpinner from "@/components/common/LoadingSpinner";
import { getTransactionByInvoice, getTransactionsByWhatsapp } from "@/lib/data";
import { Transaction } from "@/lib/types";

const OrderCheckForm = () => {
  const router = useRouter();
  const [searchType, setSearchType] = useState<"invoice" | "whatsapp">("invoice");
  const [invoiceId, setInvoiceId] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (searchType === "invoice" && !invoiceId.trim()) {
      setError("Invoice ID harus diisi");
      return;
    }
    
    if (searchType === "whatsapp" && !whatsapp.trim()) {
      setError("Nomor WhatsApp harus diisi");
      return;
    }
    
    setError(null);
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      if (searchType === "invoice") {
        const transaction = getTransactionByInvoice(invoiceId.trim());
        
        if (transaction) {
          router.push(`/checkout/${transaction.invoiceId}`);
        } else {
          setError("Invoice tidak ditemukan");
        }
      } else {
        // For WhatsApp search, we'll just reload the page with a URL param
        // In a real app, this would use a proper state management solution
        router.push(`/cek-pesanan?whatsapp=${encodeURIComponent(whatsapp.trim())}`);
      }
      
      setIsLoading(false);
    }, 1000);
  };

  const handleSearchTypeChange = (type: "invoice" | "whatsapp") => {
    setSearchType(type);
    setError(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-4">
        <div className="flex border border-primary/30 rounded-md overflow-hidden">
          <button
            type="button"
            className={`flex-1 py-2 text-center text-sm transition-colors ${
              searchType === "invoice"
                ? "bg-primary text-black font-medium"
                : "bg-secondary text-gray-400 hover:bg-secondary/80"
            }`}
            onClick={() => handleSearchTypeChange("invoice")}
          >
            Cari dengan Invoice
          </button>
          <button
            type="button"
            className={`flex-1 py-2 text-center text-sm transition-colors ${
              searchType === "whatsapp"
                ? "bg-primary text-black font-medium"
                : "bg-secondary text-gray-400 hover:bg-secondary/80"
            }`}
            onClick={() => handleSearchTypeChange("whatsapp")}
          >
            Cari dengan WhatsApp
          </button>
        </div>

        {searchType === "invoice" ? (
          <div>
            <label htmlFor="invoiceId" className="block text-sm font-medium mb-1">
              Invoice ID
            </label>
            <input
              id="invoiceId"
              type="text"
              value={invoiceId}
              onChange={(e) => setInvoiceId(e.target.value)}
              placeholder="Masukkan Invoice ID (contoh: INV12345678)"
              className="w-full bg-secondary/50 border border-primary/30 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary placeholder-gray-600"
            />
          </div>
        ) : (
          <div>
            <label htmlFor="whatsapp" className="block text-sm font-medium mb-1">
              Nomor WhatsApp
            </label>
            <input
              id="whatsapp"
              type="tel"
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
              placeholder="Masukkan nomor WhatsApp (contoh: 08123456789)"
              className="w-full bg-secondary/50 border border-primary/30 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary placeholder-gray-600"
            />
          </div>
        )}

        {error && <p className="text-red-500 text-xs">{error}</p>}

        <button
          type="submit"
          disabled={isLoading}
          className="w-full btn-primary py-3 text-center flex items-center justify-center"
        >
          {isLoading ? (
            <>
              <LoadingSpinner size="sm" color="black" />
              <span className="ml-2">Mencari...</span>
            </>
          ) : (
            "Cek Pesanan"
          )}
        </button>
      </div>
    </form>
  );
};

export default OrderCheckForm;