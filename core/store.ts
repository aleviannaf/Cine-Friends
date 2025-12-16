import { create } from 'zustand';
import { Movie } from './types';
import { INITIAL_MOVIES } from '../modules/movies/data/moviesData';

interface MovieState {
  movies: Movie[];
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  toggleWatched: (id: string) => void;
  rateMovie: (id: string, rating: number) => void;
  getWatchedCount: () => number;
}

export const useMovieStore = create<MovieState>((set, get) => ({
  movies: INITIAL_MOVIES,
  searchQuery: '',
  
  setSearchQuery: (query) => set({ searchQuery: query }),

  toggleWatched: (id) =>
    set((state) => ({
      movies: state.movies.map((movie) =>
        movie.id === id ? { ...movie, watched: !movie.watched } : movie
      ),
    })),

  rateMovie: (id, rating) =>
    set((state) => ({
      movies: state.movies.map((movie) =>
        movie.id === id ? { ...movie, userRating: rating } : movie
      ),
    })),

  getWatchedCount: () => {
    const { movies } = get();
    return movies.filter((m) => m.watched).length;
  }
}));