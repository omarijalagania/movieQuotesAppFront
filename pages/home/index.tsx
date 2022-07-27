import { RedButton } from 'components';
import React from 'react';

const HomePage = () => {
  return (
    <header className='w-full h-[800px] bg-black flex justify-center items-center'>
      <div className='w-[500px] flex flex-col justify-center'>
        <h1 className='text-primaryGold text-5xl text-center'>
          Find any quote in millions of movie lines
        </h1>
        <RedButton
          className='w-32 h-10 text-white mx-auto mt-10'
          name='Get started'
        />
      </div>
    </header>
  );
};

export default HomePage;
