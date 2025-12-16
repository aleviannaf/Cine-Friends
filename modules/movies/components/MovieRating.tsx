import React from 'react';
import { Star } from 'lucide-react';

interface MovieRatingProps {
  rating: number | null;
  onRate?: (rating: number) => void;
  readOnly?: boolean;
}

export const MovieRating: React.FC<MovieRatingProps> = ({ rating, onRate, readOnly = false }) => {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="flex gap-1">
      {stars.map((star) => (
        <button
          key={star}
          disabled={readOnly}
          onClick={(e) => {
            e.stopPropagation();
            if (onRate) onRate(star * 2); // Convert 5 stars to 10 scale
          }}
          className={`transition-transform ${!readOnly ? 'hover:scale-110' : 'cursor-default'}`}
        >
          <Star
            size={16}
            className={`
              ${(rating || 0) / 2 >= star 
                ? 'fill-yellow-500 text-yellow-500' 
                : 'fill-cine-800 text-cine-700'
              }
            `}
          />
        </button>
      ))}
    </div>
  );
};