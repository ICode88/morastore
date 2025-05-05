"use client";

import Image from "next/image";
import { Transaction } from "@/lib/types";
import { ClipboardCopy, CheckCircle2 } from "lucide-react";
import { useState } from "react";

interface PaymentInstructionsProps {
  transaction: Transaction;
}

const PaymentInstructions = ({ transaction }: PaymentInstructionsProps) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const renderPaymentMethod = () => {
    const { paymentMethodId, paymentDetails } = transaction;
    
    if (paymentMethodId === 'qris' && paymentDetails?.qrCode) {
      return (
        <div className="flex flex-col items-center space-y-4">
          <p className="text-sm text-center">Scan QR Code di bawah ini untuk melakukan pembayaran:</p>
          <div className="bg-white p-3 rounded-lg shadow-lg">
            <Image 
              src={paymentDetails.qrCode} 
              alt="QRIS Payment" 
              width={200} 
              height={200}
              className="rounded"
            />
          </div>
        </div>
      );
    }
    
    // For VA and E-wallet payments
    if (paymentDetails?.accountNumber) {
      return (
        <div className="space-y-4">
          <div className="text-sm text-center">Transfer ke nomor rekening berikut:</div>
          
          <div className="flex items-center justify-between bg-primary/10 border border-primary/30 rounded p-3">
            <div>
              <p className="text-gray-400 text-xs">Nomor {paymentMethodId.includes('bank') ? 'Rekening' : 'Virtual Account'}</p>
              <p className="font-mono text-lg font-semibold">{paymentDetails.accountNumber}</p>
            </div>
            <button 
              onClick={() => copyToClipboard(paymentDetails.accountNumber)}
              className="bg-primary/20 hover:bg-primary/30 text-primary p-2 rounded-md transition-colors"
            >
              {copied ? <CheckCircle2 className="h-5 w-5" /> : <ClipboardCopy className="h-5 w-5" />}
            </button>
          </div>
          
          {paymentDetails.accountName && (
            <div className="text-center text-sm">
              <p className="text-gray-400">a/n</p>
              <p>{paymentDetails.accountName}</p>
            </div>
          )}
        </div>
      );
    }
    
    return (
      <div className="text-center text-sm text-gray-400">
        Tidak ada instruksi pembayaran yang tersedia.
      </div>
    );
  };

  return (
    <div className="border border-primary/30 rounded-lg overflow-hidden">
      <div className="p-4 border-b border-primary/30 bg-black/30">
        <h3 className="font-medium">Instruksi Pembayaran</h3>
      </div>
      
      <div className="p-6">
        {renderPaymentMethod()}
        
        <div className="mt-6 space-y-2">
          <p className="text-sm text-yellow-500">
            <strong>Penting:</strong> Harap lakukan pembayaran sebelum waktu expired
          </p>
          <ul className="list-disc list-inside text-sm text-gray-400 space-y-1">
            <li>Pembayaran akan diverifikasi secara otomatis</li>
            <li>Simpan bukti pembayaran sampai transaksi selesai</li>
            <li>Jika ada kendala hubungi kami melalui WhatsApp</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PaymentInstructions;