import * as Yup from 'yup';

const movieSchema = Yup.object().shape({
  movieNameEn: Yup.string().required(),
  movieNameGe: Yup.string().notRequired(),
  genre: Yup.array()
    .of(
      Yup.object().shape({
        genre: Yup.string(),
        label: Yup.string(),
      })
    )
    .notRequired(),
  directorEn: Yup.string().notRequired(),
  directorGe: Yup.string().notRequired(),
  descriptionEn: Yup.string().notRequired(),
  descriptionGe: Yup.string().notRequired(),
  poster: Yup.array().notRequired(),
  userId: Yup.string().notRequired(),
});

export default movieSchema;
