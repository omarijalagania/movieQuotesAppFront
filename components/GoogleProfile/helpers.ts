import { UserProps } from 'components';

export const getGoogleFormInitialValue = (userDetails: UserProps) => {
  let userName = userDetails?.userName;
  let email = userDetails?.email;

  return {
    userName,
    email,
  };
};

export const getGoogleEmptyFormInitialValue = () => {
  let userName = '';
  let email = '';

  return {
    userName,
    email,
  };
};
