"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Coins, Search, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-black/90 backdrop-blur-sm shadow-lg" : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Coins className="h-8 w-8 text-primary" />
            <span className="font-bold text-2xl text-white">
              <span className="gold-text">MORA</span>STORE
            </span>
          </Link>

          {/* Search Centered (Desktop Only) */}
          <div className="flex-1 hidden md:flex justify-center">
            <div className="relative w-full mx-4">
              <input
                type="text"
                placeholder="Cari game..."
                className="w-full bg-secondary/50 border border-primary/30 rounded-md py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            </div>
          </div>

          {/* Cek Pesanan (Desktop Only) */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/cek-pesanan"
              className="px-4 py-2 btn-primary text-sm "
            >
              Cek Pesanan
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              {/* Search input */}
              <div className="relative mb-4">
                <input
                  type="text"
                  placeholder="Cari game..."
                  className="w-full bg-secondary/50 border border-primary/30 rounded-md py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              </div>

              {/* Menu Links */}
              <Link
                href="/"
                className={`px-3 py-2 text-sm font-medium rounded-md ${pathname === "/"
                    ? "bg-primary/10 text-primary"
                    : "text-gray-300 hover:bg-gray-800"
                  }`}
              >
                Beranda
              </Link>
              <Link
                href="/cek-pesanan"
                className={`px-3 py-2 text-sm font-medium rounded-md ${pathname === "/cek-pesanan"
                    ? "bg-primary/10 text-primary"
                    : "text-gray-300 hover:bg-gray-800"
                  }`}
              >
                Cek Pesanan
              </Link>
              <Link
                href="/ulasan"
                className={`px-3 py-2 text-sm font-medium rounded-md ${pathname === "/ulasan"
                    ? "bg-primary/10 text-primary"
                    : "text-gray-300 hover:bg-gray-800"
                  }`}
              >
                Ulasan
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
