import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import InfiniteScroll from 'react-infinite-scroll-component';
import { RemoveScrollBar } from 'react-remove-scroll-bar';
import { AddQuote, Loader, Modal, Post, Search, WriteQuote } from 'components';
import { useFeed } from 'hooks';
import Head from 'next/head';

const Feed: React.FC = () => {
  const {
    quotes,
    openAddQuote,
    setOpenAddQuote,
    setGetLike,
    handleSearch,
    loadFunc,
    hasMore,
  } = useFeed();

  if (quotes.length === 0) {
    return <Loader />;
  }

  return (
    <>
      <Head>
        <title>Feed</title>
        <meta name='description' content='Home Page' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='flex flex-col w-full'>
        <RemoveScrollBar />
        <div className='flex justify-between overflow-hidden md:w-[90%] space-x-2'>
          <WriteQuote setOpenAddQuote={setOpenAddQuote} />
          <Search handleSearch={handleSearch} />
        </div>

        <InfiniteScroll
          dataLength={quotes?.length} //This is important field to render the next data
          next={loadFunc}
          hasMore={hasMore}
          loader={<h4 className='text-white'>Loading...</h4>}
        >
          {quotes?.map((item) => (
            <Post setGetLike={setGetLike} item={item} key={item._id} />
          ))}
        </InfiniteScroll>

        {openAddQuote && (
          <Modal open={openAddQuote} setOpen={setOpenAddQuote}>
            <AddQuote />
          </Modal>
        )}
      </div>
    </>
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
