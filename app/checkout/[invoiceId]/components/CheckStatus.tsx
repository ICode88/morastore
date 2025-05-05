"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import LoadingSpinner from "@/components/common/LoadingSpinner";
import { RefreshCcw } from "lucide-react";

interface CheckStatusProps {
  invoiceId: string;
}

const CheckStatus = ({ invoiceId }: CheckStatusProps) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleCheckStatus = () => {
    setIsLoading(true);
    
    // Simulate API call to check status
    setTimeout(() => {
      setIsLoading(false);
      
      // Randomly redirect to success or keep on the same page
      const isSuccess = Math.random() > 0.5;
      
      if (isSuccess) {
        router.push(`/success/${invoiceId}`);
      } else {
        // Refresh the current page to show updated status
        router.refresh();
      }
    }, 1500);
  };

  return (
    <button
      onClick={handleCheckStatus}
      disabled={isLoading}
      className="btn-primary flex items-center justify-center mx-auto"
    >
      {isLoading ? (
        <>
          <LoadingSpinner size="sm" color="black" />
          <span className="ml-2">Memeriksa...</span>
        </>
      ) : (
        <>
          <RefreshCcw className="h-4 w-4 mr-2" />
          Periksa Status
        </>
      )}
    </button>
  );
};

export default CheckStatus;