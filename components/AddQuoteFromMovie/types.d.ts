export type MovieProp = {
  _id(_id: any);
  movie: {
    _id: string;
    movieNameEn: string;
    movieNameGe: string;
    genre: [
      {
        _id: string;
        genre: string;
        label: string;
      }
    ];
    directorEn: string;
    directorGe: string;
    descriptionEn: string;
    descriptionGe: string;
    poster: string;
    userId: string;
  };
};

export type SingleMovieProps = {
  _id: any;
  movieNameEn?: string;
  movieNameGe?: string;
  genre?: [{ _id: string; genre: string; label: string }];
  directorEn?: string;
  directorGe?: string;
  descriptionEn?: string;
  descriptionGe?: string;
  poster?: string;
  userId?: string;
};
