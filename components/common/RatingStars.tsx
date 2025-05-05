import { Star } from "lucide-react";

interface RatingStarsProps {
  rating: number;
  maxRating?: number;
  size?: 'sm' | 'md' | 'lg';
  interactive?: boolean;
  onRatingChange?: (rating: number) => void;
}

const RatingStars = ({
  rating,
  maxRating = 5,
  size = 'md',
  interactive = false,
  onRatingChange,
}: RatingStarsProps) => {
  const sizeClasses = {
    sm: 'w-3 h-3',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  };

  const handleClick = (newRating: number) => {
    if (interactive && onRatingChange) {
      onRatingChange(newRating);
    }
  };

  return (
    <div className="flex">
      {[...Array(maxRating)].map((_, index) => {
        const starValue = index + 1;
        const isFilled = starValue <= rating;
        const isHalfFilled = !isFilled && starValue - 0.5 <= rating;

        return (
          <button
            key={index}
            type="button"
            className={`${interactive ? 'cursor-pointer' : 'cursor-default'} p-0 mr-1`}
            onClick={() => handleClick(starValue)}
            disabled={!interactive}
          >
            <Star
              className={`${sizeClasses[size]} ${
                isFilled ? 'text-yellow-400 fill-yellow-400' : 
                isHalfFilled ? 'text-yellow-400 fill-yellow-400 half-filled' : 
                'text-gray-400'
              }`}
            />
          </button>
        );
      })}
    </div>
  );
};

export default RatingStars;