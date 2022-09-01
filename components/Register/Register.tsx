import React from 'react';
import { Input, RedButton, Button } from 'components';
import { CheckIcon, ExclamationCircleIcon } from '@heroicons/react/solid';
import { signIn } from 'next-auth/react';
import { usePersonalInformationForm } from 'components';

const Register: React.FC = () => {
  const { formik, error, t } = usePersonalInformationForm();

  return (
    <div className='flex flex-col p-10 justify-center'>
      <h1 className='text-white text-center text-3xl'>{t('createAccount')}</h1>
      <p className='text-center text-xs mt-2 text-gray-500'>{t('journey')}</p>
      <form onSubmit={formik.handleSubmit} className='flex flex-col'>
        <div className='relative'>
          <Input
            isLabel={true}
            id='userName'
            type='text'
            placeholder={t('namePlaceholder')}
            label={t('name')}
            name='userName'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.userName}
            className={`border-2 ${
              formik.errors.userName && formik.touched.userName
                ? 'border-red-500'
                : formik.values.userName && formik.touched.userName
                ? 'border-green-500'
                : ''
            }`}
          />
          {!formik.errors.userName &&
          formik.touched.userName &&
          formik.values.userName !== '' ? (
            <CheckIcon className='w-6 h-6 absolute text-green-500 right-2 top-[58%]' />
          ) : formik.values.userName && formik.touched.userName ? (
            <ExclamationCircleIcon className='w-6 h-6 absolute text-red-500 right-2 top-[58%]' />
          ) : (
            ''
          )}
        </div>

        {formik.errors.userName && formik.touched.userName && (
          <p className='text-red-500 mt-1'>{t(formik.errors.userName)}</p>
        )}

        <div className='relative'>
          <Input
            isLabel={true}
            id='email'
            type='email'
            placeholder={t('emailPlaceholder')}
            label={t('email')}
            name='email'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className={`border-2 ${
              (formik.errors.email && formik.touched.email) || error
                ? 'border-red-500'
                : formik.values.email && formik.touched.email
                ? 'border-green-500'
                : ''
            }`}
          />
          {!formik.errors.email &&
          formik.touched.email &&
          !error &&
          formik.values.email !== '' ? (
            <CheckIcon className='w-6 h-6 absolute text-green-500 right-2 top-[58%]' />
          ) : formik.values.email && formik.touched.email ? (
            <ExclamationCircleIcon className='w-6 h-6 absolute text-red-500 right-2 top-[58%]' />
          ) : (
            ''
          )}
        </div>

        {error ? (
          <p className='text-red-500 mt-1'>{t(error)}</p>
        ) : formik.errors.email && formik.touched.email ? (
          <p className='text-red-500 mt-1'>{t(formik.errors.email)}</p>
        ) : (
          ''
        )}
        <div className='relative'>
          <Input
            isLabel={true}
            id='password'
            type='password'
            placeholder={t('passwordPlaceholder')}
            label={t('password')}
            name='password'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            className={`border-2 ${
              formik.errors.password && formik.touched.password
                ? 'border-red-500'
                : formik.values.password && formik.touched.password
                ? 'border-green-500'
                : ''
            }`}
          />
          {!formik.errors.password &&
          formik.touched.password &&
          formik.values.password !== '' ? (
            <CheckIcon className='w-6 h-6 absolute text-green-500 right-2 top-[58%]' />
          ) : formik.values.password && formik.touched.password ? (
            <ExclamationCircleIcon className='w-6 h-6 absolute text-red-500 right-2 top-[58%]' />
          ) : (
            ''
          )}
        </div>

        {formik.errors.password && formik.touched.password && (
          <p className='text-red-500 mt-1'>{t(formik.errors.password)}</p>
        )}

        <div className='relative'>
          <Input
            isLabel={true}
            id='repeatPassword'
            type='password'
            placeholder={t('repeatPassword')}
            label={t('repeatPassword')}
            name='repeatPassword'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.repeatPassword}
            className={`border-2 ${
              formik.errors.repeatPassword && formik.touched.repeatPassword
                ? 'border-red-500'
                : formik.values.repeatPassword && formik.touched.repeatPassword
                ? 'border-green-500'
                : ''
            }`}
          />
          {!formik.errors.repeatPassword &&
          formik.touched.repeatPassword &&
          formik.values.repeatPassword !== '' ? (
            <CheckIcon className='w-6 h-6 absolute text-green-500 right-2 top-[58%]' />
          ) : formik.values.repeatPassword && formik.touched.repeatPassword ? (
            <ExclamationCircleIcon className='w-6 h-6 absolute text-red-500 right-2 top-[58%]' />
          ) : (
            ''
          )}
        </div>

        {formik.errors.repeatPassword && formik.touched.repeatPassword && (
          <p className='text-red-500 mt-1'>{t(formik.errors.repeatPassword)}</p>
        )}

        <RedButton
          className='w-96 h-10 my-5 text-white'
          name={t('getStarted')}
        />
      </form>
      <Button
        hadIcon={true}
        onClick={() =>
          signIn('google', {
            redirect: true,
            callbackUrl: '/feed',
          })
        }
        className='w-96 h-10 mt-2'
        name={t('google')}
      />
      <p className='text-gray-500 text-center mt-10'>
        {t('haveAccount')}
        <p className='text-blue-500 cursor-pointer ml-2'>{t('login')}</p>
      </p>
    </div>
  );
};

export default Register;
