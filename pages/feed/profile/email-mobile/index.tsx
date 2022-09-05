import React from 'react';
import { useRegularUserProfile } from 'components';
import { ArrowLeftIcon } from '@heroicons/react/solid';

const EmailMobile = () => {
  const { router } = useRegularUserProfile();
  return (
    <div className='relative'>
      <ArrowLeftIcon
        onClick={() => router.push('/feed/profile')}
        className='w-6 h-6 text-gray-400 mb-3 cursor-pointer'
      />
      <div className='w-[350px] flex flex-col  items-center rounded-lg relative bg-lightBlue h-screen'>
        <div id='update' className='w-[300px]'></div>
      </div>
    </div>
  );
};

export default EmailMobile;
