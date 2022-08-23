import React from 'react';
import { Input, useGoogleProfile, RedButton } from 'components';
import { CheckIcon, ExclamationCircleIcon } from '@heroicons/react/solid';

const GoogleProfile = () => {
  const { formik, t, userDetails, isEditable, setIsEditable } =
    useGoogleProfile();

  return (
    <div className='w-[650px] relative'>
      <p className='text-white mt-5 mb-20'>My profile</p>
      <div className='w-[650px] flex flex-col justify-center items-center rounded-lg relative bg-darkBlue h-[500px]'>
        <img
          src={userDetails?.image}
          alt='avatar'
          className='w-32 h-32 rounded-full  absolute -top-16 left-1/2 -translate-x-1/2'
        />
        <p className='absolute cursor-pointer text-white top-20 left-1/2 -translate-x-1/2'>
          Upload new photo
        </p>
        <form id='update' onSubmit={formik.handleSubmit}>
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
              className={`border-2 ${
                formik.errors.userName
                  ? 'border-red-500'
                  : formik.values.userName
                  ? 'border-green-500'
                  : ''
              }`}
            />
            {!formik.errors.userName && formik.values.userName !== '' ? (
              <CheckIcon className='w-6 h-6 absolute text-green-500 right-2 top-[58%]' />
            ) : formik.values.userName ? (
              <ExclamationCircleIcon className='w-6 h-6 absolute text-red-500 right-2 top-[58%]' />
            ) : (
              ''
            )}
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
