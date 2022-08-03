import * as Yup from 'yup';

const passwordRecoverSchema = Yup.object().shape({
  email: Yup.string().email('invalidEmail').required('invalidEmail'),
});

export default passwordRecoverSchema;
