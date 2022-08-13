import React, { useState } from 'react';
import { AnnotationIcon, HeartIcon } from '@heroicons/react/outline';
import { DotsHorizontalIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import { EditQuote, Modal } from 'components';

const QuoteMovieDetails = ({ item }: any) => {
  const [openEditQUoteDialog, setOpenEditQUoteDialog] = useState(false);

  return (
    <div className='bg-darkBlue rounded-md p-5 mt-10 relative'>
      <DotsHorizontalIcon
        onClick={() => setOpenEditQUoteDialog(true)}
        className='w-5 h-5 cursor-pointer text-white absolute right-3'
      />

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
          <p className='pr-2'>1</p>
          <AnnotationIcon className='w-6 h-6' />
        </div>
        <div className='flex'>
          <p className='pr-2'>3</p>
          <HeartIcon className='w-6 h-6' />
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
