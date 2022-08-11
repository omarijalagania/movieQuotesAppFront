import * as Yup from 'yup';

const quoteSchema = Yup.object().shape({
  quoteNameEng: Yup.string().required(),
  quoteNameGe: Yup.string().required(),
  movieId: Yup.string().notRequired(),
  poster: Yup.mixed().notRequired(),
});

export default quoteSchema;
