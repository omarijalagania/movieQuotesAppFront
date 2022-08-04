import React from 'react';

const Comment = () => {
  return (
    <div>
      <div className='flex items-center mb-2'>
        <div className='w-7 h-7 rounded-full bg-yellow-600' />
        <p className='ml-4'>Sirius Black</p>
      </div>

      <p className='ml-11 border-b-[1px] pb-5 border-gray-400 text-sm'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        nunc vel massa facilisis consequat elit morbi convallis convallis.
        Volutpat vitae et nisl et. Adipiscing enim integer mi leo nisl. Arcu
        vitae mauris odio eget.
      </p>
    </div>
  );
};

export default Comment;
