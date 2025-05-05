import { Transaction } from "@/lib/types";
import { ClipboardCopy } from "lucide-react";

interface TransactionDetailsProps {
  transaction: Transaction;
  showCopyInvoice?: boolean;
}

const TransactionDetails = ({ 
  transaction,
  showCopyInvoice = true
}: TransactionDetailsProps) => {
  const hasDiscount = transaction.discount > 0;
  
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // In a real app, you would add a toast notification here
  };

  return (
    <div className="border border-primary/30 rounded-lg overflow-hidden">
      <div className="p-4 border-b border-primary/30 bg-black/30">
        <div className="flex justify-between items-center">
          <h3 className="font-medium">Detail Transaksi</h3>
          {showCopyInvoice && (
            <button 
              onClick={() => copyToClipboard(transaction.invoiceId)}
              className="text-xs flex items-center text-primary hover:underline"
            >
              <ClipboardCopy className="h-3 w-3 mr-1" />
              Salin Invoice
            </button>
          )}
        </div>
      </div>
      
      <div className="p-4">
        <div className="space-y-3 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-400">Invoice ID</span>
            <span className="font-medium">{transaction.invoiceId}</span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-gray-400">Game</span>
            <span className="font-medium">{transaction.gameName}</span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-gray-400">Item</span>
            <span className="font-medium">{transaction.itemName}</span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-gray-400">Harga</span>
            <span className="font-medium">Rp {transaction.price.toLocaleString('id-ID')}</span>
          </div>
          
          {hasDiscount && (
            <div className="flex justify-between">
              <span className="text-gray-400">Diskon</span>
              <span className="font-medium text-green-500">- Rp {transaction.discount.toLocaleString('id-ID')}</span>
            </div>
          )}
          
          <div className="flex justify-between">
            <span className="text-gray-400">Metode Pembayaran</span>
            <span className="font-medium">{transaction.paymentMethodName}</span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-gray-400">WhatsApp</span>
            <span className="font-medium">{transaction.whatsapp}</span>
          </div>
          
          <div className="pt-2 border-t border-primary/20">
            <div className="flex justify-between">
              <span className="font-medium">Total Pembayaran</span>
              <span className="font-bold text-primary">Rp {transaction.total.toLocaleString('id-ID')}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionDetails;