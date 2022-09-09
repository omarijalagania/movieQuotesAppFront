import { SetStateAction } from 'react';
import { addLikeHandler, removeLikeHandler } from 'services';
import { ItemProps } from 'types';

export const addLike = async (
  quoteId: string,
  userId: string,
  setIsLiked: { (value: SetStateAction<boolean>): void; (arg0: boolean): void }
) => {
  const data = {
    quoteId: quoteId,
    userId: userId,
  };
  const response = await addLikeHandler(data);
  if (response.status === 200) {
    setIsLiked(true);
  }
};

export const removeLike = async (
  quoteId: string,
  userId: string,
  setIsLiked: { (value: SetStateAction<boolean>): void; (arg0: boolean): void }
) => {
  const data = {
    quoteId: quoteId,
    userId: userId,
  };
  const response = await removeLikeHandler(data);
  if (response.status === 200) {
    setIsLiked(false);
  }
};

export const avatarImageUrl = (item: ItemProps) => {
  return item?.user[0]?.provider === 'email'
    ? item?.user[0]?.poster
      ? process.env.NEXT_PUBLIC_BACKEND_URL + '/' + item?.user[0]?.poster
      : process.env.NEXT_PUBLIC_RANDOM_AVATAR
    : process.env.NEXT_PUBLIC_BACKEND_URL + '/' + item?.user[0]?.poster;
};
