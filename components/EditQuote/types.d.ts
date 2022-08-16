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
  };
};
