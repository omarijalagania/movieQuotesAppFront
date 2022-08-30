import React from 'react';
import { RedButton } from 'components';
import Image from 'next/image';
import { Parallax } from 'react-scroll-parallax';
import { useTranslate } from 'hooks';

const HomePage: React.FC = () => {
  const { t } = useTranslate();
  return (
    <>
      <div className='w-full h-[500px] md:h-[800px] bg-black flex justify-center items-center'>
        <div className='w-[250px] md:w-[500px] flex flex-col justify-center'>
          <h1 className='text-primaryGold text-2xl md:text-5xl text-center'>
            {t('millionMovies')}
          </h1>
          <RedButton
            className='w-32 h-10 text-white mx-auto mt-10'
            name={t('getStarted')}
          />
        </div>
      </div>

      <div className='relative z-30 vertical-gradient'>
        <div className='absolute w-[300px] md:w-[800px] z-30 bottom-1/2 left-10 md:left-20 text-white'>
          <h2 className='text-sm md:text-4xl  lg:text-6xl  z-50'>
            - “{t('movie1')}”
          </h2>
          <p>{t('Interstellar')}, 2014</p>
        </div>
        <Image
          className='object-cover z-10'
          width={1920}
          height={1080}
          src='/assets/interstellar.png'
          alt='cover'
        />
      </div>

      <Parallax translateY={[-30, 30]}>
        <div className='relative z-30 vertical-gradient'>
          <div className='absolute w-[300px] md:w-[800px] z-30 bottom-1/2 left-10 md:left-20 text-white'>
            <h2 className='text-sm md:text-4xl  lg:text-6xl z-50'>
              - “{t('movie2')}”
            </h2>
            <p>{t('royal')},2001 </p>
          </div>
          <Image
            className='object-cover'
            width={1920}
            height={1080}
            src='/assets/tenen.png'
            alt='cover'
          />
        </div>
      </Parallax>
      <div className='relative z-30 vertical-gradient'>
        <div className='absolute w-[300px] md:w-[800px] z-30 bottom-1/2 left-10 md:left-20 text-white'>
          <h2 className='text-sm md:text-4xl  lg:text-6xl z-50'>
            - “{t('movie3')}”
          </h2>
          <p>{t('lord')}, 2014</p>
        </div>
        <Image
          className='object-cover'
          width={1920}
          height={1080}
          src='/assets/lord.png'
          alt='cover'
        />
      </div>
    </>
  );
};

export default HomePage;
