import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Post, Search, WriteQuote } from 'components';

const Feed: React.FC = () => {
  return (
    <div className='flex flex-col w-full'>
      <div className='flex justify-between md:w-[90%] space-x-2'>
        <WriteQuote />
        <Search />
      </div>
      <Post />
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
