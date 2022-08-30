import React from 'react';
import { RedButton, useRecoverForm, Input } from 'components';
import {
  ArrowLeftIcon,
  CheckIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/solid';

const PasswordRecover: React.FC = () => {
  const { formik, error, t, router } = useRecoverForm();

  return (
    <div className='flex flex-col p-10 items-center justify-center'>
      <h1 className='text-white text-center text-3xl'>{t('forgotPassword')}</h1>
      <p className='text-center text-md w-96 mt-2 text-gray-500'>
        {t('emailVerify')}
      </p>
      <form onSubmit={formik.handleSubmit}>
        <div className='relative'>
          <Input
            id='email'
            type='email'
            placeholder={t('emailPlaceholder')}
            label={t('email')}
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
            <CheckIcon className='w-6 h-6 absolute text-green-500 right-2 top-[20%]' />
          ) : formik.values.email ? (
            <ExclamationCircleIcon className='w-6 h-6 absolute text-red-500 right-2 top-[20%]' />
          ) : (
            ''
          )}
        </div>
        {error ? (
          <p className='text-red-500 mt-1'>{t(error)}</p>
        ) : formik.errors.email ? (
          <p className='text-red-500 mt-1'>{t(formik.errors.email)}</p>
        ) : (
          ''
        )}
        <RedButton
          className='text-white mt-7 w-full py-2'
          name={t('instructions')}
        />
      </form>

      <div
        onClick={() => router.reload()}
        className='flex cursor-pointer items-center mt-10'
      >
        <ArrowLeftIcon className='w-8 h-7 text-gray-400' />
        <p className='ml-4 text-gray-500'>{t('back')}</p>
      </div>
    </div>
  );
};

export default PasswordRecover;
