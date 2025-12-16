import React from 'react';
import { Clapperboard, Film } from 'lucide-react';
import { MovieList } from './modules/movies/components/MovieList';
import { useMovieStore } from './core/store';

const App: React.FC = () => {
  const { movies, getWatchedCount } = useMovieStore();
  const watchedCount = getWatchedCount();
  const totalCount = movies.length;
  const progress = Math.round((watchedCount / totalCount) * 100);

  return (
    <div className="min-h-screen bg-cine-900 text-slate-100 font-sans selection:bg-cine-accent selection:text-white pb-20">
      
      {/* Header */}
      <header className="sticky top-0 z-40 bg-cine-900/80 backdrop-blur-md border-b border-cine-700">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
          
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-cine-accent to-purple-600 p-2 rounded-lg shadow-lg shadow-cine-accent/20">
              <Clapperboard className="text-white" size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight">CineFriends</h1>
              <p className="text-xs text-cine-500 font-medium">Shared Collection</p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6">
             <div className="text-right">
                <p className="text-xs text-cine-500 uppercase tracking-wider font-semibold">Progress</p>
                <div className="flex items-center gap-2">
                  <span className="text-cine-accent font-bold text-lg">{watchedCount}</span>
                  <span className="text-cine-700">/</span>
                  <span className="text-white font-medium">{totalCount}</span>
                </div>
             </div>
             
             {/* Progress Circle */}
             <div className="relative w-10 h-10 flex items-center justify-center">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                  <path
                    className="text-cine-800"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="text-cine-accent transition-all duration-1000 ease-out"
                    strokeDasharray={`${progress}, 100`}
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                </svg>
                <span className="absolute text-[10px] font-bold">{progress}%</span>
             </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        
        <div className="mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
            Discover & Track
          </h2>
          <p className="text-cine-500 text-lg max-w-2xl">
            A curated list of masterpieces, blockbusters, and hidden gems shared among friends.
            Mark what you've seen and rate your favorites.
          </p>
        </div>

        <MovieList />
      </main>

      {/* Mobile Footer Stat */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-cine-800 border-t border-cine-700 p-4 flex justify-between items-center z-40">
        <div className="flex items-center gap-2 text-sm text-cine-500">
          <Film size={16} />
          <span>{watchedCount} of {totalCount} Watched</span>
        </div>
        <div className="w-24 h-2 bg-cine-900 rounded-full overflow-hidden">
          <div 
            className="h-full bg-cine-accent transition-all duration-500" 
            style={{ width: `${progress}%` }} 
          />
        </div>
      </div>
    </div>
  );
};

export default App;