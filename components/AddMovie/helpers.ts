export const getMovieFormInitialValue = () => {
  let movieNameEn = '';
  let movieNameGe = '';

  let genre = '';

  let directorEn = '';
  let directorGe = '';

  let descriptionEn = '';
  let descriptionGe = '';

  let fileUpload = '';

  return {
    movieNameEn,
    movieNameGe,
    genre,
    directorEn,
    directorGe,
    descriptionEn,
    descriptionGe,
    fileUpload,
  };
};
