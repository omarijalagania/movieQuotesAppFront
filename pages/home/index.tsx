import React from 'react';
import { RedButton } from 'components';
import Image from 'next/image';
import { Parallax } from 'react-scroll-parallax';

const HomePage: React.FC = () => {
  return (
    <>
      <div className='w-full h-[500px] md:h-[800px] bg-black flex justify-center items-center'>
        <div className='w-[250px] md:w-[500px] flex flex-col justify-center'>
          <h1 className='text-primaryGold text-2xl md:text-5xl text-center'>
            Find any quote in millions of movie lines
          </h1>
          <RedButton
            className='w-32 h-10 text-white mx-auto mt-10'
            name='Get started'
          />
        </div>
      </div>

      <div className='relative z-30 vertical-gradient'>
        <div className='absolute w-[300px] md:w-[800px] z-30 bottom-1/2 left-10 md:left-20 text-white'>
          <h2 className='text-sm md:text-4xl truncate lg:text-6xl  z-50'>
            - “You have to leave somethig behind to go forward”
          </h2>
          <p>Interstellar, 2014</p>
        </div>
        <Image
          className='object-cover z-10'
          width={1920}
          height={1080}
          src='/../public/assets/interstellar.png'
          alt='cover'
        />
      </div>

      <Parallax translateY={[-100, 100]}>
        <div className='relative z-30 vertical-gradient'>
          <div className='absolute w-[300px] md:w-[800px] z-30 bottom-1/2 left-10 md:left-20 text-white'>
            <h2 className='text-sm md:text-4xl truncate lg:text-6xl z-50'>
              - I think we’re just gonna have to be secretly in love with earch
              other and leave it that
            </h2>
            <p>The Royal Tenenbaums,2001 </p>
          </div>
          <Image
            className='object-cover'
            width={1920}
            height={1080}
            src='/../public/assets/tenen.png'
            alt='cover'
          />
        </div>
      </Parallax>
      <div className='relative z-30 vertical-gradient'>
        <div className='absolute w-[300px] md:w-[800px] z-30 bottom-1/2 left-10 md:left-20 text-white'>
          <h2 className='text-sm md:text-4xl truncate lg:text-6xl z-50'>
            - I think we’re just gonna have to be secretly in love with earch
            other and leave it that
          </h2>
          <p>Interstellar, 2014</p>
        </div>
        <Image
          className='object-cover'
          width={1920}
          height={1080}
          src='/../public/assets/lord.png'
          alt='cover'
        />
      </div>
    </>
  );
};

export default HomePage;
