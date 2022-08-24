export type UserDetails = {
  userName: string;
  provider: string;
  email: string;
  image: string;
  poster: string;
  _id: string;
  secondaryEmails: [
    {
      secondaryEmail: string;
      secondary: boolean;
      isVerified: boolean;
    }
  ];
};

export type NotificationProps = {
  notificationFor: string;
  user: { userName: string };
  createdAt: string;
  isRead: boolean;
  notificationType: string;
};
