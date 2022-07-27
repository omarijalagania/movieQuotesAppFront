import React, { useState } from 'react';
import { Button, RedButton } from '../Buttons';
import { Modal, Register } from 'components';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='fixed top-0 z-50 flex text-white w-full items-center bg-black justify-between py-3 px-10'>
      <div className='text-primaryGold uppercase'>movie quotes</div>
      <div className='flex items-center space-x-5'>
        <p>Eng</p>
        <RedButton
          onClick={() => setIsOpen(true)}
          className='hidden md:block'
          name='Sign Up'
        />
        <Button name='Log In' />
      </div>
      {isOpen && (
        <Modal open={isOpen} setOpen={setIsOpen}>
          <Register />
        </Modal>
      )}
    </div>
  );
};

export default Header;
