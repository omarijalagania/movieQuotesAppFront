import React from 'react';
import Image from 'next/image';
import { HeartIcon, AnnotationIcon } from '@heroicons/react/outline';
import { Comment, WriteComment } from 'components';

const Post = ({ item }: any) => {
  console.log(item);

  return (
    <div className='bg-darkBlue p-5 text-white md:w-[90%] rounded-md mt-5'>
      <div className='flex  items-center'>
        <div className='w-10 h-10 rounded-full bg-green-300' />
        {item?.user?.map((user: any) => (
          <h3 key={user._id} className='ml-2'>
            {user.userName}
          </h3>
        ))}
      </div>
      <h4 className='mt-3'>{item.quoteNameEng}</h4>
      <div className='mt-6'>
        <Image
          width={900}
          height={500}
          src={process.env.NEXT_PUBLIC_BACKEND_URL + '/' + item.poster}
          alt='children'
        />
      </div>
      <div className='flex py-3 mb-3 border-b-[1px] border-gray-400 space-x-3'>
        <div className='flex'>
          <p className='pr-2'>1</p>
          <AnnotationIcon className='w-6 h-6' />
        </div>
        <div className='flex'>
          <p className='pr-2'>3</p>
          <HeartIcon className='w-6 h-6' />
        </div>
      </div>
      <Comment />
      <WriteComment />
    </div>
  );
};

export default Post;
