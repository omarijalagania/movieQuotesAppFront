import React from 'react';

const Comment = ({ comment }: any) => {
  return (
    <div>
      <div className='flex items-center mb-2'>
        <div className='w-7 h-7 rounded-full bg-yellow-600' />
        <p className='ml-4'>Sirius Black</p>
      </div>

      <p className='ml-11 border-b-[1px] pb-5 border-gray-400 text-sm'>
        {comment.comment}
      </p>
    </div>
  );
};

export default Comment;
