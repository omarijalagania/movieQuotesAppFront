import React, { useEffect } from 'react';
import { Button, Input, RedButton, useLoginForm, LoginProps } from 'components';
import { signIn } from 'next-auth/react';
import { CheckIcon, ExclamationCircleIcon } from '@heroicons/react/solid';

const Login: React.FC<LoginProps> = ({ setOpenRecoverModal }) => {
  const { formik, error, setError } = useLoginForm();

  useEffect(() => {
    if (formik.values.email) {
      setError('');
    }
  }, [formik.values.email, setError]);

  return (
    <div className='flex flex-col p-10 justify-center'>
      <h1 className='text-white text-center text-3xl'>
        Log in to your account
      </h1>
      <p className='text-center text-xs mt-2 text-gray-500'>
        Welcome back! Please enter your details.
      </p>
      <form onSubmit={formik.handleSubmit} className='flex flex-col'>
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
        <div className='relative'>
          <Input
            id='password'
            type='password'
            placeholder='At least 8 & max.15 lower case characters'
            label='Password'
            name='password'
            onChange={formik.handleChange}
            value={formik.values.password}
            className={`border-2 ${
              formik.errors.password
                ? 'border-red-500'
                : formik.values.password
                ? 'border-green-500'
                : ''
            }`}
          />

          {!formik.errors.password && formik.values.password !== '' ? (
            <CheckIcon className='w-6 h-6 absolute text-green-500 right-2 top-[58%]' />
          ) : formik.values.password ? (
            <ExclamationCircleIcon className='w-6 h-6 absolute text-red-500 right-2 top-[58%]' />
          ) : (
            ''
          )}
        </div>

        {formik.errors.password && (
          <p className='text-red-500 mt-1'>{formik.errors.password}</p>
        )}
        <div className='flex justify-between mt-2 items-center'>
          <div className='flex text-white justify-between items-center'>
            <input type='checkbox' />
            <p className='ml-1'>Remember me</p>
          </div>
          <p
            className='text-white cursor-pointer'
            onClick={() => setOpenRecoverModal(true)}
          >
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
