import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import { appWithTranslation } from 'next-i18next';
import { useTranslate } from 'hooks';
import { store } from 'state';
import { Provider } from 'react-redux';
import { Layout } from 'components';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { useEffect } from 'react';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const { router } = useTranslate();

  useEffect(() => {
    if (session) {
      router.push('/feed');
    }
  }, [router, session]);

  if (router.pathname.startsWith('/feed')) {
    return (
      <SessionProvider session={session}>
        <Provider store={store}>
          <Layout>
            <Component {...pageProps} />
            <ToastContainer autoClose={1500} limit={1} />
          </Layout>
        </Provider>
      </SessionProvider>
    );
  }

  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <Component {...pageProps} />
        <ToastContainer autoClose={1500} limit={1} />
      </Provider>
    </SessionProvider>
  );
}

export default appWithTranslation(MyApp);
