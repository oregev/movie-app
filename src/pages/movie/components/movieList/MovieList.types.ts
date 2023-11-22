export interface IMovieItem {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
}

export interface IMovies {
  Response: string;
  Search: Array<IMovieItem>; // IMovieItem[]
  totalResults: string;
}
