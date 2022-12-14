import { useState, useEffect } from 'react';
import { ConfirmToken, Header, Modal } from 'components';
import Head from 'next/head';
import HomePage from 'pages/home';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, saveSocket } from 'state';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import io from 'socket.io-client';

const Home: React.FC = () => {
  const [isOpenConfirm, setIsOpenConfirm] = useState(false);

  const { confirmResponse } = useSelector((state: RootState) => state.quotes);
  const dispatch = useDispatch();

  useEffect(() => {
    if (confirmResponse.status === 200) {
      setIsOpenConfirm(true);
    }
  }, [confirmResponse]);

  useEffect(() => {
    dispatch(
      saveSocket(
        io(process.env.NEXT_PUBLIC_SOCKET_URL, {
          transports: ['websocket', 'polling'],
        })
      )
    );
  }, [dispatch]);

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
      ...(await serverSideTranslations(context.locale ?? 'en', ['common'])),
    },
  };
}
