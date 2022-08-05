import React from 'react';
import { XIcon } from '@heroicons/react/solid';
import { Input, RedButton, useAddMovie } from 'components';
import { CameraIcon } from '@heroicons/react/outline';
const AddMovie = () => {
  const { formik } = useAddMovie();

  return (
    <div className='w-full'>
      <div className='flex relative border-b-[1px] pb-2 border-gray-500'>
        <h1 className='text-white mx-auto'>Add movie</h1>
        <XIcon className='w-5 h-5 cursor-pointer text-white absolute right-0' />
      </div>
      <div className='mt-5'>
        <div className='flex items-center mb-2'>
          <div className='w-8 h-8 rounded-full bg-yellow-600' />
          <p className='ml-3 text-white'>Sirius Black</p>
        </div>
      </div>
      <form onSubmit={formik.handleSubmit} className='mt-5'>
        <div className='relative mb-3'>
          <Input
            className='!rounded-none py-1 !border-[1px] !text-sm border-gray-400 bg-darkBlue text-white !w-[500px] !placeholder-white'
            isLabel={false}
            type='text'
            id='movieNameEn'
            name='movieNameEn'
            placeholder='Movie name'
            onChange={formik.handleChange}
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
            id='movieNameGe'
            name='movieNameGe'
            placeholder='ფილმის სახელი'
            onChange={formik.handleChange}
          />
          <p className='text-sm text-gray-400 absolute top-[20%] right-2'>
            ქართ
          </p>
        </div>
        <Input
          className='!rounded-none py-1 !border-[1px] !text-sm border-gray-400 bg-darkBlue text-white !w-[500px] !placeholder-white'
          isLabel={false}
          type='text'
          id='genre'
          name='genre'
          placeholder='Genre'
          onChange={formik.handleChange}
        />
        <div className='relative mb-3'>
          <Input
            className='!rounded-none py-1 !border-[1px] !text-sm border-gray-400 bg-darkBlue text-white !w-[500px] !placeholder-white'
            isLabel={false}
            type='text'
            id='directorEn'
            name='directorEn'
            placeholder='Director'
            onChange={formik.handleChange}
          />
          <p className='text-sm text-gray-400 absolute top-[20%] right-2'>
            Eng
          </p>
        </div>
        <div className='relative mb-1'>
          <Input
            className='!rounded-none py-1 !mb-1 !border-[1px] !text-sm border-gray-400 bg-darkBlue text-white !w-[500px] !placeholder-white'
            isLabel={false}
            type='text'
            id='directorGe'
            name='directorGe'
            placeholder='Director'
            onChange={formik.handleChange}
          />
          <p className='text-sm text-gray-400 absolute top-[20%] right-2'>
            ქართ
          </p>
        </div>
        <div className='relative mb-1'>
          <textarea
            onChange={formik.handleChange}
            className='border-[1px] text-sm border-gray-400 bg-darkBlue text-white w-[500px] placeholder-white'
            name='descriptionEn'
            placeholder='Movie description'
          />
          <p className='text-sm text-gray-400 absolute top-[20%] right-2'>
            Eng
          </p>
        </div>
        <div className='relative mb-1'>
          <textarea
            onChange={formik.handleChange}
            className='border-[1px] text-sm border-gray-400 bg-darkBlue text-white w-[500px] placeholder-white'
            name='descriptionGe'
            placeholder='Movie description'
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
                Drag & drop your image here or
                <span className='text-white text-xs py-1 px-2 ml-1 bg-purple-600'>
                  Choose file
                </span>
              </span>
            </span>
            <input
              onChange={formik.handleChange}
              type='file'
              id='file'
              name='fileUpload'
              className='hidden'
            />
          </label>
        </div>

        <RedButton className='w-full text-white' name='Add movie' />
      </form>
    </div>
  );
};

export default AddMovie;