import React from 'react';
import {
  GoogleProfile,
  Loader,
  MobileGoogleProfile,
  MobileRegularUserProfile,
  RegularUserProfile,
  useHeader,
} from 'components';
import { useMediaSize } from 'hooks';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';

const Profile: React.FC = () => {
  const { userDetails } = useHeader();
  const { width } = useMediaSize();

  if (userDetails === null || userDetails === undefined) {
    return <Loader />;
  }

  return (
    <>
      <Head>
        <title>Profile</title>
        <meta name='description' content='Home Page' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='mx-auto'>
        {userDetails?.provider === 'google' ? (
          (width as number) < 768 ? (
            <MobileGoogleProfile />
          ) : (
            <GoogleProfile />
          )
        ) : (width as number) < 768 ? (
          <MobileRegularUserProfile />
        ) : (
          <RegularUserProfile />
        )}
      </div>
    </>
  );
};

export default Profile;

export async function getStaticProps(context: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(context.locale ?? 'en', ['common'])),
    },
  };
}
