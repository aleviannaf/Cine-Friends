export interface Movie {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  initialRating: number; // The mock "IMDB" score
  userRating: number | null; // What the user rated it
  watched: boolean;
  year?: number;
  genre?: string;
}

export type SortOption = 'title' | 'rating' | 'watched';