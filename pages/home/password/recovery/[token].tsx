import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { saveToken } from 'state';

const PasswordRecover = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    if (router.query.token) {
      const token = router.query.token;
      dispatch(saveToken(token));
      localStorage.setItem('token', token as string);
      router.push('/');
    }
  }, [dispatch, router]);

  return <div>token</div>;
};

export default PasswordRecover;
