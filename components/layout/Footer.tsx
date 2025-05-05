import Link from "next/link";
import { Coins, Mail, Phone, MapPin, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-primary/20 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <Coins className="h-6 w-6 text-primary mr-2" />
              <span className="font-bold text-xl gold-text">MoraStore</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Platform top up game online terpercaya dengan harga termurah, proses tercepat, dan layanan 24/7.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Game Populer</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/game/mobile-legends" className="text-gray-400 hover:text-primary">Mobile Legends</Link>
              </li>
              <li>
                <Link href="/game/free-fire" className="text-gray-400 hover:text-primary">Free Fire</Link>
              </li>
              <li>
                <Link href="/game/pubg-mobile" className="text-gray-400 hover:text-primary">PUBG Mobile</Link>
              </li>
              <li>
                <Link href="/game/genshin-impact" className="text-gray-400 hover:text-primary">Genshin Impact</Link>
              </li>
              <li>
                <Link href="/game/call-of-duty-mobile" className="text-gray-400 hover:text-primary">Call of Duty Mobile</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Halaman</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-400 hover:text-primary">Beranda</Link>
              </li>
              <li>
                <Link href="/cek-pesanan" className="text-gray-400 hover:text-primary">Cek Pesanan</Link>
              </li>
              <li>
                <Link href="/ulasan" className="text-gray-400 hover:text-primary">Ulasan</Link>
              </li>
              <li>
                <Link href="/syarat-ketentuan" className="text-gray-400 hover:text-primary">Syarat & Ketentuan</Link>
              </li>
              <li>
                <Link href="/kebijakan-privasi" className="text-gray-400 hover:text-primary">Kebijakan Privasi</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Kontak</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex">
                <Phone className="h-5 w-5 text-primary mr-2" />
                <span className="text-gray-400">+62 812 3456 7890</span>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 text-primary mr-2" />
                <span className="text-gray-400">support@morastore.com</span>
              </li>
              <li className="flex">
                <MapPin className="h-5 w-5 text-primary mr-2" />
                <span className="text-gray-400">Jakarta, Indonesia</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} MoraStore. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/syarat-ketentuan" className="text-gray-500 hover:text-gray-400 text-sm">
                Syarat & Ketentuan
              </Link>
              <Link href="/kebijakan-privasi" className="text-gray-500 hover:text-gray-400 text-sm">
                Kebijakan Privasi
              </Link>
              <Link href="/faq" className="text-gray-500 hover:text-gray-400 text-sm">
                FAQ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;