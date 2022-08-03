import * as Yup from 'yup';

const loginSchema = Yup.object().shape({
  email: Yup.string().email('invalidEmail').required('invalidEmail'),
  password: Yup.string()
    .lowercase()
    .min(8, 'min8Chars')
    .max(15, 'max15Chars')
    .required(),
});

export default loginSchema;
