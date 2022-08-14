import { useState, useEffect } from 'react';
import { ConfirmToken, Header, Modal, useHeader } from 'components';
import Head from 'next/head';
import HomePage from 'pages/home';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, saveSocket } from 'state';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import io from 'socket.io-client';

const Home = () => {
  const [isOpenConfirm, setIsOpenConfirm] = useState(false);
  const { userId } = useHeader();
  const { confirmResponse, socket } = useSelector(
    (state: RootState) => state.quotes
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (confirmResponse.status === 200) {
      setIsOpenConfirm(true);
    }
  }, [confirmResponse]);

  useEffect(() => {
    dispatch(saveSocket(io('http://localhost:4343')));
  }, [dispatch]);

  useEffect(() => {
    socket?.emit('newUser', {
      userId: userId,
      socketId: socket?.id,
    });

    socket?.on('disconnect', () => {
      console.log('disconnected');
    });
  }, [socket, userId]);

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
