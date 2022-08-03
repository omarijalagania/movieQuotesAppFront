import { useState, useEffect } from 'react';
import { ConfirmToken, Header, Modal } from 'components';
import Head from 'next/head';
import HomePage from 'pages/home';
import { useSelector } from 'react-redux';
import { RootState } from 'state';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Home = () => {
  const [isOpenConfirm, setIsOpenConfirm] = useState(false);
  const confirmResponse = useSelector(
    (state: RootState) => state.quotes.confirmResponse
  );

  useEffect(() => {
    if (confirmResponse.status === 200) {
      setIsOpenConfirm(true);
    }
  }, [confirmResponse]);

  return (
    <div>
      <Head>
        <title>Main Page</title>
        <meta name='description' content='Home Page' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <Header />
        <HomePage />
      </main>
      {isOpenConfirm && (
        <Modal open={isOpenConfirm} setOpen={setIsOpenConfirm}>
          <ConfirmToken />
        </Modal>
      )}
    </div>
  );
};

export default Home;

export async function getStaticProps(context: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(context.locale!, ['common'])),
    },
  };
}
