export type ButtonProps = {
  name: string;
  className?: string;
  onClick?: () => void;
  type?: 'submit' | 'reset' | 'button';
  form?: string;
  hadIcon?: boolean;
  icon?: 'plus' | 'google' | '';
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
  setOpenEditQUoteDialog: React.Dispatch<React.SetStateAction<boolean>>;

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
  key?: string;
  setOpenEditQUoteDialog: React.Dispatch<React.SetStateAction<boolean>>;
};

export type SingleCommentProps = {
  comment: {
    userId: string;
    comment: string;
    _id: string;
    image: string;
  };
};

export type CommentProp = {
  userId: string;
  comment: string;
  _id: string;
  image: string;
};

export type ItemProps = {
  item: {
    _id: string;
    comments: Array<{
      _id: string;
      userId: string;
      quoteId: string;
      comment: string;
    }>;
    likes: { userId: string }[];
    quoteNameEng: string;
    quoteNameGe: string;
    movieId: string;
    poster: string;
    userId: string;
    user: [
      {
        _id: string;
        userName: string;
        email: string;
        confirmed: boolean;
      }
    ];
  };

  item: {
    _id: string;
    comments: Array<{
      _id: string;
      userId: string;
      quoteId: string;
      comment: string;
    }>;
    likes: { userId: string }[];
    quoteNameEng: string;
    quoteNameGe: string;
    movieId: string;
    poster: string;
    userId: string;
    user: [
      {
        _id: string;
        userName: string;
        email: string;
        confirmed: boolean;
      }
    ];
  };
  key?: string;

  _id: string;
  comments: Array<{
    _id: string;
    userId: string;
    quoteId: string;
    comment: string;
  }>;
  likes: any;
  quoteNameEng: string;
  quoteNameGe: string;
  movieId: string;
  poster: string;
  userId: string;
  user: [
    {
      poster: string;
      image: string;
      provider: string;
      _id: string;
      userName: string;
      email: string;
      confirmed: boolean;
    }
  ];
  user: Array<{
    _id: string;
    userName: string;
    email: string;
  }>;
  quote: Array<{
    _id: string;
    userId: string;
    quoteId: string;
    comment: string;
  }>;
  comments: Array<{
    _id: string;
    userId: string;
    quoteId: string;
    comment: string;
  }>;
  _id: string;
  poster: string;
  quoteNameEng: string;
  userId: string;
  likes: string[];
};

export type SIngleItemProps = {
  item: {
    _id: string;
    comments: Array<{
      _id: string;
      userId: string;
      quoteId: string;
      comment: string;
    }>;
    likes: { userId: string }[];
    quoteNameEng: string;
    quoteNameGe: string;
    movieId: string;
    poster: string;
    userId: string;
    user: [
      {
        _id: string;
        userName: string;
        email: string;
        confirmed: boolean;
      }
    ];
  };
};

export type AddQuoteProp = {
  setOpenAddQuote: Dispatch<SetStateAction<boolean>>;
};

export type RegisterProps = {
  setIsOpenLogin: React.Dispatch<React.SetStateAction<boolean>>;
};
