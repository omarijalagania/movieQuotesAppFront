import * as Yup from 'yup';

const movieSchema = Yup.object().shape({
  movieNameEn: Yup.string().required(),
  movieNameGe: Yup.string().required(),
  genre: Yup.array().notRequired(),
  directorEn: Yup.string().required(),
  directorGe: Yup.string().required(),
  descriptionEn: Yup.string().required(),
  descriptionGe: Yup.string().required(),
  poster: Yup.mixed().notRequired(),
});

export default movieSchema;
