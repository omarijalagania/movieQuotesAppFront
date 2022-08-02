import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { saveToken } from 'state';

const PasswordRecover = (props: { query: { token: string | null } }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  let token = props.query.token;

  useEffect(() => {
    if (token) {
      dispatch(saveToken(token));
      localStorage.setItem('token', token as string);
      router.push('/');
    }
  }, [dispatch, router, token]);

  return <div></div>;
};

export default PasswordRecover;

export async function getServerSideProps(context: { query: string }) {
  const { query } = context;
  return {
    props: { query },
  };
}
