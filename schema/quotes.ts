import * as Yup from 'yup';

const quoteSchema = Yup.object().shape({
  quoteNameEng: Yup.string().required(),
  quoteNameGe: Yup.string()
    .matches(/[Ⴀ-\u10fe]$/, 'შეიყვანეთ მხოლოდ ქართული ასოები')
    .required(),
  movieId: Yup.string().notRequired(),
  poster: Yup.mixed().notRequired(),
});

export default quoteSchema;
