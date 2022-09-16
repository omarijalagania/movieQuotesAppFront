export interface Props {
  item: ItemProps;
  setGetLike: Dispatch<SetStateAction<never[]>>;
}

export type UserProps = {
  email: any;
  image: string | undefined;
  _id: React.Key | null | undefined;
  userName: string;
  provider: string;
  poster: string;

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
