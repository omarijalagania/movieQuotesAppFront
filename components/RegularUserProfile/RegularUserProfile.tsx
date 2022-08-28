import React from 'react';
import { Input, useRegularUserProfile, Button, RedButton } from 'components';
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
  } = useRegularUserProfile();

  return (
    <div className='w-[750px] relative'>
      <p className='text-white mt-5 mb-20'>My profile</p>

      <div className='w-[800px] flex flex-col justify-center items-start px-10  rounded-lg relative bg-darkBlue min-h-[80vh]'>
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
            Upload photo
          </p>
          <div className='mt-36'>
            <div className='relative'>
              <Input
                isLabel={true}
                id='userName'
                disabled={!editUsername}
                type='text'
                placeholder={t('namePlaceholder')}
                label='Username'
                name='userName'
                value={formik.values.userName}
                defaultValue={userDetails?.userName}
                onChange={formik.handleChange}
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
              <p
                onClick={() => setEditUsername(!editUsername)}
                className='text-white absolute -right-12 top-1/2 cursor-pointer translate-y-[20%]'
              >
                Edit
              </p>
            </div>
            <div className='w-full md:w-96 h-0.5 mt-10 mb-8 bg-gray-700' />

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
                className={`border-2 ${
                  formik.errors.email //|| error
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
              <p className='text-white absolute -right-32 top-1/2 cursor-pointer translate-y-[20%]'>
                Primary email
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
                  className={`border-2 ${
                    //|| error
                    'border-inputYellow  bg-inputYellow text-white'
                  }`}
                />

                <ExclamationCircleIcon className='w-6 h-6 absolute text-yellow-700 right-2 top-[58%]' />

                <div className='absolute -right-44 flex top-1/2 cursor-pointer translate-y-[20%]'>
                  {email.isVerified ? (
                    <p
                      onClick={() => primaryEmail(email.secondaryEmail)}
                      className='text-white'
                    >
                      Make primary
                    </p>
                  ) : (
                    <p className='text-white'>Not verified</p>
                  )}

                  <p
                    onClick={() => removeUserEmail(email.secondaryEmail)}
                    className='text-white ml-2'
                  >
                    Remove
                  </p>
                </div>
              </div>
            ))}
            <FormikProvider value={formik}>
              <FieldArray
                name='secondaryEmails'
                render={(arrayHelpers) => (
                  <>
                    {formik?.values?.secondaryEmails.length !== 0 ? (
                      formik?.values?.secondaryEmails.map(
                        (_email: any, index: any) => (
                          <div key={index} className='relative'>
                            <Input
                              isLabel={true}
                              type='email'
                              id={`secondaryEmails.${index}.secondaryEmail`}
                              placeholder={t('emailPlaceholder')}
                              label={t('email')}
                              name={`secondaryEmails.${index}.secondaryEmail`}
                              onChange={formik.handleChange}
                              value={
                                formik.values.secondaryEmails[index]
                                  .secondaryEmail
                              }
                              className={`border-2 ${
                                formik.errors?.secondaryEmails //|| error
                                  ? 'border-red-500 '
                                  : formik.values.secondaryEmails[index]
                                      .secondaryEmail
                                  ? 'border-green-500  '
                                  : ''
                              }`}
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
                            <div className='absolute -right-56 flex top-1/2 cursor-pointer translate-y-[20%]'>
                              <p className='text-white'>Make this primary</p>
                              <p
                                onClick={() => arrayHelpers.remove(index)}
                                className='text-white ml-2'
                              >
                                Remove
                              </p>
                            </div>
                          </div>
                        )
                      )
                    ) : (
                      <></>
                    )}
                    <Button
                      type='button'
                      onClick={() => arrayHelpers.push({ secondaryEmail: '' })}
                      className='mt-10'
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
                disabled={!editPassword}
                id='oldPassword'
                type='password'
                placeholder={t('passwordPlaceholder')}
                label={t('password')}
                name='oldPassword'
                onChange={formik.handleChange}
                defaultValue={userDetails?.password}
                className={`border-2 ${
                  formik.errors.password
                    ? 'border-red-500'
                    : formik.values.password
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
              <p
                onClick={() => setEditPassword(!editPassword)}
                className='text-white absolute -right-12 top-1/2 cursor-pointer translate-y-[20%]'
              >
                Edit
              </p>
            </div>
            {formik.errors.oldPassword && (
              <p className='text-red-500 mt-1'>
                {t(formik.errors.oldPassword)}
              </p>
            )}
            {editPassword && (
              <>
                <div className='border-[1px] flex flex-col justify-center mt-10 border-gray-500 rounded-lg p-5'>
                  <p className='text-white'>Passwords should contain:</p>
                  <ul className='p-5'>
                    <li className='text-gray-400 mb-2 list-disc'>
                      8 or more characters
                    </li>
                    <li className='text-white list-disc'>
                      15 lowercase character
                    </li>
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
              </>
            )}
          </div>
        </form>
      </div>

      <div className='mt-7 flex absolute -right-10 space-x-3 items-center'>
        <div className='flex space-x-3'>
          <Button className='text-white' name='Cancel' />
          <RedButton
            form='update'
            type='submit'
            className='text-white'
            name='submit'
          />
        </div>
      </div>
    </div>
  );
};

export default RegularUserProfile;
