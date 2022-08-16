interface CommentProps {
  comment: {
    userId: string;
    comment: string;
    _id: string;
    quote: string;
  };
}

export default CommentProps;

export interface UserProps {
  userName: string;
}
