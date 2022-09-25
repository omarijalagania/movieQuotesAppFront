import React from 'react';
import { useComment, UserDetails } from 'components';
import { SingleCommentProps } from 'types';
import { showAvatarPicture } from 'helpers';

const Comment: React.FC<SingleCommentProps> = ({ comment }) => {
  const { user } = useComment(comment);

  return (
    <div>
      <div className='flex items-center mb-2'>
        <img
          className='w-10 h-10 rounded-full object-cover'
          src={showAvatarPicture(user as UserDetails)}
          alt='avatar'
        />
        <p className='ml-4'>{user?.userName}</p>
      </div>

      <p className='ml-11 border-b-[1px]  !pb-5 border-gray-400 text-sm'>
        {comment.comment}
      </p>
    </div>
  );
};

export default Comment;
