import * as Yup from 'yup';

const googleSchema = Yup.object().shape({
  userName: Yup.string()
    .lowercase()
    .min(3, 'min3Chars')
    .max(15, 'max15Chars')
    .required('requiredName'),
  poster: Yup.mixed(),
  image: Yup.string(),
  email: Yup.string(),
});

export default googleSchema;
