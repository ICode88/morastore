import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import { Game } from "@/lib/types";

interface GameCardProps {
  game: Game;
  featured?: boolean;
}

const GameCard = ({ game, featured = false }: GameCardProps) => {
  return (
    <Link href={`/game/${game.slug}`} className={`game-card block group ${featured ? 'h-full' : ''}`}>
      <div className="relative overflow-hidden aspect-[4/5]">
        <Image
          src={game.image}
          alt={game.name}
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
          width={300}
          height={375}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
        
        {game.isPopular && !featured && (
          <div className="absolute top-2 right-2 bg-primary text-black px-2 py-1 rounded text-xs font-semibold">
            Populer
          </div>
        )}
        
        <div className="absolute bottom-0 left-0 right-0 p-3">
          <h3 className="text-white font-semibold mb-1 group-hover:text-primary transition-colors">
            {game.name}
          </h3>
          <div className="flex justify-between items-center">
            <span className="text-gray-300 text-xs">{game.category}</span>
            <div className="flex items-center">
              <Star className="w-3.5 h-3.5 text-yellow-400 mr-1 fill-yellow-400" />
              <span className="text-gray-300 text-xs">{game.rating.toFixed(1)}</span>
            </div>
          </div>
        </div>
      </div>
      
      {featured && (
        <div className="p-4 border-t border-primary/30">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-white font-semibold group-hover:text-primary transition-colors">
              {game.name}
            </h3>
            {game.isPopular && (
              <div className="bg-primary text-black px-2 py-1 rounded text-xs font-semibold">
                Populer
              </div>
            )}
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-300 text-sm">{game.category}</span>
            <div className="flex items-center">
              <Star className="w-4 h-4 text-yellow-400 mr-1 fill-yellow-400" />
              <span className="text-gray-300 text-sm">{game.rating.toFixed(1)}</span>
            </div>
          </div>
          <p className="text-gray-400 text-sm mt-2 line-clamp-2">
            {game.description}
          </p>
          <button className="btn-primary mt-4 w-full">Top Up Sekarang</button>
        </div>
      )}
    </Link>
  );
};

export default GameCard;