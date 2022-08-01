import React from 'react';
import Image from 'next/image';
import { RedButton } from 'components';

const SuccessPasswordChange = () => {
  return (
    <div className='flex flex-col p-10 items-center justify-center'>
      <div className='mb-10'>
        <Image width={50} height={50} src='/assets/arrow.png' alt='arrow' />
      </div>
      <h1 className='text-white text-center text-3xl'>Success!</h1>
      <p className='text-center text-md w-96 mt-2 text-white'>
        Your Email changed successfully
      </p>
      <RedButton
        className='text-white w-full py-2 mt-7'
        name='Go to my news feed'
      />
    </div>
  );
};

export default SuccessPasswordChange;
