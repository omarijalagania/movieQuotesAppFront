export type UserDetails = {
  userName: string;
  provider: string;
  email: string;
  image: string;
  poster: string;
  _id: string;
  password: string;
  secondaryEmails: [
    {
      secondaryEmail: string;
      secondary: boolean;
      isVerified: boolean;
    }
  ];
};

export type NotificationProps = {
  _id: Key | null | undefined;
  notificationFor: string;
  user: {
    poster: string | undefined;
    image: string | undefined;
    provider: string;
    userName: string;
  };
  createdAt: string;
  isRead: boolean;
  notificationType: string;
};
