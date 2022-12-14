import React from 'react';
import { XIcon } from '@heroicons/react/solid';
import Select from 'react-select';
import {
  Input,
  RedButton,
  useEditMovie,
  customStyles,
  MovieEditProps,
  UserDetails,
} from 'components';
import { CameraIcon } from '@heroicons/react/outline';

import Image from 'next/image';
import { showAvatarPicture } from 'helpers';

const MovieEditDialog: React.FC<MovieEditProps> = ({ setOpenEditDialog }) => {
  const {
    formik,
    setFile,
    file,
    newGenre,
    handleChange,
    posterUrl,
    defaultSelects,
    movie,
    t,
    userDetails,
    width,
  } = useEditMovie();

  return (
    <div className='w-screen bg-darkBlue md:w-[961px] md:h-full mx-auto px-7 md:px-0 h-screen'>
      <div
        onClick={() => setOpenEditDialog(false)}
        className='flex relative border-b-[1px] !pb-2 border-gray-500'
      >
        <h1 className='text-white text-2xl mx-auto'>{t('movieEdit')}</h1>
        <XIcon className='w-5 h-5 cursor-pointer text-white absolute right-0' />
      </div>
      <div className='mt-5'>
        <div className='flex items-center mb-2'>
          <img
            className='w-14 h-14 object-cover rounded-full'
            src={showAvatarPicture(userDetails as UserDetails)}
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
            className='!rounded-none py-1 font-normal !text-xl !border-[1px] h-[48px] border-gray-700 bg-darkBlue text-white  md:!w-[961px] !placeholder-white'
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
        {formik.errors.movieNameEn && formik.touched.movieNameEn && (
          <p className='text-red-500 mt-1'>{t(formik.errors.movieNameEn)}</p>
        )}
        <div className='relative mb-3'>
          <Input
            className='!rounded-none py-1 font-normal !text-xl !border-[1px] h-[48px] border-gray-700 bg-darkBlue text-white  md:!w-[961px] !placeholder-white'
            isLabel={false}
            type='text'
            id='movieNameGe'
            name='movieNameGe'
            placeholder='?????????????????? ??????????????????'
            onChange={formik.handleChange}
            defaultValue={movie?.movieNameGe}
          />
          <p className='text-sm text-gray-400 absolute top-[20%] right-2'>
            ????????????
          </p>
        </div>
        {formik.errors.movieNameGe && formik.touched.movieNameGe && (
          <p className='text-red-500 mt-1'>{t(formik.errors.movieNameGe)}</p>
        )}
        <Select
          styles={customStyles}
          onChange={handleChange}
          isMulti
          options={newGenre}
          closeMenuOnSelect={false}
          placeholder={t('selectGenre')}
          defaultValue={defaultSelects?.map((el: any) => el)}
        />

        <div className='relative mb-3'>
          <Input
            className='!rounded-none py-1 font-normal !text-xl !border-[1px] h-[48px] border-gray-700 bg-darkBlue text-white  md:!w-[961px] !placeholder-white'
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
        {formik.errors.directorEn && formik.touched.directorEn && (
          <p className='text-red-500 mt-1'>{t(formik.errors.directorEn)}</p>
        )}
        <div className='relative mb-1'>
          <Input
            className='!rounded-none py-1 font-normal !text-xl !border-[1px] h-[48px] border-gray-700 bg-darkBlue text-white  md:!w-[961px] !placeholder-white'
            isLabel={false}
            type='text'
            id='directorGe'
            name='directorGe'
            placeholder='????????????????????????'
            onChange={formik.handleChange}
            defaultValue={movie?.directorGe}
          />
          <p className='text-sm text-gray-400 absolute top-[20%] right-2'>
            ????????????
          </p>
        </div>
        {formik.errors.directorGe && formik.touched.directorGe && (
          <p className='text-red-500 mt-1'>{t(formik.errors.directorGe)}</p>
        )}
        <div className='relative mb-1'>
          <textarea
            onChange={formik.handleChange}
            className='border-[1px] !p-1 text-xl h-[86px] border-gray-700 bg-darkBlue text-white w-full md:w-[961px] placeholder-white'
            name='descriptionEn'
            placeholder='Movie description'
            defaultValue={movie?.descriptionEn}
          />
          <p className='text-sm text-gray-400 absolute top-[20%] right-2'>
            Eng
          </p>
        </div>
        {formik.errors.descriptionEn && formik.touched.descriptionEn && (
          <p className='text-red-500 mt-1'>{t(formik.errors.descriptionEn)}</p>
        )}
        <div className='relative mb-1'>
          <textarea
            onChange={formik.handleChange}
            className='border-[1px] !p-1 text-xl h-[86px] border-gray-700 bg-darkBlue text-white w-full md:w-[961px] placeholder-white'
            name='descriptionGe'
            placeholder='?????????????????? ??????????????????'
            defaultValue={movie?.descriptionGe}
          />
          <p className='text-sm text-gray-400 absolute top-[20%] right-2'>
            ????????????
          </p>
        </div>
        {formik.errors.descriptionGe && formik.touched.descriptionGe && (
          <p className='text-red-500 mt-1'>{t(formik.errors.descriptionGe)}</p>
        )}
        <div className='mb-3 md:mb-6 relative'>
          <label className='flex px-2  w-full !py-3 transition bg-darkBlue border-[1px] border-gray-300  cursor-pointer  focus:outline-none'>
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

            {(width.width as unknown as number) > 768 ? (
              <Image
                width={961}
                height={300}
                src={
                  file
                    ? posterUrl
                    : process.env.NEXT_PUBLIC_BACKEND_URL + '/' + movie.poster
                }
                alt='d'
                className='object-cover z-10 object-center'
              />
            ) : (
              <Image
                width={441}
                height={300}
                src={
                  file
                    ? posterUrl
                    : process.env.NEXT_PUBLIC_BACKEND_URL + '/' + movie.poster
                }
                alt='d'
                className='object-cover z-10 object-center'
              />
            )}
          </label>
        </div>

        <RedButton className='w-full text-white' name={t('saveChanges')} />
      </form>
    </div>
  );
};

export default MovieEditDialog;
