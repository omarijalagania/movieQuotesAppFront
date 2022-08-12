import React from 'react';
import { XIcon } from '@heroicons/react/solid';

import { Input, RedButton, useEditQuote } from 'components';
import { CameraIcon } from '@heroicons/react/outline';
import Image from 'next/image';

const EditQuote = () => {
  const {
    formik,
    setFile,
    newMovie,
    handleChange,
    singleMovie,
    file,
    posterUrl,
    currentQuotes,
  } = useEditQuote();

  return (
    <div className='w-full p-5'>
      <div className='flex relative border-b-[1px] pb-2 border-gray-500'>
        <h1 className='text-white mx-auto'>Add Quote</h1>
        <XIcon className='w-5 h-5 cursor-pointer text-white absolute right-0' />
      </div>
      <div className='mt-5'>
        <div className='flex items-center mb-2'>
          <div className='w-8 h-8 rounded-full bg-yellow-600' />
          <p className='ml-3 text-white'>Sirius Black</p>
        </div>
      </div>
      <form
        onSubmit={formik.handleSubmit}
        className='mt-5'
        encType='multipart/form-data'
      >
        <div className='relative mb-3'>
          <Input
            className='!rounded-none py-1 !border-[1px] !text-sm border-gray-400 bg-darkBlue text-white !w-[500px] !placeholder-white'
            isLabel={false}
            type='text'
            id='quoteNameEng'
            name='quoteNameEng'
            placeholder='Quote name'
            onChange={formik.handleChange}
            defaultValue={currentQuotes[0]?.quoteNameEng}
          />
          <p className='text-sm text-gray-400 absolute top-[20%] right-2'>
            Eng
          </p>
        </div>
        <div className='relative mb-3'>
          <Input
            className='!rounded-none py-1 !border-[1px] !text-sm border-gray-400 bg-darkBlue text-white !w-[500px] !placeholder-white'
            isLabel={false}
            type='text'
            id='quoteNameGe'
            name='quoteNameGe'
            placeholder='ციტატის სახელი'
            onChange={formik.handleChange}
            defaultValue={currentQuotes[0]?.quoteNameGe}
          />
          <p className='text-sm text-gray-400 absolute top-[20%] right-2'>
            ქართ
          </p>
        </div>

        <div className='mb-3 relative'>
          <label className='flex px-2  w-full py-3 transition bg-darkBlue border-[1px] border-gray-300  cursor-pointer  focus:outline-none'>
            <CameraIcon className='w-5 h-5 z-20 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white' />
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
              className='hidden z-20'
              accept='.png, .jpg, .jpeg'
            />
            <Image
              width={477}
              height={300}
              src={
                file
                  ? posterUrl
                  : process.env.NEXT_PUBLIC_BACKEND_URL +
                    '/' +
                    currentQuotes[0]?.poster
              }
              alt='d'
              className='object-cover z-10 object-center'
            />
          </label>
        </div>

        <select
          className='rounded-none  w-full border-[1px] text-sm border-gray-400 p-2 bg-darkBlue text-white placeholder-white'
          placeholder='Choose movie'
          onChange={handleChange}
        >
          <option value={singleMovie._id}>{singleMovie?.movieNameEn}</option>
          {newMovie.map((movie: any) => {
            return (
              <option key={movie.value} value={movie.value}>
                {movie.label}
              </option>
            );
          })}
        </select>

        <RedButton className='w-full mt-3 text-white' name='Add quote' />
      </form>
    </div>
  );
};

export default EditQuote;
