import { useHeader } from 'components';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, saveLikeNotification, savePostItem } from 'state';
import { useTranslate } from 'hooks';
import { ItemProps } from 'types';

const usePost = (
  item: ItemProps,
  setGetLike: (like: {
    whoLikes: string;
    quoteId: string;
    receiver: string;
  }) => void
) => {
  const dispatch = useDispatch();
  const [isLiked, setIsLiked] = useState(false);
  const { userId, userDetails } = useHeader();
  const socket = useSelector((state: RootState) => state.quotes.socket);
  const { t, router } = useTranslate();

  useEffect(() => {
    dispatch(savePostItem(item));
  }, [dispatch, item]);

  useEffect(() => {
    item.likes.forEach((like: string) => {
      if (like === userId) {
        setIsLiked(true);
      }
    });
  }, [item.likes, item.userId, userId]);

  useEffect(() => {
    socket?.on(
      'gotLike',
      (gotLike: { whoLikes: string; quoteId: string; receiver: string }) => {
        setGetLike(gotLike);
      }
    );
    return () => {
      socket?.off('disconnect');
    };
  }, [dispatch, setGetLike, socket]);

  useEffect(() => {
    socket?.on('gotNotificationLike', (data: any) => {
      dispatch(saveLikeNotification(data));
    });
    return () => {
      socket?.off('disconnect');
    };
  }, [dispatch, socket]);

  return {
    isLiked,
    userId,
    socket,
    setIsLiked,
    userDetails,
    t,
    router,
  };
};

export default usePost;
