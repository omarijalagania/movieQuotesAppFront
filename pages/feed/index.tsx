import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Layout, Post, Search, WriteQuote } from 'components';

const Feed: React.FC<any> = () => {
  return (
    <Layout>
      <div className='flex w-[85%]'>
        <WriteQuote />
        <Search />
      </div>
      <Post />
    </Layout>
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
