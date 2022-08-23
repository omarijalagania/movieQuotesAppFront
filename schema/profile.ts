import * as Yup from 'yup';

const userProfileSchema = Yup.object().shape({
  userName: Yup.string()
    .lowercase()
    .min(3, 'min3Chars')
    .max(15, 'max15Chars')
    .required('requiredName'),
  email: Yup.string().email('invalidEmail').required('invalidEmail'),
  secondaryEmail: Yup.string().email('invalidEmail').required('invalidEmail'),
  password: Yup.string()
    .lowercase()
    .min(8, 'min8Chars')
    .max(15, 'max15Chars')
    .required('requiredPassword'),
});

export default userProfileSchema;
