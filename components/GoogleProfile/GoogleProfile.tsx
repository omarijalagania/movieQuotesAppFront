import React from 'react';
import { Input, useGoogleProfile, RedButton } from 'components';

import {
  handleChange,
  imagePreview,
  openFIlePicker,
  showInAvatar,
} from 'helpers';

const GoogleProfile: React.FC = () => {
  const {
    formik,
    t,
    userDetails,
    isEditable,
    setIsEditable,
    file,
    setFile,
    hiddenFileInput,
  } = useGoogleProfile();

  return (
    <div className='w-[650px] relative'>
      <p className='text-white mt-5 mb-20'>My profile</p>
      <div className='w-[650px] flex flex-col justify-center items-center rounded-lg relative bg-darkBlue h-[500px]'>
        <img
          src={showInAvatar(
            imagePreview(file as File),
            userDetails?.image,
            userDetails?.poster
          )}
          alt='avatar'
          className='w-32 h-32 object-cover rounded-full  absolute -top-16 left-1/2 -translate-x-1/2'
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
          className='text-white absolute left-1/2 top-24 -translate-x-1/2 cursor-pointer'
          onClick={() => openFIlePicker(hiddenFileInput)}
        >
          Upload photo
        </p>
        <form
          id='update'
          encType='multipart/form-data'
          onSubmit={formik.handleSubmit}
        >
          <div className='relative'>
            <Input
              disabled={!isEditable}
              isLabel={true}
              id='userName'
              type='text'
              placeholder={t('namePlaceholder')}
              label='Username'
              name='userName'
              value={formik.values.userName}
              defaultValue={userDetails?.userName}
              onChange={formik.handleChange}
            />

            {!isEditable && (
              <p
                onClick={() => setIsEditable(!isEditable)}
                className='text-white absolute -right-10 top-1/2 cursor-pointer translate-y-[20%]'
              >
                Edit
              </p>
            )}
          </div>
          <div className='w-full h-0.5 mt-10 mb-8 bg-gray-700' />
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
            />
          </div>
        </form>
      </div>
      {isEditable && (
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
      )}
    </div>
  );
};

export default GoogleProfile;
