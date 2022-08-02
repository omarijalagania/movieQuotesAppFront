import * as Yup from 'yup';

const newPasswordSchema = Yup.object().shape({
  password: Yup.string()
    .lowercase()
    .min(8, 'min 8 chars')
    .max(15, 'max 15 chars')
    .required(),
  repeatPassword: Yup.string()
    .oneOf([Yup.ref('password'), null])
    .required(),
  token: Yup.string(),
});

export default newPasswordSchema;
