import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getQuoteHandler } from 'services';
import { onModalClose, RootState } from 'state';

const useFeed = () => {
  const [quotes, setQuotes] = useState([]);
  const [openAddQuote, setOpenAddQuote] = useState(false);
  const [getLike, setGetLike] = useState([]);
  const { updateComment, closeModal } = useSelector(
    (state: RootState) => state.quotes
  );
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      const getAllQuotes = async () => {
        const response = await getQuoteHandler();

        if (response.status === 200) {
          dispatch(onModalClose(true));
          setQuotes(response.data);
        }

        if (response.status === 422) {
          dispatch(onModalClose(true));
        }
        dispatch(onModalClose(false));
      };

      getAllQuotes();
    } catch (error) {}
  }, [getLike, updateComment, closeModal, dispatch]);

  useEffect(() => {
    if (closeModal) {
      setOpenAddQuote(false);
    }
  }, [closeModal]);

  return { quotes, openAddQuote, setOpenAddQuote, setGetLike };
};

export default useFeed;
