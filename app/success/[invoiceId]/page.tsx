import { getTransactionByInvoice } from "@/lib/data";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import TransactionDetails from "@/components/checkout/TransactionDetails";
import Link from "next/link";
import { ArrowLeft, CheckCircle, Copy, Share2 } from "lucide-react";
import Image from "next/image";
import RatingStars from "@/components/common/RatingStars";
import ReviewForm from "./components/ReviewForm";

interface SuccessPageProps {
  params: {
    invoiceId: string;
  };
}

export async function generateMetadata({ params }: SuccessPageProps): Promise<Metadata> {
  const transaction = getTransactionByInvoice(params.invoiceId);
  
  if (!transaction) {
    return {
      title: "Transaksi Tidak Ditemukan - MoraStore",
      description: "Halaman transaksi yang Anda cari tidak ditemukan."
    };
  }
  
  return {
    title: `Transaksi Berhasil ${transaction.invoiceId} - MoraStore`,
    description: `Transaksi pembelian ${transaction.itemName} pada game ${transaction.gameName} telah berhasil`,
  };
}

export default function SuccessPage({ params }: SuccessPageProps) {
  const transaction = getTransactionByInvoice(params.invoiceId);
  
  if (!transaction || transaction.status !== 'success') {
    notFound();
  }
  
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 flex items-center justify-between">
          <Link href="/" className="flex items-center text-gray-400 hover:text-primary">
            <ArrowLeft className="h-4 w-4 mr-1" />
            <span className="text-sm">Kembali ke Beranda</span>
          </Link>
        </div>
        
        <div className="text-center mb-10">
          <div className="inline-block mb-4 bg-green-500/20 p-4 rounded-full">
            <CheckCircle className="h-12 w-12 text-green-500" />
          </div>
          <h1 className="text-3xl font-bold mb-2">Transaksi Berhasil!</h1>
          <p className="text-gray-400 max-w-md mx-auto">
            Terima kasih atas pembelian Anda. Item telah dikirimkan ke akun game Anda.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div>
            <TransactionDetails transaction={transaction} />
            
            <div className="mt-6 space-y-4">
              <Link href={`/game/${transaction.gameId}`} className="btn-primary block text-center py-3">
                Pesan Lagi
              </Link>
              
              <div className="flex items-center justify-center space-x-4">
                <a 
                  href={`https://api.whatsapp.com/send?phone=628123456789&text=Halo%20MoraStore,%20saya%20ingin%20bertanya%20tentang%20transaksi%20dengan%20invoice%20${transaction.invoiceId}`} 
                  target="_blank"
                  className="text-gray-400 hover:text-primary flex items-center text-sm"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-1">
                    <path d="M16.6 14c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1-.7-.3-1.4-.7-2-1.2-.5-.5-1-1.1-1.4-1.7-.1-.2 0-.4.1-.5.1-.1.2-.3.4-.4.1-.1.2-.3.2-.4.1-.1.1-.3 0-.4-.1-.1-.6-1.3-.8-1.8-.1-.7-.3-.7-.5-.7h-.5c-.2 0-.5.2-.6.3-.6.6-.9 1.3-.9 2.1.1.9.4 1.8 1 2.6 1.1 1.6 2.5 2.9 4.2 3.7.5.2.9.4 1.4.5.5.2 1 .2 1.6.1.7-.1 1.3-.6 1.7-1.2.2-.4.2-.8.1-1.2l-.4-.2m2.5-9.1C15.2 1 8.9 1 5 4.9c-3.2 3.2-3.8 8.1-1.6 12L2 22l5.3-1.4c1.5.8 3.1 1.2 4.7 1.2 5.5 0 9.9-4.4 9.9-9.9.1-2.6-1-5.1-2.8-7m-2.7 14c-1.3.8-2.8 1.3-4.4 1.3-1.5 0-2.9-.4-4.2-1.1l-.3-.2-3.1.8.8-3-.2-.3c-2.4-4-1.2-9 2.7-11.5S16.6 3.7 19 7.5c2.4 3.9 1.3 9-2.6 11.4"/>
                  </svg>
                  Bantuan
                </a>
                
                <button 
                  className="text-gray-400 hover:text-primary flex items-center text-sm"
                  onClick={() => navigator.clipboard.writeText(transaction.invoiceId)}
                >
                  <Copy className="h-4 w-4 mr-1" />
                  Salin Invoice
                </button>
                
                <button 
                  className="text-gray-400 hover:text-primary flex items-center text-sm"
                >
                  <Share2 className="h-4 w-4 mr-1" />
                  Bagikan
                </button>
              </div>
            </div>
          </div>
          
          <div>
            <div className="glass-card p-6">
              <h2 className="text-lg font-medium mb-4">Beri Ulasan</h2>
              <ReviewForm invoiceId={transaction.invoiceId} gameName={transaction.gameName} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}