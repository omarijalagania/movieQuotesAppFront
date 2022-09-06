import React from 'react';
import { useRegularUserProfile, Input, Modal, RedButton } from 'components';
import { CheckIcon, ExclamationCircleIcon } from '@heroicons/react/solid';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const PasswordChangeMobile = () => {
  const { router, formik, t, changePasswordModal, setChangePasswordModal } =
    useRegularUserProfile();
  return (
    <div className='relative mx-auto'>
      <div className='w-[350px] flex flex-col  items-center rounded-lg relative bg-lightBlue h-screen'>
        <div id='update' className='w-[300px]'>
          <>
            <div className='border-[1px] flex flex-col justify-center mt-10 border-gray-500 rounded-lg p-5'>
              <p className='text-white'>Passwords should contain:</p>
              <ul className='p-5'>
                <li className='text-gray-400 mb-2 list-disc'>
                  8 or more characters
                </li>
                <li className='text-white list-disc'>15 lowercase character</li>
              </ul>
            </div>
            <div className='relative my-10'>
              <Input
                isLabel={true}
                id='password'
                type='password'
                placeholder={t('passwordPlaceholder')}
                label='New password'
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
              <p className='text-red-500 -mt-5'>{t(formik.errors.password)}</p>
            )}
            <div className='relative'>
              <Input
                isLabel={true}
                id='repeatPassword'
                type='password'
                placeholder={t('repeatPassword')}
                label='Confirm new password'
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
            <div className='flex mt-10 justify-between items-center'>
              <p
                onClick={() => router.push('/feed/profile')}
                className='text-white cursor-pointer'
              >
                Cancel
              </p>
              <RedButton
                onClick={() => setChangePasswordModal(true)}
                className='text-white'
                name='Add'
              />
            </div>
          </>
        </div>
        <Modal
          classes='!items-start !mt-24'
          open={changePasswordModal}
          setOpen={setChangePasswordModal}
        >
          <div className='flex flex-col mt-4 w-[330px] justify-between items-center'>
            <p className='text-white'>Are you sure to make changes ?</p>
            <div className='w-full h-0.5 mt-10 mb-8 bg-gray-700' />
            <div className='flex justify-between w-[330px] items-center'>
              <p className='text-white cursor-pointer'>Cancel</p>
              <RedButton
                className='text-white'
                onClick={() => {
                  setChangePasswordModal(false);
                  formik.handleSubmit();
                }}
                name='Confirm'
              />
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default PasswordChangeMobile;

export async function getStaticProps(context: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(context.locale ?? 'en', ['common'])),
    },
  };
}
