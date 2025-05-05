"use client";

import HeroBanner from '@/components/game/HeroBanner';
import GameCard from '@/components/common/GameCard';
import SectionTitle from '@/components/common/SectionTitle';
import GameCategoryFilter from '@/components/game/GameCategoryFilter';
import { games, categories } from '@/lib/data';
import { Shield, Zap, HeadphonesIcon, Clock } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const popularGames = games.filter(game => game.isPopular);
  
  return (
    <div className="min-h-screen">
      <HeroBanner />
      
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <SectionTitle
            title="Game Populer"
            subtitle="Top up game favoritmu dengan harga termurah"
            centered
          />
          
          <GameCategoryFilter onCategoryChange={() => {}} />
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-6">
            {popularGames.map(game => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <Link href="/games" className="btn-secondary">
              Lihat Semua Game
            </Link>
          </div>
        </div>
      </section>
      
      <section className="py-12 px-4 bg-gradient-to-b from-black to-black/90">
        <div className="container mx-auto">
          <SectionTitle
            title="Game Lainnya"
            subtitle="Top up game favoritmu dengan harga termurah"
            centered
          />
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-8">
            {games.slice(0, 10).map(game => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 px-4 bg-black/60">
        <div className="container mx-auto">
          <SectionTitle
            title="Keunggulan MoraStore"
            subtitle="Mengapa harus top up di MoraStore?"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            <div className="glass-card p-6 text-center">
              <div className="w-16 h-16 mx-auto bg-primary/20 rounded-full flex items-center justify-center mb-4">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Proses Cepat</h3>
              <p className="text-gray-400 text-sm">
                Transaksi diproses secara instan, diamond langsung masuk ke akunmu
              </p>
            </div>
            
            <div className="glass-card p-6 text-center">
              <div className="w-16 h-16 mx-auto bg-primary/20 rounded-full flex items-center justify-center mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Keamanan Terjamin</h3>
              <p className="text-gray-400 text-sm">
                Data-data kamu 100% aman, transaksi dilakukan dengan enkripsi tingkat tinggi
              </p>
            </div>
            
            <div className="glass-card p-6 text-center">
              <div className="w-16 h-16 mx-auto bg-primary/20 rounded-full flex items-center justify-center mb-4">
                <HeadphonesIcon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Support 24 Jam</h3>
              <p className="text-gray-400 text-sm">
                Tim support kami siap membantu kamu kapanpun via WhatsApp 24/7
              </p>
            </div>
            
            <div className="glass-card p-6 text-center">
              <div className="w-16 h-16 mx-auto bg-primary/20 rounded-full flex items-center justify-center mb-4">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Promo Berkala</h3>
              <p className="text-gray-400 text-sm">
                Nikmati berbagai promo dan diskon menarik setiap minggunya
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-20 px-4 bg-gradient-to-b from-black/90 to-black">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-4xl font-bold mb-6 gold-text">
              Top Up Game Favoritmu Sekarang!
            </h2>
            <p className="text-gray-300 mb-8">
              MoraStore menyediakan layanan top up game online dengan harga termurah, proses tercepat, dan pelayanan terpercaya 24/7.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/games" className="btn-primary px-8 py-3 text-lg">
                Mulai Top Up
              </Link>
              <Link href="/ulasan" className="btn-secondary px-8 py-3 text-lg">
                Lihat Ulasan
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}