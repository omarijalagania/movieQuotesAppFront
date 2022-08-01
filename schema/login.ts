import * as Yup from 'yup';

const loginSchema = Yup.object().shape({
  email: Yup.string().email('Email is invalid').required('Email is required'),
  password: Yup.string()
    .lowercase()
    .min(8, 'min 8 chars')
    .max(15, 'max 15 chars')
    .required(),
});

export default loginSchema;
