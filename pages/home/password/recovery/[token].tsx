import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { saveToken } from 'state';
import Head from 'next/head';

const PasswordRecover = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    if (router.query.token) {
      let token = router.query.token;
      dispatch(saveToken(token));
      localStorage.setItem('token', token as string);
      router.push('/');
    }
  }, [dispatch, router]);

  return (
    <div>
      <Head>
        <title>Password confirm</title>
        <meta name='description' content='Home Page' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
    </div>
  );
};

export default PasswordRecover;
