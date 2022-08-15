import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { HeartIcon, AnnotationIcon } from '@heroicons/react/outline';
import { HeartIcon as HeartIconFull } from '@heroicons/react/solid';
import {
  Comment,
  WriteComment,
  useHeader,
  addLike,
  removeLike,
} from 'components';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, savePostItem } from 'state';
import { addNotificationHandler } from 'services';

const Post = ({ item, setGetLike }: any) => {
  const dispatch = useDispatch();
  const [isLiked, setIsLiked] = useState(false);
  const { userId } = useHeader();
  const socket = useSelector((state: RootState) => state.quotes.socket);
  useEffect(() => {
    dispatch(savePostItem(item));
  }, [dispatch, item]);

  useEffect(() => {
    item.likes.forEach((like: any) => {
      if (like === userId) {
        setIsLiked(true);
      }
    });
  }, [item.likes, item.userId, userId]);

  useEffect(() => {
    socket?.on('gotLike', (gotLike: any) => {
      setGetLike(gotLike);
    });
  }, [setGetLike, socket]);

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
                const data = {
                  userId: userId,
                  notificationType: 'liked',
                  isRead: false,
                  notificationFor: item.userId,
                };
                addNotificationHandler(data);
                socket?.emit('like', {
                  whoLikes: userId,
                  quoteId: item._id,
                  receiver: item.userId,
                });
              }}
              className='w-6 cursor-pointer h-6'
            />
          )}
        </div>
      </div>
      {item.comments.map((comment: { _id: React.Key | null | undefined }) => (
        <Comment key={comment._id} comment={comment} />
      ))}
      <WriteComment item={item} />
    </div>
  );
};

export default Post;
