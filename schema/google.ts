import * as Yup from 'yup';

const googleSchema = Yup.object().shape({
  userName: Yup.string()
    .lowercase()
    .min(3, 'min3Chars')
    .max(15, 'max15Chars')
    .required('requiredName'),
});

export default googleSchema;
