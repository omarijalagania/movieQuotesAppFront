export const editMovieFormInitialValue = (movie: {
  movieNameEn: any;
  movieNameGe: any;
  genre: string[];
  directorEn: any;
  directorGe: any;
  descriptionEn: any;
  descriptionGe: any;
  userId: any;
  poster: any;
}) => {
  let movieNameEn = movie?.movieNameEn;
  let movieNameGe = movie?.movieNameGe;

  let genre: string[] = movie?.genre;

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

export const customStyles = {
  dropdownIndicator: () => ({
    display: 'none',
  }),
  input: (provided: any) => ({
    ...provided,
    backgroundColor: '#11101A',
  }),
  control: (provided: any) => ({
    ...provided,
    backgroundColor: '#11101A',
  }),
};
