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
}
