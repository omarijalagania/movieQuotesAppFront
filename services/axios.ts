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

export const addMovieHandler = async (data: {
  movieNameEn: string;
  movieNameGe: string;
  genre: string;
  directorEn: string;
  directorGe: string;
  descriptionEn: string;
  descriptionGe: string;
  poster: string;
  userId: string;
}) => {
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

export const getAllMoviesHandler = async () => {
  const response = await request.get(`/movie/all`);
  return response;
};

export const getSingleMovieHandler = async (
  id: string | string[] | undefined
) => {
  const response = await request.get(`/movie/${id}`);
  return response;
};

export const getMovieGenresHandler = async () => {
  const response = await request.get(`/movies/genres`);
  return response;
};
