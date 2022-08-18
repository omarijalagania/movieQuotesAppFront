import React from 'react';
import { useComment } from 'components';
import { SingleCommentProps } from 'types';

const Comment: React.FC<SingleCommentProps> = ({ comment }) => {
  const { user } = useComment(comment);

  console.log(user);

  return (
    <div>
      <div className='flex items-center mb-2'>
        <img
          className='w-8 h-8 rounded-full'
          src={user?.image ? user?.image : 'https://i.pravatar.cc/50'}
          alt='avatar'
        />
        <p className='ml-4'>{user?.userName}</p>
      </div>

      <p className='ml-11 border-b-[1px] pb-5 border-gray-400 text-sm'>
        {comment.comment}
      </p>
    </div>
  );
};

export default Comment;
