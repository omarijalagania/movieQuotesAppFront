import React from 'react';
import { Button, RedButton } from '../Buttons';

const Header = () => {
  return (
    <div className='fixed flex text-white w-full items-center justify-between py-3 px-10'>
      <div className='text-primaryGold uppercase'>movie quotes</div>
      <div className='flex items-center space-x-5'>
        <p>Eng</p>
        <RedButton name='Sign Up' />
        <Button name='Log In' />
      </div>
    </div>
  );
};

export default Header;
