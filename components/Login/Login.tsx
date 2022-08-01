import React from 'react';
import { Button, Input, RedButton, useLoginForm, LoginProps } from 'components';
import { signIn } from 'next-auth/react';

const Login: React.FC<LoginProps> = ({ setOpenRecoverModal }) => {
  const { formik } = useLoginForm();

  return (
    <div className='flex flex-col p-10 justify-center'>
      <h1 className='text-white text-center text-3xl'>
        Log in to your account
      </h1>
      <p className='text-center text-xs mt-2 text-gray-500'>
        Welcome back! Please enter your details.
      </p>
      <form onSubmit={formik.handleSubmit} className='flex flex-col'>
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
        <div className='flex justify-between mt-2 items-center'>
          <div className='flex text-white justify-between items-center'>
            <input type='checkbox' />
            <p className='ml-1'>Remember me</p>
          </div>
          <p className='text-white' onClick={() => setOpenRecoverModal(true)}>
            Forgot password?
          </p>
        </div>
        <RedButton className='w-96 text-white h-10 my-5' name='Sign in' />
        <Button
          onClick={() => signIn()}
          className='w-96 h-10 mt-2'
          name='Sign up with Google'
        />
      </form>
    </div>
  );
};

export default Login;
