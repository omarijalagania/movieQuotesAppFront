import { useTranslate } from 'hooks';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { io } from 'socket.io-client';
import { saveSocket } from 'state';
import { useSession } from 'next-auth/react';

const useLayout = () => {
  const { router } = useTranslate();
  const { status } = useSession();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(saveSocket(io(process.env.NEXT_PUBLIC_SOCKET_URL)));
  }, [dispatch]);

  return { router, status };
};

export default useLayout;
