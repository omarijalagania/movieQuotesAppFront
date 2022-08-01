import { RedButton } from 'components/shared';
import React from 'react';
import Image from 'next/image';

const CheckEmail = () => {
  return (
    <div className='flex flex-col p-10 items-center justify-center'>
      <div className='mb-10'>
        <Image width={50} height={50} src='/assets/arrow.png' alt='arrow' />
      </div>
      <h1 className='text-white text-center text-3xl'>Check your email</h1>
      <p className='text-center text-md w-96 mt-2 text-white'>
        We have sent a password recover instructions to your email
      </p>
      <RedButton
        className='text-white w-full py-2 mt-7'
        name='Go to my email'
      />

      <p className='text-gray-500 mt-10'>Skip, I’ll confirm later</p>
    </div>
  );
};

export default CheckEmail;
