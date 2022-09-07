import React from 'react';
import { XIcon } from '@heroicons/react/solid';

import { Input, RedButton, useAddQuote } from 'components';
import { CameraIcon } from '@heroicons/react/outline';

const AddQuote: React.FC = () => {
  const { formik, setFile, newMovie, handleChange, userDetails, t, file } =
    useAddQuote();

  return (
    <div className='w-full h-screen md:h-full md:p-5'>
      <div className='flex relative border-b-[1px] pb-2 border-gray-500'>
        <h1 className='text-white mx-auto'>{t('addQuote')}</h1>
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
        className='mt-5'
        encType='multipart/form-data'
      >
        <div className='relative mb-3'>
          <Input
            className='!rounded-none py-1 !border-[1px] !text-sm border-gray-400 bg-darkBlue text-white md:!w-[500px] !placeholder-white'
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
            className='!rounded-none py-1 !border-[1px] !text-sm border-gray-400 bg-darkBlue text-white md:!w-[500px] !placeholder-white'
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

        <select
          className='rounded-none  w-full border-[1px] text-sm border-gray-400 p-2 bg-darkBlue text-white placeholder-white'
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

        <RedButton className='w-full mt-3 text-white' name={t('addQuote')} />
      </form>
    </div>
  );
};

export default AddQuote;
