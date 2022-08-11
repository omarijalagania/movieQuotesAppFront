import * as Yup from 'yup';

const newPasswordSchema = Yup.object().shape({
  password: Yup.string()
    .lowercase()
    .min(8, 'min8Chars')
    .max(15, 'max15Chars')
    .required(),
  repeatPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'mustMatch')
    .required('mustMatch'),
});

export default newPasswordSchema;
