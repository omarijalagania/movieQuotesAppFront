import React from 'react';
import { XIcon } from '@heroicons/react/solid';
import Select from 'react-select';
import {
  Input,
  RedButton,
  useAddMovie,
  customStyles,
  AddMovieProp,
  UserDetails,
} from 'components';
import { CameraIcon } from '@heroicons/react/outline';
import { imagePreview, showAvatarPicture } from 'helpers';

const AddMovie: React.FC<AddMovieProp> = ({ setOpenAddMovieModal }) => {
  const {
    formik,
    setFile,
    newGenre,
    handleChange,
    userDetails,
    t,
    file,
    selectError,
    width,
  } = useAddMovie();

  return (
    <div className='w-screen bg-darkBlue md:w-[961px] md:h-full mx-auto px-7 md:px-0 h-screen'>
      <div
        onClick={() => setOpenAddMovieModal(false)}
        className='flex relative border-b-[1px] pb-2 border-gray-700'
      >
        <h1 className='text-white text-2xl mx-auto'>{t('addMovie')}</h1>
        <XIcon className='w-5 h-5 cursor-pointer text-white absolute right-0' />
      </div>
      <div className='mt-5'>
        <div className='flex items-center mb-2'>
          <img
            src={showAvatarPicture(userDetails as UserDetails)}
            alt='avatar'
            className='w-14 h-14 rounded-full object-cover'
          />
          <p className='ml-3 text-white'>{userDetails?.userName}</p>
        </div>
      </div>
      <form
        onSubmit={formik.handleSubmit}
        className='mt-5 w-full'
        encType='multipart/form-data'
      >
        <div className='relative mb-3'>
          <Input
            className='!rounded-none py-1  font-normal !placeholder-gray-500 !text-xl !border-[1px] h-[48px] border-gray-700 bg-darkBlue text-white  md:!w-[961px] !'
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
        {formik.errors.movieNameEn && formik.touched.movieNameEn && (
          <p className='text-red-500 mt-1'>{t(formik.errors.movieNameEn)}</p>
        )}
        <div className='relative mb-3'>
          <Input
            className='!rounded-none py-1 !border-[1px] !placeholder-gray-500 !text-xl h-[48px] border-gray-700 bg-darkBlue text-white md:!w-[961px] !'
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
        {formik.errors.movieNameGe && formik.touched.movieNameGe && (
          <p className='text-red-500 mt-1'>{t(formik.errors.movieNameGe)}</p>
        )}
        <Select
          styles={customStyles}
          onChange={handleChange}
          closeMenuOnSelect={false}
          isMulti
          options={newGenre}
          placeholder={t('selectGenre')}
        />
        {selectError ? (
          <p className='text-red-500 mt-1'>{t('required')}</p>
        ) : (
          <></>
        )}

        <div className='relative mb-3'>
          <Input
            className='!rounded-none py-1 h-[48px] !placeholder-gray-500  !border-[1px] !text-xl border-gray-700 bg-darkBlue text-white md:!w-[961px] !'
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
        {formik.errors.directorEn && formik.touched.directorEn && (
          <p className='text-red-500 mt-1'>{t(formik.errors.directorEn)}</p>
        )}
        <div className='relative mb-1'>
          <Input
            className='!rounded-none h-[48px] py-1 !placeholder-gray-500 !mb-1 !border-[1px] !text-xl border-gray-700 bg-darkBlue text-white md:!w-[961px] !'
            isLabel={false}
            type='text'
            id='directorGe'
            name='directorGe'
            placeholder='რეჟისორი'
            onChange={formik.handleChange}
          />
          <p className='text-sm text-gray-400 absolute top-[20%] right-2'>
            ქართ
          </p>
        </div>
        {formik.errors.directorGe && formik.touched.directorGe && (
          <p className='text-red-500 mt-1'>{t(formik.errors.directorGe)}</p>
        )}
        <div className='relative mb-1'>
          <textarea
            onChange={formik.handleChange}
            className='border-[1px] !p-1 text-xl h-[86px] !placeholder-gray-500 border-gray-700 bg-darkBlue text-white w-full  md:w-[961px] '
            name='descriptionEn'
            placeholder='Movie description'
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
            className='border-[1px] !p-1 text-xl h-[86px] !placeholder-gray-500  border-gray-700 bg-darkBlue text-white w-full md:w-[961px] '
            name='descriptionGe'
            placeholder='ფილმის აღწერა'
          />
          <p className='text-sm text-gray-400 absolute top-[20%] right-2'>
            ქართ
          </p>
        </div>
        {formik.errors.descriptionGe && formik.touched.descriptionGe && (
          <p className='text-red-500 mt-1'>{t(formik.errors.descriptionGe)}</p>
        )}
        <div className='mb-3 md:mb-6'>
          <label className='flex px-2 w-full py-3 transition bg-darkBlue border-[1px] h-[84px] border-gray-700  cursor-pointer  focus:outline-none'>
            <span className='flex items-center space-x-2'>
              <CameraIcon className='w-5 h-5 text-white' />
              <span className='text-sm flex text-white'>
                {(width.width as unknown as number) > 768 ? (
                  <p className='text-xl'>{t('drag')}</p>
                ) : (
                  <p className='text-xl'>Upload image</p>
                )}
                <span className='text-white text-xl py-1 px-2 ml-1 bg-purple-700'>
                  {t('chooseFile')}
                </span>
              </span>

              {file && (
                <img
                  src={imagePreview(file as File)}
                  alt=''
                  className='w-20 h-10'
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

        <RedButton
          type='submit'
          className='w-full text-white mt-3 h-[48px]'
          name={t('addMovie')}
        />
      </form>
    </div>
  );
};

export default AddMovie;
