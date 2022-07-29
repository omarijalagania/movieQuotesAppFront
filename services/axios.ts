import axios from 'axios';

const request = axios.create({
  baseURL: process.env.BACKEND_URL,
});

export const registerHandler = async (data: {
  email: string;
  password: string;
  userName: string;
  repeatPassword: string;
}) => {
  const response = request.post(`/user/register`, data);
  return response;
};
