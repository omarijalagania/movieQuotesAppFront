import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { userConfirmHandler } from 'services';
import { useDispatch } from 'react-redux';
import { saveConfirmResponse } from 'state';
import Head from 'next/head';
const Confirm = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  useEffect(() => {
    const checkConfirm = async () => {
      if (router.query.slug) {
        const token = router.query.slug[0];
        const data = {
          token,
        };
        const response = await userConfirmHandler(data);
        dispatch(saveConfirmResponse(response));
        if (response.status === 200) {
          router.push('/');
        } else if (response.status === 500) {
          router.push('/');
        } else if (response.status === 404) {
          router.push('/');
        }
      }
    };
    try {
      checkConfirm();
    } catch (error) {
      router.push('/');
    }
  }, [dispatch, router]);

  return (
    <div>
      <Head>
        <title>Confirm</title>
        <meta name='description' content='Home Page' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
    </div>
  );
};

export default Confirm;
