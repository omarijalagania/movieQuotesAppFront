import * as Yup from 'yup';

const signUpSchema = Yup.object().shape({
  name: Yup.string()
    .lowercase()
    .min(3, 'min 3 chars')
    .max(15, 'max 15 chars')
    .required('Name is required'),
  email: Yup.string().email('Email is invalid').required('Email is required'),
  password: Yup.string()
    .lowercase()
    .min(8, 'min 8 chars')
    .max(15, 'max 15 chars')
    .required(),
  repeatPassword: Yup.string()
    .oneOf([Yup.ref('password'), null])
    .required(),
});

export default signUpSchema;
