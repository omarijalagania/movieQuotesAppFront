import React, { Fragment } from 'react';
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
  useHeader,
  LangToggler,
} from 'components';
import { useSession, signOut } from 'next-auth/react';

import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';

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
    t,
    router,
  } = useHeader();

  return (
    <div className='fixed top-0 z-50 flex text-white w-full items-center bg-black justify-between py-3 px-10'>
      <div className='text-primaryGold uppercase'>{t('quotes')}</div>
      <div className='flex items-center space-x-5'>
        <Menu as='div'>
          <Menu.Button className='text-gray-200 outline-none hover:text-gray-300 flex items-center'>
            {`${router.locale === 'en' ? 'Eng' : 'ქარ'}`}
            <ChevronDownIcon
              id='menu-item'
              className='h-5 w-5 group-hover:text-gray-500'
              aria-hidden='true'
            />
          </Menu.Button>
          <Transition
            as={Fragment}
            enter='transition ease-out duration-100'
            enterFrom='transform opacity-0 scale-95'
            enterTo='transform opacity-100 scale-100'
            leave='transition ease-in duration-55'
            leaveFrom='transform opacity-100 scale-100'
            leaveTo='transform opacity-0 scale-95'
          >
            <Menu.Items>
              <LangToggler />
            </Menu.Items>
          </Transition>
        </Menu>
        {!session ? (
          <>
            <RedButton
              onClick={() => setIsOpen(true)}
              className='hidden md:block'
              name={t('register')}
            />

            <Button onClick={() => setIsOpenLogin(true)} name={t('login')} />
          </>
        ) : (
          <Button onClick={() => signOut()} name={t('logout')} />
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
