import { useFormik } from 'formik';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { commentSchema } from 'schema';
import { addCommentsHandler, addNotificationHandler } from 'services';
import { getCommentsFormInitialValue } from './helpers';
import { useHeader } from 'components';
import { useSelector } from 'react-redux';
import { RootState } from 'state';

const useAddComment = () => {
  const { userId, t } = useHeader();
  const [fieldId, setFieldId] = useState('');
  const socket = useSelector((state: RootState) => state.quotes.socket);
  const [receiverId, setReceiverId] = useState('');

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
      socket?.emit('notification', {
        userId: receiverId,
      });
      const dataNotification = {
        userId: userId,
        notificationType: 'commented',
        isRead: false,
        notificationFor: receiverId,
      };

      try {
        const response = await addCommentsHandler(data);
        addNotificationHandler(dataNotification);
        if (response.status === 422) {
          toast.error('Error adding comment');
        }
      } catch (error) {
        toast.error('Server Error');
      }
    },

    validationSchema: commentSchema,
  });

  return { formik, setFieldId, setReceiverId, t };
};

export default useAddComment;
