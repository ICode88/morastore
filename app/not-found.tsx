import Link from "next/link";
import { Coins } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <Coins className="h-20 w-20 text-primary mx-auto mb-6" />
        
        <h1 className="text-4xl md:text-6xl font-bold gold-text mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Halaman Tidak Ditemukan</h2>
        
        <p className="text-gray-400 max-w-md mx-auto mb-8">
          Maaf, halaman yang Anda cari tidak ditemukan. Mungkin telah dihapus, berganti nama, atau tidak tersedia untuk sementara.
        </p>
        
        <Link href="/" className="btn-primary inline-block px-8 py-3">
          Kembali ke Beranda
        </Link>
      </div>
    </div>
  );
}