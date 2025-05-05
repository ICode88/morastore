"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

const banners = [
  {
    id: 1,
    title: "Mobile Legends Diamond",
    description: "Top up Mobile Legends dengan harga termurah!",
    image: "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress",
    link: "/game/mobile-legends",
  },
  {
    id: 2,
    title: "Free Fire Diamond",
    description: "Dapatkan diamond Free Fire dengan harga spesial bulan ini",
    image: "https://images.pexels.com/photos/1293261/pexels-photo-1293261.jpeg?auto=compress",
    link: "/game/free-fire",
  },
  {
    id: 3,
    title: "PUBG Mobile UC",
    description: "Promo spesial UC PUBG Mobile! Diskon hingga 15%",
    image: "https://images.pexels.com/photos/1174746/pexels-photo-1174746.jpeg?auto=compress",
    link: "/game/pubg-mobile",
  },
];

const HeroBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[500px] md:h-[600px] overflow-hidden">
      {banners.map((banner, index) => (
        <div
          key={banner.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <Image
            src={banner.image}
            alt={banner.title}
            className="object-cover w-full h-full"
            fill
            priority={index === 0}
          />
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <div className="text-center max-w-3xl px-4">
              <h1 className="text-4xl md:text-6xl font-bold gold-text mb-4">
                {banner.title}
              </h1>
              <p className="text-lg md:text-xl text-white mb-8">
                {banner.description}
              </p>
              <Link href={banner.link} className="btn-primary text-base md:text-lg px-8 py-3">
                Top Up Sekarang
              </Link>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-black/30 hover:bg-black/50 rounded-full p-2 text-white"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-black/30 hover:bg-black/50 rounded-full p-2 text-white"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? "bg-primary" : "bg-white/30"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default HeroBanner;