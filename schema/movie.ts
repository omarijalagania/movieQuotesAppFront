import * as Yup from 'yup';

const movieSchema = Yup.object().shape({
  movieNameEn: Yup.string().notRequired(),
  movieNameGe: Yup.string().notRequired(),
  genre: Yup.string().notRequired(),
  directorEn: Yup.string().notRequired(),
  directorGe: Yup.string().notRequired(),
  descriptionEn: Yup.string().notRequired(),
  descriptionGe: Yup.string().notRequired(),
  fileUpload: Yup.string().notRequired(),
});

export default movieSchema;
