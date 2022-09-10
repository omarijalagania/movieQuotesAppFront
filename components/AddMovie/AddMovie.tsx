import React from 'react';
import { XIcon } from '@heroicons/react/solid';
import Select from 'react-select';
import {
  Input,
  RedButton,
  useAddMovie,
  customStyles,
  AddMovieProp,
} from 'components';
import { CameraIcon } from '@heroicons/react/outline';

const AddMovie: React.FC<AddMovieProp> = ({ setOpenAddMovieModal }) => {
  const { formik, setFile, newGenre, handleChange, userDetails, t, file } =
    useAddMovie();

  return (
    <div className='w-screen bg-darkBlue md:w-[700px] md:h-full px-5 md:px-0 overflow-hidden h-screen'>
      <div
        onClick={() => setOpenAddMovieModal(false)}
        className='flex relative border-b-[1px] pb-2 border-gray-500'
      >
        <h1 className='text-white mx-auto'>{t('addMovie')}</h1>
        <XIcon className='w-5 h-5 cursor-pointer text-white absolute right-0' />
      </div>
      <div className='mt-5'>
        <div className='flex items-center mb-2'>
          <img
            src={
              process.env.NEXT_PUBLIC_BACKEND_URL + '/' + userDetails?.poster
            }
            alt='avatar'
            className='w-10 h-10 rounded-full object-cover'
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
            className='!rounded-none py-1 !border-[1px] !text-sm border-gray-500 bg-darkBlue text-white  md:!w-[700px] !placeholder-white'
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
            className='!rounded-none py-1 !border-[1px] !text-sm border-gray-500 bg-darkBlue text-white md:!w-[700px] !placeholder-white'
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

        <div className='relative mb-3'>
          <Input
            className='!rounded-none py-1 !border-[1px] !text-sm border-gray-500 bg-darkBlue text-white md:!w-[700px] !placeholder-white'
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
            className='!rounded-none py-1 !mb-1 !border-[1px] !text-sm border-gray-500 bg-darkBlue text-white md:!w-[700px] !placeholder-white'
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
            className='border-[1px] p-1 text-sm border-gray-500 bg-darkBlue text-white w-full  md:w-[700px] placeholder-white'
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
            className='border-[1px] p-1 text-sm border-gray-500 bg-darkBlue text-white w-full md:w-[700px] placeholder-white'
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
        <div className='mb-3'>
          <label className='flex px-2 w-full py-3 transition bg-darkBlue border-[1px] border-gray-500  cursor-pointer  focus:outline-none'>
            <span className='flex items-center space-x-2'>
              <CameraIcon className='w-5 h-5 text-white' />
              <span className='text-sm text-white'>
                {t('drag')}
                <span className='text-white text-xs py-1 px-2 ml-1 bg-purple-700'>
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
          {!file && <p className='text-red-500 mt-1'>select file</p>}
        </div>

        <RedButton className='w-full text-white' name={t('addMovie')} />
      </form>
    </div>
  );
};

export default AddMovie;
