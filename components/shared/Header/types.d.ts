export type UserDetails = {
  userName: string;
  provider: string;
  email: string;
  image: string;
  _id: string;
};

export type NotificationProps = {
  notificationFor: string;
  user: { userName: string };
  createdAt: string;
  isRead: boolean;
  notificationType: string;
};
