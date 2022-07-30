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

export const googleLoginHandler = async (data: {}) => {
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
