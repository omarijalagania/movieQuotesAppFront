import React from 'react';
import { useComment } from 'components';
import { SingleCommentProps } from 'types';

const Comment: React.FC<SingleCommentProps> = ({ comment }) => {
  const { user } = useComment(comment);

  return (
    <div>
      <div className='flex items-center mb-2'>
        <div className='w-7 h-7 rounded-full bg-yellow-600' />
        <p className='ml-4'>{user?.userName}</p>
      </div>

      <p className='ml-11 border-b-[1px] pb-5 border-gray-400 text-sm'>
        {comment.comment}
      </p>
    </div>
  );
};

export default Comment;
