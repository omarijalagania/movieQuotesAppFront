export const getMovieFormInitialValue = () => {
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
