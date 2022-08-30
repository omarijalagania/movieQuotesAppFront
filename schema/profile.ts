import * as Yup from 'yup';

const userProfileSchema = Yup.object().shape({
  userName: Yup.string()
    .lowercase()
    .min(3, 'min3Chars')
    .max(15, 'max15Chars')
    .required('requiredName'),
  email: Yup.string().email('invalidEmail').required('invalidEmail'),

  secondaryEmails: Yup.array().of(
    Yup.object().shape({
      secondaryEmail: Yup.string().email('invalidEmail'),
      secondary: Yup.boolean(),
      isVerified: Yup.boolean(),
    })
  ),
  token: Yup.string(),
  password: Yup.string().lowercase().min(8, 'min8Chars').max(15, 'max15Chars'),
  oldPassword: Yup.string()
    .lowercase()
    .min(8, 'min8Chars')
    .max(15, 'max15Chars'),
});

export default userProfileSchema;
