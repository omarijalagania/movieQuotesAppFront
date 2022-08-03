import { CheckIcon, ExclamationCircleIcon } from '@heroicons/react/solid';
import { RedButton, Input, useNewPasswordFrom } from 'components';
import { useTranslate } from 'hooks';
import React from 'react';

const NewPassword = () => {
  const { formik } = useNewPasswordFrom();
  const { t } = useTranslate();
  return (
    <div className='flex flex-col p-10 justify-center'>
      <h1 className='text-white text-center text-3xl'>{t('newPassword')}</h1>
      <p className='text-center text-xs mt-2 text-gray-500'>
        {t('differentPasswords')}
      </p>

      <form onSubmit={formik.handleSubmit} className='flex flex-col'>
        <div className='relative'>
          <Input
            id='password'
            type='password'
            placeholder={t('passwordPlaceholder')}
            label={t('password')}
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
          <p className='text-red-500 mt-1'>{t(formik.errors.password)}</p>
        )}
        <div className='relative'>
          <Input
            id='repeatPassword'
            type='password'
            placeholder={t('repeatPassword')}
            label={t('repeatPassword')}
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
          <p className='text-red-500 mt-1'>{t(formik.errors.repeatPassword)}</p>
        )}
        <RedButton
          className='w-96 text-white h-10 my-5'
          name={t('resetPass')}
        />
      </form>
    </div>
  );
};

export default NewPassword;
