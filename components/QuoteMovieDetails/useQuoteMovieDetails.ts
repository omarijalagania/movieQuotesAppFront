import { useHeader } from 'components/shared';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { deleteQuoteHandler } from 'services';
import { onModalClose, RootState } from 'state';
import { QuoteProps } from 'types';

const useQuoteMovieDetails = (item: QuoteProps) => {
  const [openEditQUoteDialog, setOpenEditQUoteDialog] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const { userId, t } = useHeader();
  const closeModal = useSelector((state: RootState) => state.quotes.closeModal);
  const dispatch = useDispatch();

  const deleteQuote = async () => {
    const response = await deleteQuoteHandler(item._id);
    if (response.status === 200) {
      dispatch(onModalClose(true));
      toast.success('Quote deleted successfully');
    }

    if (response.status === 422) {
      dispatch(onModalClose(true));
      toast.error('Error deleting quote');
    }
    dispatch(onModalClose(false));
  };

  useEffect(() => {
    item.likes.forEach((like: any) => {
      if (like === userId) {
        setIsLiked(true);
      }
    });
  }, [item.likes, item.userId, userId]);

  useEffect(() => {
    if (closeModal) {
      setOpenEditQUoteDialog(false);
    }
  }, [closeModal]);
  return {
    openEditQUoteDialog,
    setOpenEditQUoteDialog,
    isLiked,
    setIsLiked,
    deleteQuote,
    userId,
    t,
  };
};

export default useQuoteMovieDetails;
