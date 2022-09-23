import React from 'react';
import { AnnotationIcon, HeartIcon } from '@heroicons/react/outline';
import {
  DotsHorizontalIcon,
  HeartIcon as HeartIconFull,
  EyeIcon,
  PencilIcon,
  TrashIcon,
} from '@heroicons/react/solid';
import Image from 'next/image';
import {
  EditQuote,
  Modal,
  addLike,
  removeLike,
  useQuoteMovieDetails,
} from 'components';
import { Menu } from '@headlessui/react';

import { QuotePropsItem } from 'types';

const QuoteMovieDetails: React.FC<QuotePropsItem> = ({ item }) => {
  const {
    openEditQUoteDialog,
    setOpenEditQUoteDialog,
    isLiked,
    setIsLiked,
    deleteQuote,
    userId,
    t,
  } = useQuoteMovieDetails(item);

  return (
    <div className='bg-darkBlue md:!w-[809px] rounded-md !p-5 mt-10 relative'>
      <div className='absolute right-0'>
        <Menu>
          {({ open }) => (
            <>
              <Menu.Button>
                <DotsHorizontalIcon className='w-5 h-5 cursor-pointer text-white absolute -top-1 right-3' />
              </Menu.Button>
              {open && (
                <div className='bg-lightBlue rounded-md z-50 outline-none !pl-5 !pr-10 !py-5'>
                  <Menu.Items>
                    <Menu.Item>
                      {({}) => (
                        <div
                          className='mb-7 flex space-x-2 cursor-pointer'
                          onClick={() => setOpenEditQUoteDialog(true)}
                        >
                          <EyeIcon className='w-6 h-6' />
                          <p>{t('viewPost')}</p>
                        </div>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({}) => (
                        <div
                          className='mb-7 flex space-x-2 cursor-pointer'
                          onClick={() => setOpenEditQUoteDialog(true)}
                        >
                          <PencilIcon className='w-6 h-6' />
                          <p>{t('editPost')}</p>
                        </div>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({}) => (
                        <div
                          className='flex space-x-2 cursor-pointer'
                          onClick={deleteQuote}
                        >
                          <TrashIcon className='w-6 h-6' />
                          <p>{t('deletePost')}</p>
                        </div>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </div>
              )}
            </>
          )}
        </Menu>
      </div>
      <div className='flex items-center'>
        <Image
          width={200}
          height={100}
          src={process.env.NEXT_PUBLIC_BACKEND_URL + '/' + item.poster}
          alt='image'
        />
        <p className='ml-7 text-gray-300'>{item.quoteNameEng}</p>
      </div>
      <div className='flex !py-3 mb-4 border-t-[1px] mt-4 border-gray-500 space-x-3'>
        <div className='flex'>
          <p className='pr-2'>{item.comments.length}</p>
          <AnnotationIcon className='w-6 h-6' />
        </div>
        <div className='flex'>
          <p className='!pr-2'>{item.likes.length}</p>
          {isLiked ? (
            <HeartIconFull
              onClick={() => removeLike(item._id, userId, setIsLiked)}
              className='w-6 cursor-pointer text-red-500 h-6'
            />
          ) : (
            <HeartIcon
              onClick={() => addLike(item._id, userId, setIsLiked)}
              className='w-6 cursor-pointer h-6'
            />
          )}
        </div>
        {openEditQUoteDialog && (
          <Modal
            dialogClass='!bg-darkBlue !p-10 '
            open={openEditQUoteDialog}
            setOpen={setOpenEditQUoteDialog}
          >
            <EditQuote
              setOpenEditQUoteDialog={setOpenEditQUoteDialog}
              item={item}
            />
          </Modal>
        )}
      </div>
    </div>
  );
};

export default QuoteMovieDetails;
