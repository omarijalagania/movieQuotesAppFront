import React from 'react';
import { Button, Input, RedButton, useLoginForm, LoginProps } from 'components';
import { signIn } from 'next-auth/react';
import { CheckIcon, ExclamationCircleIcon } from '@heroicons/react/solid';

const Login: React.FC<LoginProps> = ({ setOpenRecoverModal, setIsOpen }) => {
  const { formik, error, t } = useLoginForm();

  return (
    <div className='flex flex-col  md:p-10 h-screen justify-start md:h-full md:justify-center'>
      <h1 className='text-white text-center text-3xl'>{t('accountLogin')}</h1>
      <p className='text-center text-xs mt-2 text-gray-500'>
        {t('welcomeBack')}
      </p>
      <form onSubmit={formik.handleSubmit} className='flex flex-col'>
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
            className={`border-2  md:!full ${
              (formik.touched.email && formik.errors.email) || error
                ? 'border-red-500'
                : formik.values.email && formik.touched.email
                ? 'border-green-500'
                : ''
            }`}
          />

          {!formik.errors.email &&
          !error &&
          formik.touched.email &&
          formik.values.email !== '' ? (
            <CheckIcon className='w-6 h-6 absolute text-green-500 right-2 top-[58%]' />
          ) : formik.values.email ||
            (formik.errors.email && formik.touched.email) ? (
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
          ) : formik.values.password || formik.errors.password ? (
            <ExclamationCircleIcon className='w-6 h-6 absolute text-red-500 right-2 top-[58%]' />
          ) : (
            ''
          )}
        </div>

        {formik.errors.password && formik.touched.password && (
          <p className='text-red-500 mt-1'>{t(formik.errors.password)}</p>
        )}
        <div className='flex justify-between mt-2 items-center'>
          <div className='flex text-white justify-between items-center'>
            <input id='remember' type='checkbox' />
            <label htmlFor='remember' className='ml-1'>
              {t('remember')}
            </label>
          </div>
          <p
            className='text-white cursor-pointer'
            onClick={() => setOpenRecoverModal(true)}
          >
            {t('forgotPassword')}
          </p>
        </div>
        <RedButton
          type='submit'
          className='w-96 text-white h-10 my-5'
          name={t('login')}
        />
      </form>
      <Button
        type='button'
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
      <p className='text-center mt-4 text-gray-400'>
        {t('dontHaveAccount')}
        <span
          onClick={() => setIsOpen(true)}
          className='text-blue-600 ml-1 cursor-pointer'
        >
          {t('registered')}
        </span>
      </p>
    </div>
  );
};

export default Login;
