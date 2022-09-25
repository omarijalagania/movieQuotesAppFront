import React from 'react';
import { HomeIcon } from '@heroicons/react/solid';
import { VideoCameraIcon } from '@heroicons/react/outline';
import Link from 'next/link';

import { useHeader, MobileMenuProps, UserDetails } from 'components';
import { showAvatarPicture } from 'helpers';

const MobileMenu: React.FC<MobileMenuProps> = ({ openMobileMenu }) => {
  const { userDetails, t, router } = useHeader();

  return (
    <div
      className={`h-screen fixed top-20 left-0 transition ease-in-out delay-150 ${
        openMobileMenu ? '' : '-translate-x-[100vw] '
      }  bg-lightBlue w-64`}
    >
      <div className='flex flex-col p-5 space-y-7'>
        <div className='flex'>
          <img
            className='w-10 h-10 rounded-full object-cover'
            src={showAvatarPicture(userDetails as UserDetails)}
            alt='avatar'
          />

          <div className='ml-2'>
            <h3 className='text-xl mb-1 overflow-hidden text-white'>
              {userDetails?.userName}
            </h3>
            <p
              onClick={() => router.push('/feed/profile')}
              className='text-xs text-gray-300 cursor-pointer'
            >
              {t('editProfile')}
            </p>
          </div>
        </div>
        <ul className='flex ml-2 space-y-7 flex-col'>
          <li className='flex text-white'>
            <HomeIcon
              className={`w-6 h-6 ${
                router.pathname.includes('/feed') &&
                !router.pathname.includes('/feed/movie')
                  ? ' text-red-400'
                  : 'text-white'
              } mr-4 `}
            />

            <Link href='/feed'>{t('feed')}</Link>
          </li>
          <li className='flex text-white'>
            <VideoCameraIcon
              className={`w-6 h-6  mr-4 ${
                router.pathname.includes('/feed/movie') &&
                router.pathname.length === 12
                  ? ' text-red-400'
                  : 'text-white'
              }`}
            />
            <Link href='/feed/movies'>{t('movieList')}</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;
