import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ParallaxProvider } from 'react-scroll-parallax';
import { SessionProvider } from 'next-auth/react';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <ParallaxProvider>
        <Component {...pageProps} />
      </ParallaxProvider>
    </SessionProvider>
  );
}

export default MyApp;
