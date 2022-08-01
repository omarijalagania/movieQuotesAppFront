import { RedButton, Input, useNewPasswordFrom } from 'components';
import React from 'react';

const NewPassword = () => {
  const { formik } = useNewPasswordFrom();
  console.log(formik.errors);
  return (
    <div className='flex flex-col p-10 justify-center'>
      <h1 className='text-white text-center text-3xl'>Create new password</h1>
      <p className='text-center text-xs mt-2 text-gray-500'>
        Your new password must be different from previous used passwords
      </p>

      <form onSubmit={formik.handleSubmit} className='flex flex-col'>
        <Input
          id='password'
          type='password'
          placeholder='At least 8 & max.15 lower case characters'
          label='Password'
          name='password'
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        {formik && <p className='text-red-500'>{formik.errors.password}</p>}

        <Input
          id='repeatPassword'
          type='password'
          placeholder='Confirm password'
          label='Confirm password'
          name='repeatPassword'
          onChange={formik.handleChange}
          value={formik.values.repeatPassword}
        />
        {formik && (
          <p className='text-red-500'>{formik.errors.repeatPassword}</p>
        )}
        <RedButton
          className='w-96 text-white h-10 my-5'
          name='Reset password'
        />
      </form>
    </div>
  );
};

export default NewPassword;
