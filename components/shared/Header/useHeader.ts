import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'state';
import { useTranslate, useMediaSize } from 'hooks';
import { useSession } from 'next-auth/react';
import { getUserHandler } from 'services';
import jwtDecode from 'jwt-decode';
import { JwDecode } from 'components/AddMovie';
import { toast } from 'react-toastify';

type UserDetails = {
  userName: string;
};

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
  const [openRecoverModal, setOpenRecoverModal] = useState(false);
  const [openCheckEmailModal, setOpenCheckEmailModal] = useState(false);
  const [openNewPasswordModal, setOpenNewPasswordModal] = useState(false);
  const [openSuccessPasswordChangeModal, setOpenSuccessPasswordChangeModal] =
    useState(false);
  const [userDetails, setUserDetails] = useState<UserDetails>();
  const { data: session } = useSession();

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
  };
};
