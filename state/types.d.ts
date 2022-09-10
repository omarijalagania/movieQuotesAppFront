export interface GlobalState {
  registerResponse: RegisterResponse;
  confirmResponse: ConfirmResponse;
  passwordRecoveryResponse: PasswordRecoveryResponse;
  newPasswordResponse: NewPasswordResponse;
  tokens: string;
  userId: string;
  singleMovie: SingleMovie;
  addMovie: AddMovie;
  triggerDelete: boolean;
  postItem: PostItem;
  socket: Socket;
  updateComment: UpdateComment;
  notifications: Notifications;
  likeNotification: LikeNotification;
  closeModal: boolean;
  secondaryEmails: secondaryEmails;
  growSearch: boolean;
}
