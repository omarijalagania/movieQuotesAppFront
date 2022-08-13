import React, { useEffect, useState } from 'react';
import { getUserByIdHandler } from 'services';

const Comment = ({ comment }: any) => {
  const [user, setUser] = useState({} as any);

  useEffect(() => {
    const getUserById = async () => {
      const response = await getUserByIdHandler(comment.userId);
      setUser(response.data);
    };
    getUserById();
  }, [comment.userId]);

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
