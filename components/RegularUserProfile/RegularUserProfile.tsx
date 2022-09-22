import React from 'react';
import {
  Input,
  useRegularUserProfile,
  Button,
  RedButton,
  Modal,
  Loader,
} from 'components';
import { CheckIcon, ExclamationCircleIcon } from '@heroicons/react/solid';

import {
  handleChange,
  imagePreview,
  openFIlePicker,
  showInAvatar,
} from 'helpers';

const RegularUserProfile: React.FC = () => {
  const {
    formik,
    userDetails,
    t,
    FieldArray,
    FormikProvider,
    setFile,
    file,
    hiddenFileInput,
    editUsername,
    setEditUsername,
    editPassword,
    setEditPassword,
    removeUserEmail,
    primaryEmail,
    router,
    openEmailModal,
    setOpenEmailModal,
    makeChanges,
    setMakeChanges,
  } = useRegularUserProfile();

  if (userDetails === null || userDetails === undefined) {
    return <Loader />;
  }

  console.log(formik.errors?.secondaryEmails);

  return (
    <div className='w-[998px] relative'>
      <p className='text-white mt-10 mb-20'>{t('myProfile')}</p>

      <div className='w-[998px] flex flex-col justify-center items-start px-10  rounded-lg relative bg-darkBlue min-h-[80vh]'>
        <img
          src={showInAvatar(
            imagePreview(file as File),
            process.env.NEXT_PUBLIC_RANDOM_AVATAR,
            userDetails?.poster
          )}
          alt='avatar'
          className='w-32 h-32 rounded-full object-cover absolute -top-16 left-1/2 -translate-x-1/2'
        />
        <form
          id='update'
          encType='multipart/form-data'
          onSubmit={formik.handleSubmit}
          className='md:ml-20'
        >
          <input
            ref={hiddenFileInput}
            type='file'
            className='hidden'
            placeholder='Upload new photo'
            accept='.png, .jpg, .jpeg'
            id='poster'
            onChange={(e) => handleChange(e, setFile)}
          />
          <p
            className='text-white absolute left-1/2 top-24 -translate-x-1/2 cursor-pointer'
            onClick={() => openFIlePicker(hiddenFileInput)}
          >
            {t('uploadPhoto')}
          </p>
          <div className='mt-36'>
            <div className='relative'>
              <Input
                isLabel={true}
                id='userName'
                disabled={!editUsername}
                type='text'
                placeholder={t('namePlaceholder')}
                label={t('username')}
                name='userName'
                value={formik.values.userName}
                defaultValue={userDetails?.userName}
                onChange={formik.handleChange}
                className={`border-2 md:!w-[528px] ${
                  formik.errors.userName
                    ? 'border-red-500'
                    : formik.values.userName
                    ? 'border-green-700'
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

              {!editUsername ? (
                <p
                  onClick={() => setEditUsername(!editUsername)}
                  className={`text-white absolute ${
                    router.locale === 'en' ? '-right-12' : '-right-32'
                  } top-1/2 cursor-pointer translate-y-[20%]`}
                >
                  {t('edit')}
                </p>
              ) : (
                <p
                  onClick={() => setEditUsername(!editUsername)}
                  className={`text-white absolute ${
                    router.locale === 'en' ? '-right-16' : '-right-32'
                  } top-1/2 cursor-pointer translate-y-[20%]`}
                >
                  {t('cancel')}
                </p>
              )}
            </div>
            <div className='w-full md:!w-[528px] h-0.5 mt-10 mb-8 bg-gray-700' />

            <div className='relative mb-5'>
              <Input
                isLabel={true}
                id='email'
                type='email'
                placeholder={t('emailPlaceholder')}
                label={t('email')}
                name='email'
                disabled={true}
                onChange={formik.handleChange}
                value={formik.values.email}
                className={`border-2 md:!w-[528px] ${
                  formik.errors.email
                    ? 'border-red-500 bg-red-900'
                    : formik.values.email
                    ? 'border-green-700 bg-darkGreen  text-white'
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
              <p
                className={`text-white absolute ${
                  router.locale === 'en' ? '-right-32' : '-right-48'
                }  top-1/2 cursor-pointer translate-y-[20%]`}
              >
                {t('primary')}
              </p>
            </div>
            {userDetails?.secondaryEmails.map((email, index) => (
              <div key={index} className='relative'>
                <Input
                  disabled={true}
                  isLabel={true}
                  type='email'
                  placeholder={t('emailPlaceholder')}
                  label={t('email')}
                  name={`secondaryEmails.${index}.secondaryEmail`}
                  onChange={formik.handleChange}
                  defaultValue={email.secondaryEmail}
                  className={`border-2 md:!w-[528px] ${'border-inputYellow  bg-inputYellow text-white'}`}
                />

                <ExclamationCircleIcon className='w-6 h-6 absolute text-yellow-700 right-2 top-[58%]' />

                {email.isVerified && (
                  <div
                    className={`absolute ${
                      router.locale === 'en' ? '-right-48' : '-right-56'
                    } flex top-1/2 cursor-pointer translate-y-[20%]`}
                  >
                    <p
                      onClick={() => primaryEmail(email.secondaryEmail)}
                      className='text-white '
                    >
                      {t('makePrimary')}
                    </p>

                    <p
                      onClick={() => removeUserEmail(email.secondaryEmail)}
                      className='text-white ml-2'
                    >
                      {t('remove')}
                    </p>
                  </div>
                )}
                {!email.isVerified && (
                  <div
                    className={`absolute ${
                      router.locale === 'en' ? '-right-44' : '-right-[250px]'
                    } flex top-1/2 cursor-pointer translate-y-[20%]`}
                  >
                    <p className='text-white'>{t('notVerified')}</p>

                    <p
                      onClick={() => removeUserEmail(email.secondaryEmail)}
                      className='text-white ml-2'
                    >
                      {t('remove')}
                    </p>
                  </div>
                )}
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
                                      if (
                                        formik.errors?.secondaryEmails
                                          ?.length !== 0 &&
                                        formik.values.secondaryEmails[index]
                                          .secondaryEmail
                                      ) {
                                        setMakeChanges(true);
                                      }
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
                      hadIcon={true}
                      icon='plus'
                      onClick={() => {
                        arrayHelpers.push({ secondaryEmail: '' });
                        setOpenEmailModal(true);
                      }}
                      className='w-[191px] py-2 mt-10'
                      name='Add new email'
                    />
                  </>
                )}
              />
            </FormikProvider>

            <div className='w-full md:w-96 h-0.5 mt-10 mb-8 bg-gray-700' />

            <div className='relative'>
              <Input
                isLabel={true}
                disabled={true}
                id='oldPassword'
                type='password'
                placeholder={t('passwordPlaceholder')}
                label={t('password')}
                name='testPassword'
                onChange={formik.handleChange}
                value='password'
                defaultValue='password'
                className='md:!w-[528px]'
              />

              <p
                onClick={() => setEditPassword(!editPassword)}
                className={`text-white absolute ${
                  router.locale === 'en' ? '-right-12' : '-right-32'
                }  top-1/2 cursor-pointer translate-y-[20%]`}
              >
                {t('edit')}
              </p>
            </div>

            {editPassword && (
              <>
                <div className='border-[1px] flex flex-col justify-center mt-10 border-gray-500 rounded-lg p-5'>
                  <p className='text-white'>{t('passwordsContain')}</p>
                  <ul className='p-5'>
                    <li className='text-gray-400 mb-2 list-disc'>
                      {t('eightChars')}
                    </li>
                    <li className='text-white list-disc'>{t('lowerChars')}</li>
                  </ul>
                </div>
                <div className='relative my-10'>
                  <Input
                    isLabel={true}
                    id='password'
                    type='password'
                    placeholder={t('passwordPlaceholder')}
                    label={t('password')}
                    name='password'
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    className={`border-2 md:!w-[528px] ${
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
                  <p className='text-red-500 mt-1'>
                    {t(formik.errors.password)}
                  </p>
                )}
                <div className='relative'>
                  <Input
                    isLabel={true}
                    id='repeatPassword'
                    type='password'
                    placeholder={t('repeatPassword')}
                    label={t('repeatPassword')}
                    name='oldPassword'
                    onChange={formik.handleChange}
                    value={formik.values.oldPassword}
                    className={`border-2 md:!w-[528px] ${
                      formik.errors.oldPassword
                        ? 'border-red-500'
                        : formik.values.oldPassword
                        ? 'border-green-500'
                        : ''
                    }`}
                  />
                  {!formik.errors.oldPassword &&
                  formik.values.oldPassword !== '' ? (
                    <CheckIcon className='w-6 h-6 absolute text-green-500 right-2 top-[58%]' />
                  ) : formik.values.oldPassword ? (
                    <ExclamationCircleIcon className='w-6 h-6 absolute text-red-500 right-2 top-[58%]' />
                  ) : (
                    ''
                  )}
                </div>
                {formik.errors.oldPassword && (
                  <p className='text-red-500 mt-1'>
                    {t(formik.errors.oldPassword)}
                  </p>
                )}
              </>
            )}
          </div>
        </form>
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

      {editUsername || editPassword ? (
        <div className='mt-7 flex absolute -right-0 space-x-3 items-center'>
          <div className='flex space-x-3'>
            <Button
              onClick={() => {
                setEditUsername(false);
                setEditPassword(false);
              }}
              className='text-white'
              name={t('cancel')}
            />
            <RedButton
              form='update'
              type='submit'
              className='text-white'
              name={t('submit')}
            />
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default RegularUserProfile;
