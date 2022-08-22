import React from 'react';
import { GoogleProfile, useHeader } from 'components';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Profile: React.FC = () => {
  const { userDetails } = useHeader();

  return (
    <div className='mx-auto'>
      {userDetails?.provider === 'google' ? <GoogleProfile /> : ''}
    </div>
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
