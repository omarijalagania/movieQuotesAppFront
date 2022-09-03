import React from 'react';
import { Input, RedButton, useGoogleProfile } from 'components';
import {
  handleChange,
  imagePreview,
  openFIlePicker,
  showInAvatar,
} from 'helpers';
import { ArrowLeftIcon } from '@heroicons/react/solid';

const MobileGoogleProfile: React.FC = () => {
  const {
    formik,
    t,
    userDetails,
    setIsEditable,
    file,
    setFile,
    hiddenFileInput,
    router,
  } = useGoogleProfile();

  return (
    <div className='relative'>
      <ArrowLeftIcon
        onClick={() => router.push('/feed')}
        className='w-6 h-6 text-gray-400 mb-3 cursor-pointer'
      />
      <div className='w-[350px] flex flex-col  items-center rounded-lg relative bg-lightBlue h-screen'>
        <img
          src={showInAvatar(
            imagePreview(file as File),
            userDetails?.image,
            userDetails?.poster
          )}
          alt='avatar'
          className='w-32 h-32 mt-10 object-cover rounded-full'
        />
        <input
          ref={hiddenFileInput}
          type='file'
          className='hidden'
          placeholder='Upload new photo'
          accept='.png, .jpg, .jpeg'
          name='poster'
          id='poster'
          onChange={(event) => handleChange(event, setFile)}
        />
        <p
          className='text-white mt-4 mb-10 cursor-pointer'
          onClick={() => openFIlePicker(hiddenFileInput)}
        >
          Upload photo
        </p>
        <form
          id='update'
          encType='multipart/form-data'
          onSubmit={formik.handleSubmit}
          className='w-[300px]'
        >
          <div className='relative'>
            <Input
              isLabel={true}
              id='userName'
              type='text'
              placeholder={t('namePlaceholder')}
              label='Username'
              name='userName'
              value={formik.values.userName}
              defaultValue={userDetails?.userName}
              onChange={formik.handleChange}
              className='!border-0 !border-b-[1px] mb-10 !rounded-none border-gray-500 !outline-none bg-transparent text-white'
            />
          </div>
          <div className='relative'>
            <Input
              disabled={true}
              isLabel={true}
              id='email'
              type='email'
              placeholder={t('emailPlaceholder')}
              label={t('email')}
              name='email'
              onChange={formik.handleChange}
              value={formik.values.email}
              defaultValue={userDetails?.email}
              className='!border-0 !border-b-[1px] mb-10 !rounded-none border-gray-500 !outline-none bg-transparent text-white'
            />
          </div>
        </form>
      </div>

      <div className='mt-7 flex absolute right-0 space-x-3 items-center'>
        <p
          onClick={() => setIsEditable(false)}
          className='text-white cursor-pointer'
        >
          Cancel
        </p>
        <RedButton
          form='update'
          type='submit'
          className='text-white'
          name='Save changes'
        />
      </div>
    </div>
  );
};

export default MobileGoogleProfile;
