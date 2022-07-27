import { Header } from 'components';
import Head from 'next/head';
import HomePage from 'pages/home';

const Home = () => {
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
    </div>
  );
};

export default Home;
