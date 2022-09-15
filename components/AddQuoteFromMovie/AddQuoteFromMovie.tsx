import React from 'react';
import { XIcon } from '@heroicons/react/solid';
import { useHeader } from 'components';
import { Input, RedButton, useAddQuoteFromMovie, MovieProp } from 'components';
import { CameraIcon } from '@heroicons/react/outline';
import Image from 'next/image';

const AddQuoteFromMovie: React.FC<MovieProp> = ({
  movie,
  setOpenAddQuoteDialog,
  setRefreshQuote,
}) => {
  const { formik, setFile, file } = useAddQuoteFromMovie(
    movie,
    setOpenAddQuoteDialog,
    setRefreshQuote
  );
  const { userDetails, t } = useHeader();
  return (
    <div className='w-screen  md:w-full p-5'>
      <div className='flex relative border-b-[1px] pb-2 border-gray-500'>
        <h1 className='text-white mx-auto'>{t('addQuote')}</h1>
        <XIcon
          onClick={() => setOpenAddQuoteDialog(false)}
          className='w-5 h-5 cursor-pointer text-white absolute right-0'
        />
      </div>
      <div className='mt-5'>
        <div className='flex items-center mb-2'>
          <img
            className='w-8 h-8 object-cover rounded-full'
            src={
              userDetails?.poster
                ? process.env.NEXT_PUBLIC_BACKEND_URL +
                  '/' +
                  userDetails?.poster
                : process.env.NEXT_PUBLIC_RANDOM_AVATAR
            }
            alt='image'
          />
          <p className='ml-3 text-white'>{userDetails?.userName}</p>
        </div>
      </div>
      <form
        onSubmit={formik.handleSubmit}
        className='mt-5'
        encType='multipart/form-data'
      >
        <div className='flex space-x-5 mb-3'>
          <div>
            <Image
              className='rounded-md'
              width={200}
              height={120}
              src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/${movie?.poster}`}
              alt='img'
            />
          </div>
          <div className='flex md:w-80 flex-col space-y-5'>
            <div>
              <h2 className='text-primaryGold text-2xl'>{movie.movieNameEn}</h2>
            </div>
            <div className='grid grid-cols-3 gap-y-3'>
              {movie?.genre?.map((genre: { genre: string; label: string }) => (
                <p
                  key={genre.label + Math.random()}
                  className='text-xs w-12 h-6 px-10 flex justify-center items-center bg-gray-500'
                >
                  {genre.label}
                </p>
              ))}
            </div>
            <p className='text-white text-sm'>
              {t('director')} {movie.directorEn}
            </p>
          </div>
        </div>
        <div className='relative mb-3'>
          <Input
            className='!rounded-none py-2 !border-[1px] !text-sm border-gray-400 bg-darkBlue text-white md:!w-[550px] !placeholder-gray-500'
            isLabel={false}
            type='text'
            id='quoteNameEng'
            name='quoteNameEng'
            placeholder='Quote name'
            onChange={formik.handleChange}
          />
          <p className='text-sm text-gray-400 absolute top-[20%] right-2'>
            Eng
          </p>
        </div>
        <div className='relative mb-3'>
          <Input
            className='!rounded-none py-2 !border-[1px] !text-sm border-gray-400 bg-darkBlue text-white md:!w-[550px] !placeholder-gray-500'
            isLabel={false}
            type='text'
            id='quoteNameGe'
            name='quoteNameGe'
            placeholder='ციტატის სახელი'
            onChange={formik.handleChange}
          />
          <p className='text-sm text-gray-400 absolute top-[20%] right-2'>
            ქართ
          </p>
        </div>

        <div className='mb-3'>
          <label className='flex px-2 w-full py-3 transition bg-darkBlue border-[1px] border-gray-300  cursor-pointer  focus:outline-none'>
            <span className='flex items-center space-x-2'>
              <CameraIcon className='w-5 h-5 text-white' />
              <span className='text-sm text-white'>
                {t('drag')}
                <span className='text-white text-xs py-1 px-2 ml-1 bg-purple-600'>
                  {t('chooseFile')}
                </span>
              </span>
              <p className='text-white w-14 text-xs'>
                {file !== null ? file.name : ''}
              </p>
            </span>
            <input
              onChange={(event) => {
                const target = event.currentTarget as HTMLInputElement;
                if (target.files) {
                  setFile(target.files[0]);
                }
              }}
              type='file'
              id='poster'
              name='poster'
              className='hidden'
              accept='.png, .jpg, .jpeg'
            />
          </label>
        </div>

        <RedButton className='w-full mt-3 text-white' name={t('addQuote')} />
      </form>
    </div>
  );
};

export default AddQuoteFromMovie;
