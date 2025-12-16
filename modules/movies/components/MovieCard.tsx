import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Eye } from 'lucide-react';
import { Movie } from '../../../core/types';
import { Button } from '../../../shared/ui/Button';
import { Badge } from '../../../shared/ui/Badge';

interface MovieCardProps {
  movie: Movie;
  onToggleWatched: (id: string) => void;
  onSelect: (movie: Movie) => void;
}

export const MovieCard: React.FC<MovieCardProps> = ({ movie, onToggleWatched, onSelect }) => {
  return (
    <motion.div
      layoutId={`movie-card-${movie.id}`}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="group relative bg-cine-800 rounded-xl overflow-hidden shadow-xl border border-cine-700 hover:border-cine-500 transition-colors"
    >
      {/* Image Container */}
      <div 
        className="relative aspect-[2/3] overflow-hidden cursor-pointer"
        onClick={() => onSelect(movie)}
      >
        <img
          src={movie.imageUrl}
          alt={movie.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-cine-900 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

        {/* Status Badge */}
        <div className="absolute top-2 right-2 flex flex-col gap-2">
           {movie.watched && (
             <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
               <Badge variant="success">Watched</Badge>
             </motion.div>
           )}
        </div>
      </div>

      {/* Content */}
      <div className="p-4 relative">
        <h3 
          className="text-lg font-bold text-white mb-1 truncate cursor-pointer hover:text-cine-accent transition-colors"
          onClick={() => onSelect(movie)}
        >
          {movie.title}
        </h3>
        
        <div className="flex items-center justify-between text-sm text-cine-500 mb-4">
          <div className="flex items-center gap-1">
            <Star size={14} className="text-yellow-500 fill-yellow-500" />
            <span>{movie.userRating ? movie.userRating : movie.initialRating}</span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <Button 
            variant={movie.watched ? "secondary" : "primary"} 
            size="sm" 
            className="w-full"
            onClick={(e) => {
              e.stopPropagation();
              onToggleWatched(movie.id);
            }}
          >
            {movie.watched ? <><Check size={14} /> Watched</> : <><Eye size={14} /> Watch</>}
          </Button>
        </div>
      </div>
    </motion.div>
  );
};