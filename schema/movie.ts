import * as Yup from 'yup';

const movieSchema = Yup.object().shape({
  movieNameEn: Yup.string().required(),
  movieNameGe: Yup.string()
    .matches(/[Ⴀ-\u10fe]$/, 'შეიყვანეთ მხოლოდ ქართული ასოები')
    .required(),
  genre: Yup.array().required(),
  directorEn: Yup.string().required(),
  directorGe: Yup.string()
    .matches(/[Ⴀ-\u10fe]$/, 'შეიყვანეთ მხოლოდ ქართული ასოები')
    .required(),
  descriptionEn: Yup.string().required(),
  descriptionGe: Yup.string()
    .matches(/[Ⴀ-\u10fe]$/, 'შეიყვანეთ მხოლოდ ქართული ასოები')
    .required(),
  poster: Yup.mixed().notRequired(),
});

export default movieSchema;
