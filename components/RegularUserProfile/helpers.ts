import { UserDetails } from 'components/shared';

export const getRegularUserFormInitialValue = () => {
  let userName = '';
  let password = '';
  let email = '';
  let repeatPassword = '';
  let secondaryEmails = [
    {
      secondary: true,
      isVerified: false,
      secondaryEmail: '',
    },
  ];
  let oldPassword = '';
  return {
    userName,
    password,
    email,
    secondaryEmails,
    repeatPassword,
    oldPassword,
  };
};

export const getRegularUserFullFormInitialValue = (
  userDetails: UserDetails | undefined
) => {
  let userName = userDetails?.userName;
  let password = '';
  let email = userDetails?.email;
  let secondaryEmails = [
    {
      secondary: true,
      isVerified: false,
      secondaryEmail: '',
    },
  ];
  let repeatPassword = '';
  let oldPassword = '';

  return {
    userName,
    password,
    email,
    secondaryEmails,
    repeatPassword,
    oldPassword,
  };
};
