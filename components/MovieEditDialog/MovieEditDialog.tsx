import React from 'react';
import { XIcon } from '@heroicons/react/solid';
import Select from 'react-select';
import { Input, RedButton, useEditMovie, customStyles } from 'components';
import { CameraIcon } from '@heroicons/react/outline';
import { useSelector } from 'react-redux';
import { RootState } from 'state';
import { backUrl } from 'helpers';
import Image from 'next/image';

const MovieEditDialog = () => {
  const { formik, setFile, file, newGenre, handleChange } = useEditMovie();
  const movie = useSelector((state: RootState) => state.quotes.singleMovie);

  let imageUrl = '';
  if (file) {
    imageUrl = URL.createObjectURL(file);
  }

  const defaultSelects = movie?.genre?.map(
    (genre: { genre: string; label: string }) => ({
      value: genre.genre,
      label: genre.label,
    })
  );

  console.log(formik.errors);

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
            id='movieNameEn'
            name='movieNameEn'
            placeholder='Movie name'
            defaultValue={movie?.movieNameEn}
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
            defaultValue={movie?.movieNameGe}
          />
          <p className='text-sm text-gray-400 absolute top-[20%] right-2'>
            ქართ
          </p>
        </div>
        <Select
          styles={customStyles}
          onChange={handleChange}
          isMulti
          options={newGenre}
          placeholder='Genre'
          defaultValue={defaultSelects?.map((el: any) => el)}
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
            defaultValue={movie?.directorEn}
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
            placeholder='რეჟისორი'
            onChange={formik.handleChange}
            defaultValue={movie?.directorGe}
          />
          <p className='text-sm text-gray-400 absolute top-[20%] right-2'>
            ქართ
          </p>
        </div>
        <div className='relative mb-1'>
          <textarea
            onChange={formik.handleChange}
            className='border-[1px] p-1 text-sm border-gray-400 bg-darkBlue text-white w-[500px] placeholder-white'
            name='descriptionEn'
            placeholder='Movie description'
            defaultValue={movie?.descriptionEn}
          />
          <p className='text-sm text-gray-400 absolute top-[20%] right-2'>
            Eng
          </p>
        </div>
        <div className='relative mb-1'>
          <textarea
            onChange={formik.handleChange}
            className='border-[1px] p-1 text-sm border-gray-400 bg-darkBlue text-white w-[500px] placeholder-white'
            name='descriptionGe'
            placeholder='ფილმის აღწერა'
            defaultValue={movie?.descriptionGe}
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
              src={file ? imageUrl : backUrl + '/' + movie.poster}
              alt='d'
              className='object-cover z-10 object-center'
            />
          </label>
        </div>

        <RedButton className='w-full text-white' name='Save changes' />
      </form>
    </div>
  );
};

export default MovieEditDialog;
