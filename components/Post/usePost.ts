import { useHeader, ItemProps } from 'components';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, saveLikeNotification, savePostItem } from 'state';

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
  const { userId } = useHeader();
  const socket = useSelector((state: RootState) => state.quotes.socket);

  useEffect(() => {
    dispatch(savePostItem(item));
  }, [dispatch, item]);

  useEffect(() => {
    item.likes.forEach((like) => {
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
  }, [dispatch, setGetLike, socket]);

  useEffect(() => {
    socket?.on('gotNotificationLike', (data: any) => {
      dispatch(saveLikeNotification(data));
    });
  }, [dispatch, socket]);

  return {
    isLiked,
    userId,
    socket,
    setIsLiked,
  };
};

export default usePost;
