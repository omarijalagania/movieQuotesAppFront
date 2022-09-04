import React from 'react';
import { Input, RedButton, useGoogleProfile, Modal } from 'components';
import {
  handleChange,
  imagePreview,
  openFIlePicker,
  showInAvatar,
} from 'helpers';
import { ArrowLeftIcon } from '@heroicons/react/solid';

const MobileGoogleProfile: React.FC = () => {
  const {
    formik,
    t,
    userDetails,
    file,
    setFile,
    isEditable,
    hiddenFileInput,
    router,
    isOpenInputModal,
    isChangeNameDialogOpen,
    setIsChangeNameDialogOpen,
    setIsOpenInputModal,
    setIsConfirmDialogOpen,
    isOpenUploadModal,
    setIsOpenUploadModal,
    newName,
  } = useGoogleProfile();

  return (
    <div className='relative'>
      <ArrowLeftIcon
        onClick={() => router.push('/feed')}
        className='w-6 h-6 text-gray-400 mb-3 cursor-pointer'
      />
      <div className='w-[350px] flex flex-col  items-center rounded-lg relative bg-lightBlue h-screen'>
        <img
          src={showInAvatar(
            imagePreview(file as File),
            userDetails?.image,
            userDetails?.poster
          )}
          alt='avatar'
          className='w-32 h-32 mt-10 object-cover rounded-full'
        />
        <input
          ref={hiddenFileInput}
          type='file'
          className='hidden'
          placeholder='Upload new photo'
          accept='.png, .jpg, .jpeg'
          name='poster'
          id='poster'
          onChange={(event) => handleChange(event, setFile)}
        />
        <p
          className='text-white mt-4 mb-10 cursor-pointer'
          onClick={() => openFIlePicker(hiddenFileInput)}
        >
          Upload photo
        </p>
        <div id='update' className='w-[300px]'>
          <div className='relative'>
            <Input
              disabled={!isEditable}
              isLabel={true}
              id='userName'
              type='text'
              placeholder={t('namePlaceholder')}
              label='Username'
              name='userName'
              value={newName || formik.values.userName}
              defaultValue={userDetails?.userName}
              onChange={formik.handleChange}
              className='!border-0 !border-b-[1px] mb-10 !rounded-none border-gray-500 !outline-none bg-transparent text-white'
            />
            <p
              onClick={() => setIsOpenInputModal(true)}
              className='text-white absolute right-0 cursor-pointer top-[38%]'
            >
              Edit
            </p>
          </div>
          <div className='relative'>
            <Input
              disabled={true}
              isLabel={true}
              id='email'
              type='email'
              placeholder={t('emailPlaceholder')}
              label={t('email')}
              name='email'
              onChange={formik.handleChange}
              value={formik.values.email}
              defaultValue={userDetails?.email}
              className='!border-0 !border-b-[1px] mb-10 !rounded-none border-gray-500 !outline-none bg-transparent text-white'
            />
          </div>
        </div>
      </div>

      <Modal
        classes='!items-start !mt-24'
        open={isOpenInputModal}
        setOpen={setIsOpenInputModal}
      >
        <div className='flex  flex-col'>
          <div className='flex justify-center items-center w-[330px] h-[200px]'>
            <div>
              <label className='text-white' htmlFor='newName'>
                Enter new name
              </label>
              <input
                onChange={formik.handleChange}
                id='userName'
                className='w-[330px] mt-2 p-2'
              />
            </div>
          </div>
          <div className='flex items-center justify-between space-x-3'>
            <p
              onClick={() => setIsOpenInputModal(false)}
              className='text-white cursor-pointer'
            >
              Cancel
            </p>

            <RedButton
              onClick={() => {
                setIsChangeNameDialogOpen(true);
                setIsOpenInputModal(false);
              }}
              type='button'
              className='text-white'
              name='Add'
            />
          </div>
        </div>
      </Modal>
      <Modal
        classes='!items-start !mt-24'
        open={isChangeNameDialogOpen}
        setOpen={setIsChangeNameDialogOpen}
      >
        <div className='flex justify-between flex-col items-center w-[330px] p-2'>
          <div>
            <p className='text-white'>Are you sure to make changes ?</p>
            <div className='w-full h-0.5 mt-10 mb-8 bg-gray-700' />
          </div>
          <div className='flex mt-4 w-[330px] justify-between items-center'>
            <p
              className='text-white cursor-pointer'
              onClick={() => setIsChangeNameDialogOpen(false)}
            >
              Cancel
            </p>
            <RedButton
              className='text-white'
              onClick={() => {
                setIsConfirmDialogOpen(true);
                formik.handleSubmit();
              }}
              name='Confirm'
            />
          </div>
        </div>
      </Modal>
      <Modal
        classes='!items-start !mt-24'
        open={isOpenUploadModal}
        setOpen={setIsOpenUploadModal}
      >
        <div className='flex justify-between flex-col items-center w-[330px] p-2'>
          <div>
            <p className='text-white'>Are you sure to change avatar ?</p>
            <div className='w-full h-0.5 mt-10 mb-8 bg-gray-700' />
          </div>
          <div className='flex mt-4 w-[330px] justify-between items-center'>
            <p
              className='text-white cursor-pointer'
              onClick={() => setIsOpenUploadModal(false)}
            >
              Cancel
            </p>
            <RedButton
              className='text-white'
              onClick={() => {
                setIsConfirmDialogOpen(true);
                formik.handleSubmit();
              }}
              name='Confirm'
            />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default MobileGoogleProfile;
