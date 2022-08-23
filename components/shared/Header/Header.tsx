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
  NotificationProps,
} from 'components';
import { useSession, signOut } from 'next-auth/react';
import moment from 'moment';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import { BellIcon, MenuIcon } from '@heroicons/react/outline';
import { updateNotificationHandler } from 'services';

const Header: React.FC = () => {
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
    width,
    notifications,
    userId,
  } = useHeader();

  const newNotifications = notifications.filter(
    (notification: { isRead: boolean }) => notification.isRead === false
  );

  return (
    <div
      className={`fixed top-0 z-50 flex text-white w-full items-center ${
        router.pathname.includes('/feed') ? 'bg-headerBg' : 'bg-black'
      } justify-between py-5 px-10`}
    >
      {(width as number) < 768 && router.pathname.includes('/feed') ? (
        <MenuIcon className='cursor-pointer w-5 h-5' />
      ) : (
        <div className='text-primaryGold uppercase'>{t('quotes')}</div>
      )}
      <div className='flex items-center justify-center space-x-5'>
        {router.pathname.includes('/feed') ? (
          <div className='relative'>
            {notifications.find(
              (notification: { notificationFor: string }) =>
                notification.notificationFor === userId
            ) &&
              newNotifications.length !== 0 && (
                <div className='w-4 h-4 absolute -right-1 -top-1 rounded-full bg-red-500 flex justify-center items-center text-xs'>
                  {newNotifications.length}
                </div>
              )}
            <Menu>
              {({ open }) => (
                <div className='w-full'>
                  <Menu.Button>
                    <BellIcon
                      onClick={() => {
                        updateNotificationHandler();
                      }}
                      className='w-6 h-6 cursor-pointer '
                    />
                  </Menu.Button>
                  {open && (
                    <div className='bg-darkBlue absolute w-[368px] md:w-[500px] overflow-y-auto md:h-[400px] -left-[147px] md:-left-[400px] md:-right-[100px] top-12 p-3'>
                      <div className='flex justify-between  bg-darkBlue items-center my-5'>
                        <h2 className='text-xl'>Notifications</h2>
                        <p>mark all as read</p>
                      </div>
                      <Menu.Items>
                        {notifications?.map(
                          (notification: NotificationProps) => {
                            return (
                              <>
                                {notification.notificationFor === userId && (
                                  <Menu.Item>
                                    {({}) => (
                                      <div className='mb-3 border-[1px] border-gray-700'>
                                        <div>
                                          <div className='flex justify-between items-center'>
                                            <div className='flex justify-between items-center'>
                                              <div className='w-10 h-10 bg-red-500 rounded-full'></div>

                                              <div className='ml-3'>
                                                <p>
                                                  {notification.user.userName}
                                                </p>
                                                {notification.notificationType ===
                                                'commented' ? (
                                                  <p>Commented on your quote</p>
                                                ) : (
                                                  <p>Liked on your quote</p>
                                                )}
                                              </div>
                                            </div>
                                            <div className='flex flex-col'>
                                              <p>
                                                {moment
                                                  .utc(notification.createdAt)
                                                  .local()
                                                  .startOf('seconds')
                                                  .fromNow()}
                                              </p>
                                              <p className='text-right text-green-600'>
                                                {!notification.isRead
                                                  ? 'New'
                                                  : ''}
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    )}
                                  </Menu.Item>
                                )}
                              </>
                            );
                          }
                        )}
                      </Menu.Items>
                    </div>
                  )}
                </div>
              )}
            </Menu>
          </div>
        ) : null}
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
            {router.pathname.includes('/feed') ? (
              ''
            ) : (
              <RedButton
                onClick={() => setIsOpen(true)}
                className='hidden md:block'
                name={t('register')}
              />
            )}

            {(width as number) < 768 &&
            router.pathname.includes('/feed') ? null : (
              <Button onClick={() => setIsOpenLogin(true)} name={t('login')} />
            )}
          </>
        ) : (
          <Button
            onClick={() =>
              signOut({
                redirect: true,
                callbackUrl: '/',
              })
            }
            name={t('logout')}
          />
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
