import { request } from 'services';

export const registerHandler = async (data: {
  email: string;
  password: string;
  userName: string;
  repeatPassword: string;
}) => {
  const response = await request.post(`/user/register`, data);
  return response;
};

export const googleLoginHandler = async (data: {
  userName: string | null | undefined;
  email: string | null | undefined;
}) => {
  const response = await request.post(`/user/register/google`, data);

  return response;
};

export const loginHandler = async (data: {
  email: string;
  password: string;
}) => {
  const response = await request.post(`/user/login`, data);
  return response;
};

export const userConfirmHandler = async (token: { token: string }) => {
  const response = await request.post(`/user/confirm`, token);
  return response;
};

export const userRecoverHandler = async (data: { email: string }) => {
  const response = await request.post(`/user/password/recover`, data);
  return response;
};

export const newUserPasswordHandler = async (data: {
  password: string;
  repeatPassword: string;
  token: string | null | undefined;
}) => {
  const response = await request.post(`/user/password/new`, data);
  return response;
};

export const addMovieHandler = async (data: FormData) => {
  const response = await request.post(`/movie/add`, data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response;
};

export const getUserHandler = async (data: { email: string | undefined }) => {
  const response = await request.post(`/user/get`, data);
  return response;
};

export const getAllMoviesHandler = async (userId: string | null) => {
  const response = await request.get(`/my-movies/all/${userId}`);
  return response;
};

export const getMovieFeed = async () => {
  const response = await request.get(`/my-movies/feed-movies`);
  return response;
};

export const getSingleMovieHandler = async (
  id: string | string[] | undefined
) => {
  const response = await request.get(`/my-movies/${id}`);
  return response;
};

export const getMovieGenresHandler = async () => {
  const response = await request.get(`/movies/genres`);
  return response;
};

export const updateMovieHandler = async (data: FormData, id: string) => {
  const response = await request.put(`/movie/update/${id}`, data);
  return response;
};

export const deleteMovieHandler = async (id: string) => {
  const response = await request.delete(`/my-movies/delete/${id}`);
  return response;
};

export const addQuoteHandler = async (data: FormData) => {
  const response = await request.post(`/quote/add`, data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response;
};

export const editQuoteHandler = async (data: FormData, id: string) => {
  const response = await request.put(`/quote/update/${id}`, data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response;
};

export const getQuoteHandler = async () => {
  const response = await request.get(`/quotes/get`);
  return response;
};

export const addCommentsHandler = async (data: {
  comment: string;
  userId: string;
  quoteId: string;
}) => {
  const response = await request.post(`/comments/add`, data);
  return response;
};

export const getUserByIdHandler = async (id: string) => {
  const response = await request.get(`/user/get/${id}`);
  return response;
};

export const deleteQuoteHandler = async (id: string) => {
  const response = await request.delete(`/quotes/delete/${id}`);
  return response;
};

export const addLikeHandler = async (data: {
  quoteId: string;
  userId: string;
}) => {
  const response = await request.put(`/likes/add`, data);
  return response;
};

export const removeLikeHandler = async (data: {
  quoteId: string;
  userId: string;
}) => {
  const response = await request.put(`/likes/remove`, data);
  return response;
};

export const addNotificationHandler = async (data: {
  userId: string;
  notificationType: string;
  isRead: boolean;
  notificationFor: string;
}) => {
  const response = await request.post(`/notifications/add`, data);
  return response;
};

export const getNotificationsHandler = async () => {
  const response = await request.get(`/notifications/get`);
  return response;
};

export const updateNotificationHandler = async () => {
  const response = await request.post(`/notifications/update`);
  return response;
};

export const updateGoogleUserHandler = async (
  data: { userName: string },
  userId: string
) => {
  const response = await request.put(`/user/update/${userId}`, data);
  return response;
};
