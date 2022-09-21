import React from 'react';
import { XIcon } from '@heroicons/react/solid';

import { Input, RedButton, useAddQuote } from 'components';
import { CameraIcon } from '@heroicons/react/outline';
import { imagePreview } from 'helpers';
import { AddQuoteProp } from 'types';

const AddQuote: React.FC<AddQuoteProp> = ({ setOpenAddQuote }) => {
  const { formik, setFile, newMovie, handleChange, userDetails, t, file } =
    useAddQuote();

  return (
    <div className='w-full h-screen md:w-[961px] md:h-[670px] mx-auto  p-5 md:p-0'>
      <div
        onClick={() => setOpenAddQuote(false)}
        className='flex relative border-b-[1px] md:!w-[961px] pb-2 border-gray-500'
      >
        <h1 className='text-white text-2xl  mx-auto'>{t('addQuote')}</h1>
        <XIcon className='w-5 h-5 cursor-pointer text-white absolute right-0' />
      </div>
      <div className='mt-5'>
        <div className='flex items-center mb-2'>
          <img
            className='w-8 h-8 rounded-full'
            src={
              userDetails?.image
                ? userDetails?.image
                : process.env.NEXT_PUBLIC_RANDOM_AVATAR
            }
            alt='avatar'
          />
          <p className='ml-3 text-white'>{userDetails?.userName}</p>
        </div>
      </div>
      <form
        onSubmit={formik.handleSubmit}
        className='mt-5 md:w-[961px] mx-auto'
        encType='multipart/form-data'
      >
        <div className='relative md:mb-6'>
          <Input
            className='!rounded-none py-1 !border-[1px] md:!h-[86px] italic font-extralight !text-sm border-gray-400 bg-darkBlue text-white md:!w-[961px] md:!pb-8 !placeholder-gray-500'
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
          {formik.errors.quoteNameEng && formik.touched.quoteNameEng && (
            <p className='text-red-500 mt-1'>{t(formik.errors.quoteNameEng)}</p>
          )}
        </div>
        <div className='relative md:mb-6'>
          <Input
            className='!rounded-none py-1 !border-[1px] md:!h-[86px] italic font-extralight !text-sm border-gray-400 bg-darkBlue text-white md:!pb-8 md:!w-[961px] !placeholder-gray-500'
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
          {formik.errors.quoteNameGe && formik.touched.quoteNameGe && (
            <p className='text-red-500 mt-1'>{t(formik.errors.quoteNameGe)}</p>
          )}
        </div>

        <div className='md:mb-6 md:!w-[961px]'>
          <label className='flex px-2 w-full py-3 transition bg-darkBlue border-[1px] md:!h-[84px] border-gray-300  cursor-pointer  focus:outline-none'>
            <span className='flex items-center space-x-2'>
              <CameraIcon className='w-5 h-5 text-white' />
              <span className='text-sm text-white'>
                {t('drag')}
                <span className='text-white text-xs py-1 px-2 ml-1 bg-purple-600'>
                  {t('chooseFile')}
                </span>
              </span>
              {file && (
                <img
                  src={imagePreview(file as File)}
                  alt=''
                  className='w-6 h-4'
                />
              )}
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
          {file ? (
            <></>
          ) : (
            JSON.stringify(formik.errors) !== '{}' && (
              <p className='text-red-500 mt-1'>{t('requiredPoster')}</p>
            )
          )}
        </div>
        <div className='relative  md:h-[86px]'>
          <select
            className='rounded-none md:mb-10 md:text-lg px-10 pb-2 w-full md:h-[86px] md:!w-[961px] border-[1px]  border-gray-400 p-2 bg-darkBlue text-white placeholder-gray-500'
            placeholder='Choose movie'
            onChange={handleChange}
          >
            <option value='' disabled selected>
              {t('selectMovie')}
            </option>
            {newMovie.map((movie) => {
              return (
                <option key={movie.value} value={movie.value}>
                  {movie.label}
                </option>
              );
            })}
          </select>
          <img
            className='w-5 h-5 absolute top-1/2 transform -translate-y-1/2 left-2'
            src='/assets/camera.png'
            alt='camera'
          />
        </div>
        <RedButton
          className='w-full md:!w-[961px] md:h-[48px] mt-3 text-white'
          name={t('addQuote')}
        />
      </form>
    </div>
  );
};

export default AddQuote;
