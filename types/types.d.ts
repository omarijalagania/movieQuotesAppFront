export type ButtonProps = {
  name: string;
  className?: string;
  onClick?: () => void;
};

export type User = {
  _id: string;
  token: string;
  email: string;
  user: {
    token: string;
    _id: string;
  };
};

export type QuoteProps = {
  _id: string;
  movie: string;
  poster: string;
  quoteNameEng: string;
  quoteNameGe: string;
  userId: string;
  comments: Array<{
    _id: string;
    comment: string;
    quoteId: string;
    userId: string;
  }>;
  user: {
    _id: string;
    userName: string;
    email: string;
    confirmed: boolean;
  };
  likes: { userId: string }[];
};

export type QuotePropsItem = {
  item: {
    _id: string;
    movie: string;
    poster: string;
    quoteNameEng: string;
    quoteNameGe: string;
    userId: string;
    comments: Array<{
      _id: string;
      comment: string;
      quoteId: string;
      userId: string;
    }>;
    user: {
      _id: string;
      userName: string;
      email: string;
      confirmed: boolean;
    };
    likes: { userId: string }[];
  };
};
