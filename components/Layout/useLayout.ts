import { useTranslate } from 'hooks';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { io } from 'socket.io-client';
import { saveSocket } from 'state';

const useLayout = () => {
  const { router } = useTranslate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(saveSocket(io(process.env.NEXT_PUBLIC_SOCKET_URL)));
  }, [dispatch]);

  return { router };
};

export default useLayout;
