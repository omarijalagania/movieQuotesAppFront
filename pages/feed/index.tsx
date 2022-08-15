import React, { useEffect, useState } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { AddQuote, Modal, Post, Search, WriteQuote } from 'components';
import { getQuoteHandler } from 'services';
import { onModalClose, RootState } from 'state';
import { useSelector, useDispatch } from 'react-redux';

const Feed: React.FC = () => {
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

  return (
    <div className='flex flex-col w-full'>
      <div className='flex justify-between md:w-[90%] space-x-2'>
        <WriteQuote setOpenAddQuote={setOpenAddQuote} />
        <Search />
      </div>
      {quotes.map((item: any) => (
        <Post setGetLike={setGetLike} item={item} key={item._id} />
      ))}
      {openAddQuote && (
        <Modal open={openAddQuote} setOpen={setOpenAddQuote}>
          <AddQuote />
        </Modal>
      )}
    </div>
  );
};

export default Feed;

export async function getStaticProps(context: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(context.locale ?? 'en', ['common'])),
    },
  };
}
