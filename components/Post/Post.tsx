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
  UserProps,
  avatarImageUrl,
} from 'components';
import { addNotificationHandler } from 'services';
import { CommentProp } from 'types';

const Post: React.FC<Props> = ({ item, setGetLike }) => {
  const { isLiked, socket, userId, setIsLiked, router } = usePost(
    item,
    setGetLike
  );

  return (
    <div className='bg-darkBlue !p-5 text-white md:w-[938px] mx-auto  rounded-md mt-5'>
      <div className='flex  items-center'>
        <img
          className='w-14 h-14 object-cover rounded-full'
          src={avatarImageUrl(item)}
          alt='avatar'
        />
        {item?.user?.map((user: UserProps) => (
          <h3 key={user._id} className='ml-2 text-xl'>
            {user?.userName}
          </h3>
        ))}
      </div>
      <h4 className='mt-3 text-xl italic'>{`${
        router.locale === 'en'
          ? "'" + item.quoteNameEng + "'"
          : "'" + item.quoteNameGe + "'"
      } - ${
        router.locale === 'en'
          ? item.movie[0]?.movieNameEn
          : item.movie[0]?.movieNameGe
      }`}</h4>
      <div className='mt-6'>
        <Image
          width={1100}
          height={600}
          src={process.env.NEXT_PUBLIC_BACKEND_URL + '/' + item.poster}
          alt='children'
        />
      </div>
      <div className='flex !py-3 mb-3 border-b-[1px] border-gray-600 space-x-3'>
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
