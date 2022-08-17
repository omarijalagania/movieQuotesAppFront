import React from 'react';
import Image from 'next/image';
import { HeartIcon, AnnotationIcon } from '@heroicons/react/outline';
import { HeartIcon as HeartIconFull } from '@heroicons/react/solid';
import {
  Comment,
  WriteComment,
  addLike,
  removeLike,
  usePost,
  Props,
  CommentProp,
  UserProps,
} from 'components';
import { addNotificationHandler } from 'services';

const Post: React.FC<Props> = ({ item, setGetLike }) => {
  const { isLiked, socket, userId, setIsLiked } = usePost(item, setGetLike);
  return (
    <div className='bg-darkBlue p-5 text-white md:w-[90%] rounded-md mt-5'>
      <div className='flex  items-center'>
        <div className='w-10 h-10 rounded-full bg-green-300' />
        {item?.user?.map((user: UserProps) => (
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
          <p className='pr-2'>{item.comments.length}</p>
          <AnnotationIcon className='w-6 h-6' />
        </div>
        <div className='flex'>
          <p className='pr-2'>{item.likes.length}</p>
          {isLiked ? (
            <HeartIconFull
              onClick={() => {
                removeLike(item._id, userId, setIsLiked);
                socket?.emit('like', {
                  whoLikes: userId,
                  quoteId: item._id,
                  receiver: item.userId,
                });
              }}
              className='w-6 cursor-pointer text-red-500 h-6'
            />
          ) : (
            <HeartIcon
              onClick={() => {
                addLike(item._id, userId, setIsLiked);

                socket?.emit('like', {
                  whoLikes: userId,
                  quoteId: item?._id,
                  receiver: item?.userId,
                });
                socket?.emit('notificationLike', {
                  userId: item?.userId,
                });
                const dataNotification = {
                  userId: userId,
                  notificationType: 'liked',
                  isRead: false,
                  notificationFor: item.userId,
                };
                console.log(item?.userId);
                addNotificationHandler(dataNotification);
              }}
              className='w-6 cursor-pointer h-6'
            />
          )}
        </div>
      </div>
      {item.comments.map((comment: CommentProp) => (
        <Comment key={comment._id} comment={comment} />
      ))}

      <WriteComment item={item} />
    </div>
  );
};

export default Post;
