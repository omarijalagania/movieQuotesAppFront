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
