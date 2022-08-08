import React from 'react';
import { FeedProfile, LayoutProps, Header, MovieDetailsSide } from 'components';
import { useTranslate } from 'hooks';
const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { router } = useTranslate();

  return (
    <>
      <div className='mb-[58px]'>
        <Header />
      </div>
      <div
        className={`grid grid-cols-1 overflow-hidden ${
          router.pathname.includes('/feed/movies/[id]')
            ? 'md:grid-cols-6'
            : 'md:grid-cols-4'
        } md:grid-cols-5 bg-gradient-to-r from-bg1 to-bg2 grid-rows-1 w-auto`}
      >
        <aside className='hidden h-screen md:block md:col-span-1'>
          <div>
            <FeedProfile />
          </div>
        </aside>
        <div
          className={`h-screen  ${
            router.pathname.includes('/feed/movies') &&
            !router.pathname.includes('/feed/movies/[id]')
              ? 'md:col-span-4'
              : 'md:col-span-3'
          } `}
        >
          <div className='flex flex-col justify-center pt-8 p-10 overflow-hidden'>
            {children}
          </div>
        </div>
        {router.pathname.includes('/feed/movies') &&
        !router.pathname.includes('/feed/movies/[id]') ? (
          ''
        ) : (
          <aside
            className={`hidden ${
              router.pathname.includes('/feed/movies/[id]')
                ? 'col-span-2'
                : 'col-span-1'
            }  md:block h-screen`}
          >
            <div className='text-white pt-6 px-10'>
              {router.pathname.includes('/feed/movies/[id]') && (
                <MovieDetailsSide />
              )}
            </div>
          </aside>
        )}
      </div>
    </>
  );
};

export default Layout;
