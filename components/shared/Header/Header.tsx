import React, { useEffect, useState } from 'react';
import {
  Modal,
  Register,
  Login,
  Button,
  RedButton,
  ThankYou,
} from 'components';
import { useSession, signOut } from 'next-auth/react';
import { useSelector } from 'react-redux';
import { RootState } from 'state';

const Header = () => {
  const { data: session } = useSession();
  const registerResponse = useSelector(
    (state: RootState) => state.quotes.registerResponse
  );
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenLogin, setIsOpenLogin] = useState(false);
  const [isOpenThanks, setIsOpenThanks] = useState(false);

  useEffect(() => {
    if (registerResponse.status === 200) {
      setIsOpenThanks(true);
      setIsOpen(false);
    }
  }, [registerResponse]);

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
          <Login />
        </Modal>
      )}

      {isOpenThanks && (
        <Modal open={isOpenThanks} setOpen={setIsOpenThanks}>
          <ThankYou />
        </Modal>
      )}
    </div>
  );
};

export default Header;
