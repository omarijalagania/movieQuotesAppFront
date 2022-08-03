import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ParallaxProvider } from 'react-scroll-parallax';
import { SessionProvider } from 'next-auth/react';
import { appWithTranslation } from 'next-i18next';

import { store } from 'state';
import { Provider } from 'react-redux';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <ParallaxProvider>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </ParallaxProvider>
    </SessionProvider>
  );
}

export default appWithTranslation(MyApp);
