import React from 'react';
import { XIcon } from '@heroicons/react/solid';

import { Input, RedButton, useEditQuote } from 'components';
import { CameraIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import { QuotePropsItem } from 'types';

const EditQuote: React.FC<QuotePropsItem> = ({
  item,
  setOpenEditQUoteDialog,
}) => {
  const {
    formik,
    setFile,
    newMovie,
    handleChange,
    singleMovie,
    file,
    posterUrl,
    userDetails,
    t,
  } = useEditQuote();

  return (
    <div className='mb-6 w-[360px] md:!w-[961px] !py-5'>
      <div
        onClick={() => setOpenEditQUoteDialog(false)}
        className='flex relative border-b-[1px] !pb-2  border-gray-500'
      >
        <h1 className='text-white mx-auto'>{t('editQuote')}</h1>
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
        <div className='relative mb-6'>
          <Input
            className='!rounded-none  !border-[1px]  !pb-12  !h-[86px] italic font-extralight !text-sm border-gray-400 bg-darkBlue text-white md:!pb-8 md:!w-[961px] !placeholder-gray-500'
            isLabel={false}
            type='text'
            id='quoteNameEng'
            name='quoteNameEng'
            placeholder='Quote name'
            onChange={formik.handleChange}
            defaultValue={item.quoteNameEng}
          />
          <p className='text-sm text-gray-400 absolute top-[20%] right-2'>
            Eng
          </p>
        </div>
        <div className='relative mb-6'>
          <Input
            className='!rounded-none  !border-[1px]  !pb-12  !h-[86px] italic font-extralight !text-sm border-gray-400 bg-darkBlue text-white md:!pb-8 md:!w-[961px] !placeholder-gray-500'
            isLabel={false}
            type='text'
            id='quoteNameGe'
            name='quoteNameGe'
            placeholder='ციტატის სახელი'
            onChange={formik.handleChange}
            defaultValue={item.quoteNameGe}
          />
          <p className='text-sm text-gray-400 absolute top-[20%] right-2'>
            ქართ
          </p>
        </div>

        <div className='mb-6 relative'>
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
                  : process.env.NEXT_PUBLIC_BACKEND_URL + '/' + item.poster
              }
              alt='d'
              className='object-cover z-10 object-center'
            />
          </label>
        </div>
        <div className='relative h-[86px]'>
          <select
            className='rounded-none md:mb-10 md:text-lg px-10 !pt-2 w-full h-[86px] md:!w-[961px] border-[1px]  border-gray-400 p-2 bg-darkBlue text-white placeholder-gray-500'
            placeholder={t('selectMovie')}
            onChange={handleChange}
          >
            <option value={singleMovie._id}>{singleMovie?.movieNameEn}</option>
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

        <RedButton className='w-full mt-6 text-white' name={t('addQuote')} />
      </form>
    </div>
  );
};

export default EditQuote;
