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
