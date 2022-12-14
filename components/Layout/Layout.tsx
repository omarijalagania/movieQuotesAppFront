import React from 'react';
import {
  FeedProfile,
  LayoutProps,
  Header,
  MovieDetailsSide,
  useLayout,
  Forbidden,
  Loader,
} from 'components';

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { router, status } = useLayout();

  if (status === 'loading') {
    return <Loader />;
  }

  if (status === 'unauthenticated') {
    return <Forbidden />;
  }

  return (
    <>
      <div className='mb-[58px]'>
        <Header />
      </div>
      <div
        className={`grid grid-cols-5 overflow-y-auto scrollbar-hide bg-gradient-to-r from-bg1 to-bg2 grid-rows-1 w-auto`}
      >
        <aside className='hidden h-screen md:block'>
          <div className='fixed'>
            <FeedProfile />
          </div>
        </aside>
        <div
          className={`md:h-screen col-span-5 ${
            router.pathname.includes('/feed/movies') &&
            !router.pathname.includes('/feed/movies/[id]')
              ? 'md:col-span-4'
              : 'md:col-span-3'
          }  `}
        >
          <div
            className={`flex flex-col mx-auto  md:h-screen md:w-auto ${
              !router.pathname.includes('/feed/movies/[id]') &&
              !router.pathname.includes('/feed/profile') &&
              'lg:w-[85rem] '
            }  pt-8 p-5 ${
              router.pathname.length > 5 || router.pathname.length < 12
                ? ''
                : 'md:!w-[809px]'
            } md:p-10`}
          >
            {children}
          </div>
        </div>
        {router.pathname.includes('/feed/movies') &&
        !router.pathname.includes('/feed/movies/[id]') ? (
          ''
        ) : (
          <aside className={`hidden md:block h-screen`}>
            <div className='text-white !pt-6 px-10'>
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
