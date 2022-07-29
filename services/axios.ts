import axios from 'axios';

export const registerHandler = async (data: {
  email: string;
  password: string;
  userName: string;
  repeatPassword: string;
}) => {
  const response = await axios.post(
    `${process.env.BACKEND_URL}/user/register`,
    data
  );
  return response;
};
