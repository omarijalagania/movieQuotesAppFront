import React from 'react';
import {
  Input,
  useRegularUserProfile,
  Button,
  RedButton,
  handleChange,
  imagePreview,
  openFIlePicker,
} from 'components';
import { CheckIcon, ExclamationCircleIcon } from '@heroicons/react/solid';

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
  } = useRegularUserProfile();
  return (
    <div className='w-[750px]'>
      <p className='text-white mt-5 mb-20'>My profile</p>

      <div className='w-[800px] flex flex-col justify-center items-start px-10  rounded-lg relative bg-darkBlue min-h-[80vh]'>
        <img
          src={
            userDetails?.image ? userDetails.image : imagePreview(file as File)
          }
          alt=''
          className='w-32 h-32 bg-orange-400 rounded-full object-cover absolute -top-16 left-1/2 -translate-x-1/2'
        />
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
        <form onSubmit={formik.handleSubmit} className='mt-20'>
          <div className='relative'>
            <Input
              isLabel={true}
              id='userName'
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
          <FormikProvider value={formik}>
            <FieldArray
              name='secondaryEmails'
              render={(arrayHelpers) => (
                <>
                  {formik.values.secondaryEmails.map((email, index) => (
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
                          formik.values.secondaryEmails[index].secondaryEmail
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
                      formik.values.secondaryEmails[index].secondaryEmail !==
                        '' ? (
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
                  ))}
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

          {/* {error ? (
          <p className='text-red-500 mt-1'>{t(error)}</p>
        ) : formik.errors.email ? (
          <p className='text-red-500 mt-1'>{t(formik.errors.email)}</p>
        ) : (
          ''
        )} */}
          <RedButton name='submit' />
        </form>
      </div>
    </div>
  );
};

export default RegularUserProfile;
