import { getGameBySlug, getItemsByGameId, games } from "@/lib/data";
import Image from "next/image";
import { Star, HelpCircle, AlertCircle } from "lucide-react";
import SectionTitle from "@/components/common/SectionTitle";
import { Metadata } from "next";
import TopUpItemCard from "@/components/game/TopUpItemCard";
import PromoInput from "@/components/game/PromoInput";
import WhatsAppInput from "@/components/game/WhatsAppInput";
import PaymentMethodCard from "@/components/game/PaymentMethodCard";
import AccordionInstruction from "@/components/game/AccordionInstruction";
import GameIDInput from "./components/GameIDInput";
import TopUpForm from "./components/TopUpForm";

interface GamePageParams {
  params: {
    slug: string;
  };
}
games
export async function generateStaticParams() {
  const gamess = games;
  return gamess.map((game:any) => ({
    slug: game.slug,
  }));
}

export async function generateMetadata({ params }: GamePageParams): Promise<Metadata> {
  const game = getGameBySlug(params.slug);
  
  if (!game) {
    return {
      title: "Game Tidak Ditemukan - MoraStore",
      description: "Halaman game yang Anda cari tidak ditemukan."
    };
  }
  
  return {
    title: `Top Up ${game.name} - MoraStore`,
    description: `Top up ${game.name} dengan harga termurah dan proses tercepat hanya di MoraStore.`,
    keywords: [`top up ${game.name}`, `diamond ${game.name}`, "top up game", "MoraStore"],
  };
}

export default function GamePage({ params }: GamePageParams) {
  const game = getGameBySlug(params.slug);
  
  if (!game) {
    return (
      <div className="container mx-auto px-4 py-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <AlertCircle className="mx-auto h-16 w-16 text-primary mb-4" />
          <h1 className="text-2xl font-bold mb-2">Game Tidak Ditemukan</h1>
          <p className="text-gray-400 mb-6">
            Maaf, game yang Anda cari tidak tersedia di MoraStore.
          </p>
          <a href="/" className="btn-primary">
            Kembali ke Beranda
          </a>
        </div>
      </div>
    );
  }
  
  const items = getItemsByGameId(game.id);
  
  const instructionItems = [
    {
      title: "Cara Top Up",
      content: `1. Masukkan ID ${game.name} Anda\n2. Pilih jumlah Diamond/item yang diinginkan\n3. Pilih metode pembayaran\n4. Isi nomor WhatsApp yang aktif\n5. Klik "Pesan Sekarang" dan lakukan pembayaran\n6. Diamond/item akan langsung masuk ke akun Anda setelah pembayaran berhasil`
    },
    {
      title: "Metode Pembayaran",
      content: "MoraStore menerima berbagai metode pembayaran seperti DANA, OVO, GoPay, ShopeePay, Transfer Bank, QRIS, Indomaret, Alfamart, dan lainnya. Semua pembayaran diproses secara instan."
    },
    {
      title: "Syarat & Ketentuan",
      content: "1. Pastikan ID yang dimasukkan benar\n2. Semua pembayaran yang telah diproses tidak dapat dikembalikan\n3. Harga dan ketersediaan item dapat berubah sewaktu-waktu\n4. MoraStore tidak bertanggung jawab atas kesalahan pengguna dalam memasukkan ID\n5. Dengan melakukan transaksi di MoraStore, pengguna dianggap telah menyetujui syarat dan ketentuan"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Game Info (Left Side) */}
        <div className="lg:col-span-1">
          <div className="sticky top-24">
            <div className="rounded-lg overflow-hidden relative aspect-[4/3] mb-4">
              <Image 
                src={game.image} 
                alt={game.name} 
                className="object-cover" 
                fill 
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h1 className="text-2xl font-bold mb-1">{game.name}</h1>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 text-sm">{game.category}</span>
                  <div className="flex items-center bg-black/50 rounded-full px-2 py-1">
                    <Star className="w-4 h-4 text-yellow-400 mr-1 fill-yellow-400" />
                    <span className="text-gray-300 text-sm">{game.rating.toFixed(1)}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-4">
              <h3 className="text-lg font-medium mb-2">Deskripsi</h3>
              <p className="text-gray-400 text-sm">
                {game.description}
              </p>
            </div>
            
            <div className="mt-6">
              <AccordionInstruction items={instructionItems} />
            </div>
          </div>
        </div>
        
        {/* Top Up Form (Right Side) */}
        <div className="lg:col-span-2">
          <SectionTitle title={`Top Up ${game.name}`} />
          
          <TopUpForm gameId={game.id} gameName={game.name} />
        </div>
      </div>
    </div>
  );
}