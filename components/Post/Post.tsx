import React from 'react';
import Image from 'next/image';
import { HeartIcon, AnnotationIcon } from '@heroicons/react/outline';
const Post = () => {
  return (
    <div className='bg-darkBlue p-5 text-white w-[78%] rounded-md mt-5'>
      <div className='flex  items-center'>
        <div className='w-10 h-10 rounded-full bg-green-300' />
        <h3 className='ml-2'>Bilbo Baggins</h3>
      </div>
      <h4 className='mt-3'>“Follow your dream.”movie- Billy Elliot. (2000)“</h4>
      <div className='mt-6'>
        <Image
          width={900}
          height={500}
          src='/assets/children.png'
          alt='children'
        />
      </div>
      <div className='flex py-3 border-b-[1px] border-gray-400 space-x-3'>
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

export default Post;
