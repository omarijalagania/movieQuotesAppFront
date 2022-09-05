import React from 'react';
import { useRegularUserProfile, Input, Button } from 'components';
import {
  ArrowLeftIcon,
  CheckIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/solid';

const EmailMobile = () => {
  const { router, formik, primaryEmail, userDetails, removeUserEmail, t } =
    useRegularUserProfile();
  return (
    <div className='relative mx-auto'>
      <ArrowLeftIcon
        onClick={() => router.push('/feed/profile')}
        className='w-6 h-6 text-gray-400 mb-3 cursor-pointer'
      />
      <div className='w-[350px] flex flex-col  items-center rounded-lg relative bg-lightBlue h-screen'>
        <div id='update' className='w-[300px]'>
          <div className='relative mt-10 mb-5'>
            <Input
              isLabel={true}
              id='email'
              type='email'
              placeholder={t('emailPlaceholder')}
              label='PRIMARY EMAIL'
              name='email'
              disabled={true}
              onChange={formik.handleChange}
              value={formik.values.email}
              className={`border-2 ${
                formik.errors.email
                  ? 'border-red-500 bg-red-900'
                  : formik.values.email
                  ? 'border-green-500 bg-green-900 text-white'
                  : ''
              }`}
            />
            {!formik.errors.email && formik.values.email !== '' ? (
              <CheckIcon className='w-6 h-6 absolute text-green-500 right-2 top-[58%]' />
            ) : formik.values.email ? (
              <ExclamationCircleIcon className='w-6 h-6 absolute text-red-500 right-2 top-[58%]' />
            ) : (
              ''
            )}
          </div>
          <div className='w-full h-0.5 mt-5 mb-5 bg-gray-600' />
          {userDetails?.secondaryEmails.map((email, index) => (
            <div key={index} className='relative'>
              <Input
                disabled={true}
                isLabel={false}
                type='email'
                placeholder={t('emailPlaceholder')}
                label={t('email')}
                name={`secondaryEmails.${index}.secondaryEmail`}
                onChange={formik.handleChange}
                defaultValue={email.secondaryEmail}
                className='border-none bg-transparent text-white'
              />

              <div className='flex justify-between items-center'>
                {email.isVerified ? (
                  <Button
                    name='Make primary'
                    onClick={() => primaryEmail(email.secondaryEmail)}
                    className='text-white'
                  />
                ) : (
                  <p className='text-white'>Not verified</p>
                )}

                <p
                  onClick={() => removeUserEmail(email.secondaryEmail)}
                  className='text-white ml-2 cursor-pointer'
                >
                  Remove
                </p>
              </div>
              <div className='w-full h-0.5 mt-5 mb-5 bg-gray-600' />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmailMobile;
