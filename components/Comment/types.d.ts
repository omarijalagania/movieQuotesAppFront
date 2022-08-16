interface CommentProps {
  comment: {
    userId: string;
    comment: string;
    _id: string;
  };
  quote: { _id: string; userId: string; quoteId: string; comment: string };
  key: string;
}

export default CommentProps;

export interface UserProps {
  userName: string;
}
