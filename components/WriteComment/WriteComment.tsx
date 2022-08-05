import React from 'react';

const WriteComment = () => {
  return (
    <div className='flex items-center mt-3'>
      <div className='w-7 h-7 bg-green-400 rounded-full' />
      <input
        className='bg-lightBlue w-full rounded-md p-2 ml-4'
        type='text'
        placeholder='Write a comment'
      />
    </div>
  );
};

export default WriteComment;
