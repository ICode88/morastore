import { getTransactionByInvoice } from "@/lib/data";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import TransactionDetails from "@/components/checkout/TransactionDetails";
import ProgressStepper from "@/components/common/ProgressStepper";
import Countdown from "@/components/common/Countdown";
import PaymentInstructions from "@/components/checkout/PaymentInstructions";
import StatusBadge from "@/components/checkout/StatusBadge";
import Link from "next/link";
import { ArrowLeft, RefreshCcw } from "lucide-react";
import CheckStatus from "./components/CheckStatus";

interface CheckoutPageProps {
  params: {
    invoiceId: string;
  };
}

export async function generateMetadata({ params }: CheckoutPageProps): Promise<Metadata> {
  const transaction = getTransactionByInvoice(params.invoiceId);
  
  if (!transaction) {
    return {
      title: "Checkout Tidak Ditemukan - MoraStore",
      description: "Halaman checkout yang Anda cari tidak ditemukan."
    };
  }
  
  return {
    title: `Checkout ${transaction.invoiceId} - MoraStore`,
    description: `Checkout untuk pembelian ${transaction.itemName} pada game ${transaction.gameName}`,
  };
}

export default function CheckoutPage({ params }: CheckoutPageProps) {
  const transaction = getTransactionByInvoice(params.invoiceId);
  
  if (!transaction) {
    notFound();
  }

  const isTransactionActive = ['pending', 'processing'].includes(transaction.status);
  
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 flex items-center justify-between">
          <Link href="/" className="flex items-center text-gray-400 hover:text-primary">
            <ArrowLeft className="h-4 w-4 mr-1" />
            <span className="text-sm">Kembali ke Beranda</span>
          </Link>
          
          <StatusBadge status={transaction.status} />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-5">
            <TransactionDetails transaction={transaction} />
            
            <div className="mt-6 flex flex-col space-y-4">
              <Link href={`/success/${transaction.invoiceId}`} className="btn-primary py-3 text-center">
                Cek Status
              </Link>
              
              <Link href={`/game/${transaction.gameId}`} className="btn-secondary py-3 text-center">
                Pesan Lagi
              </Link>
            </div>
          </div>
          
          <div className="md:col-span-7">
            <div className="glass-card p-6 mb-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-medium">Status Transaksi</h3>
                {isTransactionActive && (
                  <Countdown expiryTime={transaction.expiresAt} />
                )}
              </div>
              
              <ProgressStepper transactionStatus={transaction.status} />
            </div>
            
            {['pending'].includes(transaction.status) && (
              <PaymentInstructions transaction={transaction} />
            )}
            
            {['processing'].includes(transaction.status) && (
              <div className="border border-primary/30 rounded-lg overflow-hidden">
                <div className="p-4 border-b border-primary/30 bg-black/30">
                  <h3 className="font-medium">Pesanan Sedang Diproses</h3>
                </div>
                
                <div className="p-6 text-center">
                  <p className="text-sm text-gray-300 mb-4">
                    Pembayaran telah diterima. Pesanan Anda sedang diproses dan akan segera dikirimkan.
                  </p>
                  
                  <CheckStatus invoiceId={transaction.invoiceId} />
                </div>
              </div>
            )}
            
            {['success', 'failed', 'expired'].includes(transaction.status) && (
              <div className="border border-primary/30 rounded-lg overflow-hidden">
                <div className="p-4 border-b border-primary/30 bg-black/30">
                  <h3 className="font-medium">
                    {transaction.status === 'success' ? 'Pesanan Berhasil' : 
                     transaction.status === 'failed' ? 'Pesanan Gagal' : 
                     'Pesanan Kadaluarsa'}
                  </h3>
                </div>
                
                <div className="p-6 text-center">
                  <p className="text-sm text-gray-300 mb-4">
                    {transaction.status === 'success' ? 
                      'Pesanan Anda telah berhasil diproses dan dikirimkan ke akun game.' : 
                     transaction.status === 'failed' ? 
                      'Maaf, terjadi kesalahan saat memproses pesanan Anda.' : 
                      'Waktu pembayaran telah habis. Silakan lakukan pemesanan ulang.'}
                  </p>
                  
                  {transaction.status === 'success' ? (
                    <Link href="/ulasan" className="btn-primary px-6 py-2">
                      Beri Ulasan
                    </Link>
                  ) : (
                    <Link href={`/game/${transaction.gameId}`} className="btn-primary px-6 py-2">
                      Pesan Ulang
                    </Link>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}