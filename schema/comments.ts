import * as Yup from 'yup';

const commentSchema = Yup.object().shape({
  quoteId: Yup.string(),
  userId: Yup.string(),
  comment: Yup.string().required(),
});

export default commentSchema;
