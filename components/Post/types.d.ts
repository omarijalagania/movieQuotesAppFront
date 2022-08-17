export interface Props {
  item: ItemProps;
  setGetLike: Dispatch<SetStateAction<never[]>>;
}

export type SingleCommentProps = {
  comment: {
    userId: string;
    comment: string;
    _id: string;
  };
};

export type CommentProp = {
  userId: string;
  comment: string;
  _id: string;
};

export type UserProps = {
  _id: React.Key | null | undefined;
  userName:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactFragment
    | React.ReactPortal
    | Iterable<ReactI18NextChild>
    | null
    | undefined;
};
