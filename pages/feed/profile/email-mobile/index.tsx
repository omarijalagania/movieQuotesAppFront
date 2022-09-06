import React from 'react';
import {
  useRegularUserProfile,
  Input,
  Button,
  Modal,
  RedButton,
} from 'components';
import {
  ArrowLeftIcon,
  CheckIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/solid';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const EmailMobile = () => {
  const {
    router,
    formik,
    primaryEmail,
    userDetails,
    removeUserEmail,
    t,
    FormikProvider,
    FieldArray,
    openEmailModal,
    setOpenEmailModal,
    makeChanges,
    setMakeChanges,
  } = useRegularUserProfile();
  return (
    <div className='relative mx-auto'>
      <ArrowLeftIcon
        onClick={() => router.push('/feed/profile')}
        className='w-6 h-6 text-gray-400 mb-3 cursor-pointer'
      />
      <div className='w-[350px] flex flex-col  items-center rounded-lg relative bg-lightBlue h-screen'>
        <div id='update' className='w-[300px]'>
          <div className='relative mt-10 mb-5'>
            <Input
              isLabel={true}
              id='email'
              type='email'
              placeholder={t('emailPlaceholder')}
              label='PRIMARY EMAIL'
              name='email'
              disabled={true}
              onChange={formik.handleChange}
              value={formik.values.email}
              className={`border-2 ${
                formik.errors.email
                  ? 'border-red-500 bg-red-900'
                  : formik.values.email
                  ? 'border-green-500 bg-green-900 text-white'
                  : ''
              }`}
            />
            {!formik.errors.email && formik.values.email !== '' ? (
              <CheckIcon className='w-6 h-6 absolute text-green-500 right-2 top-[58%]' />
            ) : formik.values.email ? (
              <ExclamationCircleIcon className='w-6 h-6 absolute text-red-500 right-2 top-[58%]' />
            ) : (
              ''
            )}
          </div>
          <div className='w-full h-0.5 mt-5 mb-7 bg-gray-600' />
          {userDetails?.secondaryEmails.map((email, index) => (
            <div key={index} className='relative'>
              <Input
                disabled={true}
                isLabel={false}
                type='email'
                placeholder={t('emailPlaceholder')}
                label={t('email')}
                name={`secondaryEmails.${index}.secondaryEmail`}
                onChange={formik.handleChange}
                defaultValue={email.secondaryEmail}
                className='border-none bg-transparent text-white'
              />

              <div className='flex justify-between items-center'>
                {email.isVerified ? (
                  <Button
                    name='Make primary'
                    onClick={() => primaryEmail(email.secondaryEmail)}
                    className='text-white'
                  />
                ) : (
                  <p className='text-white'>Not verified</p>
                )}

                <p
                  onClick={() => removeUserEmail(email.secondaryEmail)}
                  className='text-white ml-2 cursor-pointer'
                >
                  Remove
                </p>
              </div>
              <div className='w-full h-0.5 mt-5 mb-5 bg-gray-600' />
            </div>
          ))}
          <FormikProvider value={formik}>
            <FieldArray
              name='secondaryEmails'
              render={(arrayHelpers) => (
                <>
                  {formik?.values?.secondaryEmails.length !== 0 ? (
                    formik?.values?.secondaryEmails.map(
                      (_email: string, index: number) => (
                        <div key={index}>
                          <Modal
                            classes='!items-start !mt-24'
                            open={openEmailModal}
                            setOpen={setOpenEmailModal}
                          >
                            <div>
                              <div className='relative mb-20'>
                                <Input
                                  isLabel={true}
                                  type='email'
                                  id={`secondaryEmails.${index}.secondaryEmail`}
                                  placeholder={t('emailPlaceholder')}
                                  label='Add new email'
                                  name={`secondaryEmails.${index}.secondaryEmail`}
                                  onChange={formik.handleChange}
                                  value={
                                    formik.values.secondaryEmails[index]
                                      .secondaryEmail
                                  }
                                  className='border-none   w-[330px] '
                                />
                                {!formik.errors.secondaryEmails &&
                                formik.values.secondaryEmails[index]
                                  .secondaryEmail !== '' ? (
                                  <CheckIcon className='w-6 h-6 absolute text-green-500 right-2 top-[58%]' />
                                ) : formik.values.secondaryEmails[index]
                                    .secondaryEmail ? (
                                  <ExclamationCircleIcon className='w-6 h-6 absolute text-red-500 right-2 top-[58%]' />
                                ) : (
                                  ''
                                )}
                              </div>
                              <div className='flex justify-between items-center'>
                                <p
                                  onClick={() => setOpenEmailModal(false)}
                                  className='text-white cursor-pointer'
                                >
                                  Cancel
                                </p>
                                <RedButton
                                  onClick={() => {
                                    setMakeChanges(true);
                                  }}
                                  className='text-white'
                                  name='Add'
                                />
                              </div>
                            </div>
                          </Modal>
                        </div>
                      )
                    )
                  ) : (
                    <></>
                  )}
                  <Button
                    type='button'
                    onClick={() => {
                      arrayHelpers.push({ secondaryEmail: '' });
                      setOpenEmailModal(true);
                    }}
                    className='w-full mt-10'
                    name='Add'
                  />
                </>
              )}
            />
          </FormikProvider>
        </div>
        <Modal
          classes='!items-start !mt-24'
          open={makeChanges}
          setOpen={setMakeChanges}
        >
          <div className='flex flex-col mt-4 w-[330px] justify-between items-center'>
            <p className='text-white'>Are you sure to make changes ?</p>
            <div className='w-full h-0.5 mt-10 mb-8 bg-gray-700' />
            <div className='flex justify-between w-[330px] items-center'>
              <p
                onClick={() => setMakeChanges(false)}
                className='text-white cursor-pointer'
              >
                Cancel
              </p>
              <RedButton
                className='text-white'
                onClick={() => {
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

export default EmailMobile;

export async function getStaticProps(context: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(context.locale ?? 'en', ['common'])),
    },
  };
}
