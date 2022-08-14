import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { commentSchema } from 'schema';
import { addCommentsHandler } from 'services';
import { getCommentsFormInitialValue } from './helpers';
import { useHeader } from 'components';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'state';
import { saveComment } from 'state';

const useAddComment = () => {
  const { userId } = useHeader();
  const [fieldId, setFieldId] = useState('');
  const socket = useSelector((state: RootState) => state.quotes.socket);
  const dispatch = useDispatch();

  useEffect(() => {
    socket?.on('comment', (data: any) => {
      dispatch(saveComment(data));
    });
  }, [dispatch, socket]);

  const formik = useFormik({
    initialValues: getCommentsFormInitialValue(),

    onSubmit: async (values) => {
      const data = {
        comment: values.comment,
        userId: userId,
        quoteId: fieldId,
      };
      socket?.emit('like', {
        whoLikes: userId,
        quoteId: fieldId,
        receiver: userId,
      });
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
