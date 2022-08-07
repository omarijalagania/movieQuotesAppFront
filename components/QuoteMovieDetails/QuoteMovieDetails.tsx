import { AnnotationIcon, HeartIcon } from '@heroicons/react/outline';
import { DotsHorizontalIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import React from 'react';

const QuoteMovieDetails = () => {
  return (
    <div className='bg-darkBlue rounded-md p-5 mt-10 relative'>
      <DotsHorizontalIcon className='w-5 h-5 cursor-pointer text-white absolute right-3' />
      <div className='flex items-center'>
        <Image width={200} height={100} src='/assets/movie.png' alt='image' />
        <p className='ml-7 text-gray-300'>Here is some quote (2022)</p>
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
      </div>
    </div>
  );
};

export default QuoteMovieDetails;
