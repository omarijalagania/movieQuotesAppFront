import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'state';
import { useTranslate } from 'hooks';
export const useHeader = () => {
  const {
    registerResponse,
    passwordRecoveryResponse,
    tokens,
    newPasswordResponse,
  } = useSelector((state: RootState) => state.quotes);
  const { t, router } = useTranslate();

  const [isOpen, setIsOpen] = useState(false);
  const [isOpenLogin, setIsOpenLogin] = useState(false);
  const [isOpenThanks, setIsOpenThanks] = useState(false);
  const [openRecoverModal, setOpenRecoverModal] = useState(false);
  const [openCheckEmailModal, setOpenCheckEmailModal] = useState(false);
  const [openNewPasswordModal, setOpenNewPasswordModal] = useState(false);
  const [openSuccessPasswordChangeModal, setOpenSuccessPasswordChangeModal] =
    useState(false);

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
  };
};
