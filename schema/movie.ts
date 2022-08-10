import * as Yup from 'yup';

const movieSchema = Yup.object().shape({
  movieNameEn: Yup.string().required(),
  movieNameGe: Yup.string().required(),
  genre: Yup.array()
    .of(
      Yup.object().shape({
        genre: Yup.string(),
        label: Yup.string(),
      })
    )
    .notRequired(),
  directorEn: Yup.string().required(),
  directorGe: Yup.string().required(),
  descriptionEn: Yup.string().required(),
  descriptionGe: Yup.string().required(),
  poster: Yup.array().notRequired(),
  userId: Yup.string().notRequired(),
});

export default movieSchema;
