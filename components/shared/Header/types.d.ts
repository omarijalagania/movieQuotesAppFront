export type UserDetails = {
  userName: string;
};

export type NotificationProps = {
  notificationFor: string;
  user: { userName: string };
  createdAt: string;
  isRead: boolean;
  notificationType: string;
};
