import { useFormik } from 'formik';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { commentSchema } from 'schema';
import { addCommentsHandler } from 'services';
import { getCommentsFormInitialValue } from './helpers';
import { useHeader } from 'components/shared';

const useAddComment = () => {
  const { userId } = useHeader();
  const [fieldId, setFieldId] = useState('');

  const formik = useFormik({
    initialValues: getCommentsFormInitialValue(),

    onSubmit: async (values) => {
      const data = {
        comment: values.comment,
        userId: userId,
        quoteId: fieldId,
      };

      try {
        const response = await addCommentsHandler(data);

        if (response.status === 422) {
          toast.error('Error');
        }
        if (response.status === 200) {
          toast.success('Movie added');
        }
      } catch (error) {
        toast.error('Error');
      }
    },

    validationSchema: commentSchema,
  });

  return { formik, setFieldId };
};

export default useAddComment;
