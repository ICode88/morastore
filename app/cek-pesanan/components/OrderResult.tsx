"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { getTransactionsByWhatsapp, dummyTransactions } from "@/lib/data";
import { Transaction } from "@/lib/types";
import TransactionTable from "@/components/checkout/TransactionTable";
import LoadingSpinner from "@/components/common/LoadingSpinner";

const OrderResult = () => {
  const searchParams = useSearchParams();
  const whatsappParam = searchParams.get('whatsapp');
  
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (whatsappParam) {
      setIsLoading(true);
      setIsError(false);
      
      // Simulate API call
      setTimeout(() => {
        try {
          const results = getTransactionsByWhatsapp(whatsappParam);
          setTransactions(results);
        } catch (error) {
          setIsError(true);
        } finally {
          setIsLoading(false);
        }
      }, 1000);
    } else {
      // Show some recent transactions by default
      setTransactions(dummyTransactions.slice(0, 3));
    }
  }, [whatsappParam]);

  if (isLoading) {
    return (
      <div className="py-10 flex justify-center">
        <LoadingSpinner text="Mengambil data transaksi..." />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-center py-8">
        <p className="text-red-500">Terjadi kesalahan saat mengambil data transaksi.</p>
      </div>
    );
  }

  return (
    <div>
      {whatsappParam && (
        <div className="mb-4 p-3 bg-primary/10 border border-primary/30 rounded-md">
          <p className="text-sm">
            Menampilkan transaksi untuk WhatsApp: <strong>{whatsappParam}</strong>
          </p>
        </div>
      )}
      
      <TransactionTable transactions={transactions} />
    </div>
  );
};

export default OrderResult;