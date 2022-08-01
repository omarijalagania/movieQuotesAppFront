import React from 'react';
import { RedButton, useRecoverForm, Input } from 'components';
import Image from 'next/image';

const PasswordRecover = () => {
  const { formik } = useRecoverForm();
  return (
    <div className='flex flex-col p-10 items-center justify-center'>
      <h1 className='text-white text-center text-3xl'>Forgot password?</h1>
      <p className='text-center text-md w-96 mt-2 text-gray-500'>
        Enter the email and we’ll send an email with instructions to reset your
        password
      </p>
      <form onSubmit={formik.handleSubmit}>
        <Input
          id='email'
          type='email'
          placeholder='Enter your email'
          label='Email'
          name='email'
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik && <p className='text-red-500'>{formik.errors.email}</p>}
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
