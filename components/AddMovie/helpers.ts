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
  }),
  control: (provided: any) => ({
    ...provided,
    backgroundColor: '#11101A',
    color: 'white',
    borderColor: 'gray',
    height: '48px',
  }),
  placeholder: (provided: any) => {
    return {
      ...provided,
      color: 'white',
    };
  },
};
