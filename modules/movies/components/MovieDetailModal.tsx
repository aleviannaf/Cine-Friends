import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, CheckCircle2 } from 'lucide-react';
import { Movie } from '../../../core/types';
import { Button } from '../../../shared/ui/Button';
import { MovieRating } from './MovieRating';

interface MovieDetailModalProps {
  movie: Movie | null;
  onClose: () => void;
  onToggleWatched: (id: string) => void;
  onRate: (id: string, rating: number) => void;
}

export const MovieDetailModal: React.FC<MovieDetailModalProps> = ({ 
  movie, 
  onClose, 
  onToggleWatched,
  onRate 
}) => {
  if (!movie) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        />
        
        <motion.div
          layoutId={`movie-card-${movie.id}`}
          className="relative w-full max-w-4xl bg-cine-800 rounded-2xl overflow-hidden shadow-2xl z-10 flex flex-col md:flex-row max-h-[90vh]"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
        >
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 bg-black/40 hover:bg-black/60 rounded-full text-white transition-colors"
          >
            <X size={20} />
          </button>

          {/* Image Side */}
          <div className="md:w-2/5 h-64 md:h-auto relative">
            <img 
              src={movie.imageUrl} 
              alt={movie.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-cine-800 to-transparent md:bg-gradient-to-r" />
          </div>

          {/* Info Side */}
          <div className="flex-1 p-6 md:p-8 flex flex-col overflow-y-auto">
            <div className="mb-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">{movie.title}</h2>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2 px-3 py-1 bg-cine-900 rounded-full border border-cine-700">
                  <span className="text-yellow-500 font-bold text-lg">{movie.initialRating}</span>
                  <span className="text-cine-500 text-sm">IMDb</span>
                </div>
                {movie.watched && (
                  <div className="flex items-center gap-1 text-green-400 text-sm font-medium">
                    <CheckCircle2 size={16} />
                    Watched
                  </div>
                )}
              </div>

              <div className="mb-8">
                <h3 className="text-sm uppercase tracking-wider text-cine-500 font-semibold mb-2">Synopsis</h3>
                <p className="text-cine-100 leading-relaxed text-lg">
                  {movie.description}
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-cine-700">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                
                <div className="flex flex-col gap-2">
                  <span className="text-sm text-cine-500">Your Rating</span>
                  <MovieRating 
                    rating={movie.userRating} 
                    onRate={(r) => onRate(movie.id, r)} 
                  />
                </div>

                <Button 
                  size="lg"
                  variant={movie.watched ? "outline" : "primary"}
                  onClick={() => onToggleWatched(movie.id)}
                  className="w-full md:w-auto"
                >
                  {movie.watched ? "Mark as Unwatched" : "Mark as Watched"}
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};