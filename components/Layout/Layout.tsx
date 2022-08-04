import { Header } from 'components';
import React from 'react';

import { FeedProfile, LayoutProps } from 'components';

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <div className='mb-[58px]'>
        <Header />
      </div>
      <div className='grid overflow-hidden grid-cols-5 bg-gradient-to-r from-bg1 to-bg2 grid-rows-1 w-auto'>
        <aside className=' h-screen col-span-1'>
          <div className='fixed'>
            <FeedProfile />
          </div>
        </aside>
        <div className='h-screen col-span-3'>
          <div className='flex flex-col justify-center pt-6 pl-10'>
            {children}
          </div>
        </div>
        <aside className=' h-screen '>
          <div className='fixed'>Right Side</div>
        </aside>
      </div>
    </>
  );
};

export default Layout;
