import { useEffect, useState } from 'react';
import { getUserByIdHandler } from 'services';
import { UserProps, CommentProp } from 'components';

const useComment = (comment: CommentProp) => {
  const [user, setUser] = useState<UserProps>();

  useEffect(() => {
    const getUserById = async () => {
      const response = await getUserByIdHandler(comment.userId);
      setUser(response.data);
    };
    getUserById();
  }, [comment.userId]);
  return { user };
};

export default useComment;
