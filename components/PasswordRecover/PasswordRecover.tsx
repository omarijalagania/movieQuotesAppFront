import React, { useEffect } from 'react';
import { RedButton, useRecoverForm, Input } from 'components';
import Image from 'next/image';
import { CheckIcon, ExclamationCircleIcon } from '@heroicons/react/solid';

const PasswordRecover = () => {
  const { formik, error, setError } = useRecoverForm();
  useEffect(() => {
    if (formik.values.email) {
      setError('');
    }
  }, [formik.values.email, setError]);
  return (
    <div className='flex flex-col p-10 items-center justify-center'>
      <h1 className='text-white text-center text-3xl'>Forgot password?</h1>
      <p className='text-center text-md w-96 mt-2 text-gray-500'>
        Enter the email and we’ll send an email with instructions to reset your
        password
      </p>
      <form onSubmit={formik.handleSubmit}>
        <div className='relative'>
          <Input
            id='email'
            type='email'
            placeholder='Enter your email'
            label='Email'
            name='email'
            onChange={formik.handleChange}
            value={formik.values.email}
            className={`border-2 ${
              formik.errors.email || error
                ? 'border-red-500'
                : formik.values.email
                ? 'border-green-500'
                : ''
            }`}
          />
          {!formik.errors.email && !error && formik.values.email !== '' ? (
            <CheckIcon className='w-6 h-6 absolute text-green-500 right-2 top-[58%]' />
          ) : formik.values.email ? (
            <ExclamationCircleIcon className='w-6 h-6 absolute text-red-500 right-2 top-[58%]' />
          ) : (
            ''
          )}
        </div>
        {error ? (
          <p className='text-red-500 mt-1'>{error}</p>
        ) : formik.errors.email ? (
          <p className='text-red-500 mt-1'>{formik.errors.email}</p>
        ) : (
          ''
        )}
        <RedButton
          className='text-white mt-7 w-full py-2'
          name='Send instructions'
        />
      </form>

      <div className='flex mt-10'>
        <Image width={20} height={7} src='/assets/arrow-left.png' alt='arrow' />
        <p className='ml-4 text-gray-500'>Back to log in</p>
      </div>
    </div>
  );
};

export default PasswordRecover;
