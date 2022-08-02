import React from 'react';
import {
  Modal,
  Register,
  Login,
  Button,
  RedButton,
  ThankYou,
  PasswordRecover,
  CheckEmail,
  NewPassword,
  SuccessPasswordChange,
} from 'components';
import { useSession, signOut } from 'next-auth/react';
import { useOpenModals } from 'components';

const Header = () => {
  const { data: session } = useSession();

  const {
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
  } = useOpenModals();

  return (
    <div className='fixed top-0 z-50 flex text-white w-full items-center bg-black justify-between py-3 px-10'>
      <div className='text-primaryGold uppercase'>movie quotes</div>
      <div className='flex items-center space-x-5'>
        <p>Eng</p>
        {!session ? (
          <>
            <RedButton
              onClick={() => setIsOpen(true)}
              className='hidden md:block'
              name='Sign Up'
            />

            <Button onClick={() => setIsOpenLogin(true)} name='Log In' />
          </>
        ) : (
          <Button onClick={() => signOut()} name='Log Out' />
        )}
      </div>
      {isOpen && (
        <Modal open={isOpen} setOpen={setIsOpen}>
          <Register />
        </Modal>
      )}
      {isOpenLogin && (
        <Modal open={isOpenLogin} setOpen={setIsOpenLogin}>
          <Login setOpenRecoverModal={setOpenRecoverModal} />
        </Modal>
      )}

      {isOpenThanks && (
        <Modal open={isOpenThanks} setOpen={setIsOpenThanks}>
          <ThankYou />
        </Modal>
      )}

      {openRecoverModal && (
        <Modal open={openRecoverModal} setOpen={setOpenRecoverModal}>
          <PasswordRecover />
        </Modal>
      )}
      {openCheckEmailModal && (
        <Modal open={openCheckEmailModal} setOpen={setOpenCheckEmailModal}>
          <CheckEmail />
        </Modal>
      )}
      {openNewPasswordModal && (
        <Modal open={openNewPasswordModal} setOpen={setOpenNewPasswordModal}>
          <NewPassword />
        </Modal>
      )}
      {openSuccessPasswordChangeModal && (
        <Modal
          open={openSuccessPasswordChangeModal}
          setOpen={setOpenSuccessPasswordChangeModal}
        >
          <SuccessPasswordChange />
        </Modal>
      )}
    </div>
  );
};

export default Header;
