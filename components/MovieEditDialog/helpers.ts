export const editMovieFormInitialValue = (movie: {
  movieNameEn: string;
  movieNameGe: string;
  genre: [
    {
      genre: string;
      label: string;
    }
  ];
  directorEn: string;
  directorGe: string;
  descriptionEn: string;
  descriptionGe: string;
  userId: string;
  poster: string;
}) => {
  let movieNameEn = movie?.movieNameEn;
  let movieNameGe = movie?.movieNameGe;

  let genre = movie?.genre.map((genre) => ({
    genre: genre.genre,
    label: genre.label,
  }));

  let directorEn = movie?.directorEn;
  let directorGe = movie?.directorGe;

  let descriptionEn = movie?.descriptionEn;
  let descriptionGe = movie?.descriptionGe;
  let userId = movie?.userId;
  let poster = movie?.poster;

  return {
    movieNameEn,
    movieNameGe,
    genre,
    directorEn,
    directorGe,
    descriptionEn,
    descriptionGe,
    poster,
    userId,
  };
};

export const emptyMovieFormInitialValue = () => {
  let movieNameEn = '';
  let movieNameGe = '';

  let genre: string[] = [];

  let directorEn = '';
  let directorGe = '';

  let descriptionEn = '';
  let descriptionGe = '';
  let userId = '';
  let poster = '';

  return {
    movieNameEn,
    movieNameGe,
    genre,
    directorEn,
    directorGe,
    descriptionEn,
    descriptionGe,
    poster,
    userId,
  };
};

export const imageUrl = (file: File) => {
  let imageUrl = '';
  if (file) {
    imageUrl = URL.createObjectURL(file);
  }
  return imageUrl;
};
