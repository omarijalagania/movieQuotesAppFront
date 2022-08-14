import { SetStateAction } from 'react';
import { addLikeHandler, removeLikeHandler } from 'services';

export const addLike = async (
  quoteId: any,
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
  quoteId: any,
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
