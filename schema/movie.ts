import * as Yup from 'yup';

const movieSchema = Yup.object().shape({
  movieNameEn: Yup.string().required('requiredName'),
  movieNameGe: Yup.string()
    .matches(/[Ⴀ-\u10fe]$/, 'შეიყვანეთ მხოლოდ ქართული ასოები')
    .required('requiredName'),
  genre: Yup.array().required(),
  directorEn: Yup.string().required('requiredDirector'),
  directorGe: Yup.string()
    .matches(/[Ⴀ-\u10fe]$/, 'შეიყვანეთ მხოლოდ ქართული ასოები')
    .required('requiredDirector'),
  descriptionEn: Yup.string().required('descriptionRequired'),
  descriptionGe: Yup.string()
    .matches(/[Ⴀ-\u10fe]$/, 'შეიყვანეთ მხოლოდ ქართული ასოები')
    .required('descriptionRequired'),
  poster: Yup.mixed().notRequired(),
});

export default movieSchema;
