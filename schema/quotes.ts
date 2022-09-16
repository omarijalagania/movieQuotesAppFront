import * as Yup from 'yup';

const quoteSchema = Yup.object().shape({
  quoteNameEng: Yup.string().required('requiredName'),
  quoteNameGe: Yup.string()
    .matches(/[Ⴀ-\u10fe]$/, 'შეიყვანეთ მხოლოდ ქართული ასოები')
    .required('requiredName'),
  movieId: Yup.string().notRequired(),
  poster: Yup.mixed().notRequired(),
});

export default quoteSchema;
