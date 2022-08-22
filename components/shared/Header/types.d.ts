export type UserDetails = {
  userName: string;
  provider: string;
  image: string;
};

export type NotificationProps = {
  notificationFor: string;
  user: { userName: string };
  createdAt: string;
  isRead: boolean;
  notificationType: string;
};
