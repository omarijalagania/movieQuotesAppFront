import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { AddQuote, Modal, Post, Search, WriteQuote } from 'components';
import { useFeed } from 'hooks';

const Feed: React.FC = () => {
  const { quotes, openAddQuote, setOpenAddQuote, setGetLike } = useFeed();

  return (
    <div className='flex flex-col w-full'>
      <div className='flex justify-between md:w-[90%] space-x-2'>
        <WriteQuote setOpenAddQuote={setOpenAddQuote} />
        <Search />
      </div>
      {quotes.map((item) => (
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
