import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, saveNotification, saveSocket } from 'state';
import { useTranslate, useMediaSize } from 'hooks';
import { useSession } from 'next-auth/react';
import { getNotificationsHandler, getUserHandler } from 'services';
import jwtDecode from 'jwt-decode';
import { JwDecode, UserDetails } from 'components';
import { toast } from 'react-toastify';
import { io } from 'socket.io-client';

export const useHeader = () => {
  const {
    registerResponse,
    passwordRecoveryResponse,
    tokens,
    newPasswordResponse,
  } = useSelector((state: RootState) => state.quotes);
  const { t, router } = useTranslate();
  const { width } = useMediaSize();
  const [userId, setUserId] = useState<string>('');
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenLogin, setIsOpenLogin] = useState(false);
  const [isOpenThanks, setIsOpenThanks] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const [openRecoverModal, setOpenRecoverModal] = useState(false);
  const [openCheckEmailModal, setOpenCheckEmailModal] = useState(false);
  const [openNewPasswordModal, setOpenNewPasswordModal] = useState(false);
  const [openSuccessPasswordChangeModal, setOpenSuccessPasswordChangeModal] =
    useState(false);
  const [userDetails, setUserDetails] = useState<UserDetails>();
  const { data: session } = useSession();
  const socket = useSelector((state: RootState) => state.quotes.socket);
  const getNotifications = useSelector(
    (state: RootState) => state.quotes.notifications
  );
  const likeNotification = useSelector(
    (state: RootState) => state.quotes.likeNotification
  );
  const [notifications, setNotifications] = useState([]);
  const dispatch = useDispatch();

  const handleClick = () => {
    setOpenMobileMenu(!openMobileMenu);
  };

  const handleClickOutside = () => {
    setOpenMobileMenu(false);
  };

  useEffect(() => {
    if (registerResponse.status === 200) {
      setIsOpenThanks(true);
      setIsOpen(false);
    }
  }, [registerResponse]);

  useEffect(() => {
    if (openRecoverModal) {
      setIsOpenLogin(false);
    }
  }, [openRecoverModal]);

  useEffect(() => {
    if (passwordRecoveryResponse.status === 200) {
      setOpenRecoverModal(false);
      setOpenCheckEmailModal(true);
    }
  }, [passwordRecoveryResponse]);

  useEffect(() => {
    if (tokens) {
      setOpenNewPasswordModal(true);
    }
  }, [tokens]);

  useEffect(() => {
    dispatch(saveSocket(io(process.env.NEXT_PUBLIC_SOCKET_URL)));
  }, [dispatch]);

  useEffect(() => {
    if (newPasswordResponse.status === 200) {
      setOpenNewPasswordModal(false);
      setOpenSuccessPasswordChangeModal(true);
      localStorage.removeItem('token');
    }
  }, [newPasswordResponse]);

  useEffect(() => {
    const getUserEmail = async () => {
      if (session?.user.email) {
        const data = {
          email: session?.user.email,
        };
        try {
          const response = await getUserHandler(data);
          localStorage.setItem('userId', response.data._id);
          setUserId(response.data._id);
          setUserDetails(response.data);
        } catch (error) {
          toast.error('Server Error');
        }
      } else if (session?.user.user.token) {
        const decoded = jwtDecode<JwDecode>(session?.user.user.token);
        const email = decoded.name;
        const data = {
          email: email,
        };
        try {
          const response = await getUserHandler(data);
          localStorage.setItem('userId', response.data._id);
          setUserId(response.data._id);
          setUserDetails(response.data);
        } catch (error) {
          toast.error('Server Error');
        }
      }
    };
    getUserEmail();
  }, [session]);

  useEffect(() => {
    if (userId) {
      socket?.emit('newUser', {
        userId: userId,
        socketId: socket?.id,
      });
    }
  }, [socket, userId]);

  useEffect(() => {
    const getNotifications = async () => {
      const response = await getNotificationsHandler();
      setNotifications(response.data);
    };
    getNotifications();
  }, [getNotifications, likeNotification]);

  useEffect(() => {
    socket?.on('gotNotification', (data: { userId: string }) => {
      dispatch(saveNotification(data));
    });
  }, [dispatch, socket]);

  return {
    isOpen,
    setIsOpen,
    isOpenLogin,
    setIsOpenLogin,
    isOpenThanks,
    setIsOpenThanks,
    openRecoverModal,
    setOpenRecoverModal,
    openCheckEmailModal,
    setOpenCheckEmailModal,
    openNewPasswordModal,
    setOpenNewPasswordModal,
    openSuccessPasswordChangeModal,
    setOpenSuccessPasswordChangeModal,
    t,
    router,
    width,
    userId,
    userDetails,
    socket,
    notifications,
    openMobileMenu,
    handleClick,
    handleClickOutside,
  };
};
