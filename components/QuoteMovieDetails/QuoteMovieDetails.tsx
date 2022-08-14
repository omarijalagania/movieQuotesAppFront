import React, { useState, useEffect } from 'react';
import { AnnotationIcon, HeartIcon } from '@heroicons/react/outline';
import {
  DotsHorizontalIcon,
  HeartIcon as HeartIconFull,
} from '@heroicons/react/solid';
import Image from 'next/image';
import { EditQuote, Modal, addLike, removeLike, useHeader } from 'components';
import { Menu } from '@headlessui/react';
import { deleteQuoteHandler } from 'services';
import { toast } from 'react-toastify';

const QuoteMovieDetails = ({ item }: any) => {
  const [openEditQUoteDialog, setOpenEditQUoteDialog] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const { userId } = useHeader();
  const deleteQuote = async () => {
    const response = await deleteQuoteHandler(item._id);
    if (response.status === 200) {
      toast.success('Quote deleted successfully');
    }
  };

  useEffect(() => {
    item.likes.forEach((like: any) => {
      if (like === userId) {
        setIsLiked(true);
      }
    });
  }, [item.likes, item.userId, userId]);

  return (
    <div className='bg-darkBlue rounded-md p-5 mt-10 relative'>
      <div className='absolute  right-0'>
        <Menu>
          {({ open }) => (
            <>
              <Menu.Button>
                <DotsHorizontalIcon className='w-5 h-5 cursor-pointer text-white absolute -top-1 right-3' />
              </Menu.Button>
              {open && (
                <div className='bg-lightBlue p-10'>
                  <Menu.Items>
                    <Menu.Item>
                      {({}) => (
                        <div
                          className='mb-3'
                          onClick={() => setOpenEditQUoteDialog(true)}
                        >
                          View Post
                        </div>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({}) => (
                        <div
                          className='mb-3'
                          onClick={() => setOpenEditQUoteDialog(true)}
                        >
                          Edit Quote
                        </div>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({}) => <div onClick={deleteQuote}>Delete Quote</div>}
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
      <div className='flex py-3 mb-4 border-t-[1px] mt-4 border-gray-500 space-x-3'>
        <div className='flex'>
          <p className='pr-2'>{item.comments.length}</p>
          <AnnotationIcon className='w-6 h-6' />
        </div>
        <div className='flex'>
          <p className='pr-2'>{item.likes.length}</p>
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
          <Modal open={openEditQUoteDialog} setOpen={setOpenEditQUoteDialog}>
            <EditQuote item={item} />
          </Modal>
        )}
      </div>
    </div>
  );
};

export default QuoteMovieDetails;
