type Rating = [
  {
    source: string;
    value: string;
  },
];

export interface IMovie {
  Title: string;
  Year: string;
  Released: string;
  Rated: string;
  Runtime: string;
  Director: string;
  Genre: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Poster: string;
  Ratings: Rating;
  Value: string;
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  totalSeasons: string;
  Response: string;
}
