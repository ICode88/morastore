"use client";

import { useState } from "react";
import RatingStars from "@/components/common/RatingStars";
import LoadingSpinner from "@/components/common/LoadingSpinner";

interface ReviewFormProps {
  invoiceId: string;
  gameName: string;
}

const ReviewForm = ({ invoiceId, gameName }: ReviewFormProps) => {
  const [name, setName] = useState("");
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim()) {
      setError("Nama harus diisi");
      return;
    }
    
    if (!comment.trim()) {
      setError("Ulasan harus diisi");
      return;
    }
    
    setError(null);
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-6">
        <div className="inline-block mb-4 bg-primary/20 p-3 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-medium mb-2">Terima Kasih atas Ulasan Anda!</h3>
        <p className="text-gray-400">
          Kami sangat menghargai masukan Anda. Ulasan ini akan membantu kami meningkatkan layanan.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            Nama
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nama Anda"
            className="w-full bg-secondary/50 border border-primary/30 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary placeholder-gray-600"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">
            Rating
          </label>
          <div className="flex items-center">
            <RatingStars 
              rating={rating} 
              size="lg" 
              interactive 
              onRatingChange={setRating} 
            />
            <span className="ml-2 text-gray-400 text-sm">{rating}/5</span>
          </div>
        </div>
        
        <div>
          <label htmlFor="comment" className="block text-sm font-medium mb-1">
            Ulasan
          </label>
          <textarea
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder={`Bagaimana pengalaman top up ${gameName} di MoraStore?`}
            rows={4}
            className="w-full bg-secondary/50 border border-primary/30 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary placeholder-gray-600"
          />
        </div>
        
        {error && (
          <p className="text-red-500 text-xs">{error}</p>
        )}
        
        <button
          type="submit"
          disabled={isLoading}
          className="w-full btn-primary py-2 text-center flex items-center justify-center"
        >
          {isLoading ? (
            <>
              <LoadingSpinner size="sm" color="black" />
              <span className="ml-2">Mengirim...</span>
            </>
          ) : (
            "Kirim Ulasan"
          )}
        </button>
      </div>
    </form>
  );
};

export default ReviewForm;