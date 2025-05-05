import { Testimonial } from "@/lib/types";
import RatingStars from "@/components/common/RatingStars";
import { User } from "lucide-react";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <div className="glass-card p-4 h-full flex flex-col">
      <div className="flex items-center mb-3">
        <div className="flex-shrink-0 mr-3">
          {testimonial.avatar ? (
            <img
              src={testimonial.avatar}
              alt={testimonial.name}
              className="w-10 h-10 rounded-full object-cover"
            />
          ) : (
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
              <User className="h-5 w-5 text-primary" />
            </div>
          )}
        </div>
        <div>
          <h3 className="font-medium text-sm">{testimonial.name}</h3>
          <div className="flex items-center">
            <RatingStars rating={testimonial.rating} size="sm" />
            <span className="text-xs text-gray-400 ml-2">{testimonial.date}</span>
          </div>
        </div>
      </div>
      
      <p className="text-sm text-gray-300 flex-grow">
        {testimonial.comment}
      </p>
      
      {testimonial.gameName && (
        <div className="mt-3 pt-3 border-t border-primary/20">
          <span className="text-xs text-gray-400">
            Game: <span className="text-primary">{testimonial.gameName}</span>
          </span>
        </div>
      )}
    </div>
  );
};

export default TestimonialCard;