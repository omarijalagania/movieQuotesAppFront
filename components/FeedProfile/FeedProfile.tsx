import React from 'react';
import { HomeIcon } from '@heroicons/react/solid';
import { VideoCameraIcon } from '@heroicons/react/outline';
import Link from 'next/link';
const FeedProfile = () => {
  return (
    <div className='pt-8 pl-10'>
      <div className='flex flex-col space-y-7'>
        <div className='flex'>
          <div className='w-10 h-10 rounded-full bg-red-500' />
          <div className='ml-2'>
            <h3 className='text-xl mb-1 overflow-hidden text-white'>
              John Smith
            </h3>
            <p className='text-xs text-gray-300'>Edit your profile</p>
          </div>
        </div>
        <ul className='flex ml-2 space-y-7 flex-col'>
          <li className='flex text-white'>
            <HomeIcon className='w-6 h-6 text-red-400 mr-4' />

            <Link href='/feed'>News Feed</Link>
          </li>
          <li className='flex text-white'>
            <VideoCameraIcon className='w-6 h-6  mr-4' />
            <Link href='feed/movies'>List of Movies</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FeedProfile;
