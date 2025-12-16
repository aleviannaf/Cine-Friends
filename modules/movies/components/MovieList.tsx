import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { useMovieStore } from '../../../core/store';
import { MovieCard } from './MovieCard';
import { MovieDetailModal } from './MovieDetailModal';
import { Movie } from '../../../core/types';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05
    }
  }
};

export const MovieList: React.FC = () => {
  const { movies, searchQuery, setSearchQuery, toggleWatched, rateMovie } = useMovieStore();
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  const filteredMovies = movies.filter(m => 
    m.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full">
      {/* Search Bar */}
      <div className="mb-8 relative max-w-md mx-auto md:mx-0">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-cine-500" size={20} />
        <input
          type="text"
          placeholder="Search your collection..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-cine-800 border border-cine-700 text-white pl-10 pr-4 py-3 rounded-xl focus:outline-none focus:border-cine-accent focus:ring-1 focus:ring-cine-accent transition-all placeholder:text-cine-500"
        />
      </div>

      {/* Grid */}
      {filteredMovies.length > 0 ? (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6"
        >
          {filteredMovies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onToggleWatched={toggleWatched}
              onSelect={setSelectedMovie}
            />
          ))}
        </motion.div>
      ) : (
        <div className="flex flex-col items-center justify-center py-20 text-cine-500">
          <p className="text-xl">No movies found matching "{searchQuery}"</p>
        </div>
      )}

      {/* Modal */}
      {selectedMovie && (
        <MovieDetailModal
          movie={movies.find(m => m.id === selectedMovie.id) || null}
          onClose={() => setSelectedMovie(null)}
          onToggleWatched={toggleWatched}
          onRate={rateMovie}
        />
      )}
    </div>
  );
};