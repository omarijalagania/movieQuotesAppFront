import React from 'react';
import { HomeIcon, CameraIcon } from '@heroicons/react/solid';
const FeedProfile = () => {
  return (
    <div className='pt-6 pl-10'>
      <div className='flex flex-col space-y-7'>
        <div className='flex'>
          <div className='w-12 h-12 rounded-full bg-red-500' />
          <div className='ml-2'>
            <h3 className='text-xl mb-1 text-white'>John Smith</h3>
            <p className='text-xs text-gray-300'>Edit your profile</p>
          </div>
        </div>
        <ul className='flex ml-3 space-y-7 flex-col'>
          <li className='flex text-white'>
            <HomeIcon className='w-6 h-6 text-red-400 mr-5' />
            News Feed
          </li>
          <li className='flex text-white'>
            <CameraIcon className='w-6 h-6 text-blue-400 mr-5' />
            List of Movies
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FeedProfile;
