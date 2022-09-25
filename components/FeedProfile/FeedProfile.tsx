import React from 'react';
import { HomeIcon } from '@heroicons/react/solid';
import { VideoCameraIcon } from '@heroicons/react/outline';
import Link from 'next/link';

import { useHeader } from 'components';
import { showAvatarPicture } from 'helpers';

const FeedProfile: React.FC = () => {
  const { userDetails, t, router } = useHeader();

  return (
    <div className='!pt-14 pl-14'>
      <div className='flex flex-col space-y-7'>
        <div className='flex'>
          <img
            className='w-10 h-10 md:w-14 md:h-14 rounded-full object-cover'
            src={showAvatarPicture(userDetails as any)}
            alt='avatar'
          />

          <div className='ml-4'>
            <h3 className='text-xl md:text-2xl mb-1 overflow-hidden text-white'>
              {userDetails?.userName}
            </h3>
            <p
              onClick={() => router.push('/feed/profile')}
              className='text-base text-gray-300 cursor-pointer'
            >
              {t('editProfile')}
            </p>
          </div>
        </div>
        <ul className='flex ml-4 space-y-7 flex-col'>
          <li className='flex text-white'>
            <HomeIcon
              className={`w-7 h-7 ${
                router.pathname.includes('/feed') &&
                !router.pathname.includes('/feed/movie')
                  ? ' text-red-400'
                  : 'text-white'
              } mr-4 `}
            />

            <Link href='/feed'>
              <p className='md:text-2xl cursor-pointer'>{t('feed')}</p>
            </Link>
          </li>
          <li className='flex text-white'>
            <VideoCameraIcon
              className={`w-7 h-7  mr-4 ${
                router.pathname.includes('/feed/movie') &&
                router.pathname.length === 12
                  ? ' text-red-400'
                  : 'text-white'
              }`}
            />
            <Link href='/feed/movies'>
              <p className='md:text-2xl cursor-pointer'>{t('movieList')}</p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FeedProfile;
