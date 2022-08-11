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
