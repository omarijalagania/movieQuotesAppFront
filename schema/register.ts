import * as Yup from 'yup';

const signUpSchema = Yup.object().shape({
  userName: Yup.string()
    .lowercase()
    .min(3, 'min3Chars')
    .max(15, 'max15Chars')
    .required('requiredName'),
  email: Yup.string().email('invalidEmail').required('invalidEmail'),
  password: Yup.string()
    .lowercase()
    .min(8, 'min8Chars')
    .max(15, 'max15Chars')
    .required('requiredPassword'),
  repeatPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'mustMatch')
    .required('mustMatch'),
});

export default signUpSchema;
