import React, { useEffect } from 'react';
import { Input, RedButton, Button } from 'components';
import { CheckIcon, ExclamationCircleIcon } from '@heroicons/react/solid';
import { signIn } from 'next-auth/react';
import { usePersonalInformationForm } from 'components';

const Register = () => {
  const { formik, error, setError } = usePersonalInformationForm();

  useEffect(() => {
    if (formik.values.email) {
      setError('');
    }
  }, [formik.values.email, formik.values.userName, setError]);

  return (
    <div className='flex flex-col p-10 justify-center'>
      <h1 className='text-white text-center text-3xl'>Create an account</h1>
      <p className='text-center text-xs mt-2 text-gray-500'>
        Start your journey!
      </p>
      <form onSubmit={formik.handleSubmit} className='flex flex-col'>
        <div className='relative'>
          <Input
            id='userName'
            type='text'
            placeholder='At least 3 & max.15 lower case characters'
            label='Name'
            name='userName'
            onChange={formik.handleChange}
            value={formik.values.userName}
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
        </div>

        {formik.errors.userName && (
          <p className='text-red-500 mt-1'>{formik.errors.userName}</p>
        )}

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

        <div className='relative'>
          <Input
            id='repeatPassword'
            type='password'
            placeholder='Confirm password'
            label='Confirm password'
            name='repeatPassword'
            onChange={formik.handleChange}
            value={formik.values.repeatPassword}
            className={`border-2 ${
              formik.errors.repeatPassword
                ? 'border-red-500'
                : formik.values.repeatPassword
                ? 'border-green-500'
                : ''
            }`}
          />
          {!formik.errors.repeatPassword &&
          formik.values.repeatPassword !== '' ? (
            <CheckIcon className='w-6 h-6 absolute text-green-500 right-2 top-[58%]' />
          ) : formik.values.repeatPassword ? (
            <ExclamationCircleIcon className='w-6 h-6 absolute text-red-500 right-2 top-[58%]' />
          ) : (
            ''
          )}
        </div>

        {formik.errors.repeatPassword && (
          <p className='text-red-500 mt-1'>{formik.errors.repeatPassword}</p>
        )}

        <RedButton className='w-96 h-10 my-5 text-white' name='Get started' />
        <Button
          onClick={() => signIn()}
          className='w-96 h-10 mt-2'
          name='Sign up with Google'
        />
      </form>
      <p className='text-gray-500 text-center mt-10'>
        Already have an account?
        <a className='text-blue-500 ml-2' href='0#'>
          Log in
        </a>
      </p>
    </div>
  );
};

export default Register;
