import { UserDetails } from 'components/shared';
import { ChangeEvent, RefObject } from 'react';

export const getRegularUserFormInitialValue = () => {
  let userName = '';
  let password = '';
  let email = '';
  let secondaryEmails = [
    {
      secondary: true,
      isVerified: false,
      secondaryEmail: '',
    },
  ];

  return {
    userName,
    password,
    email,
    secondaryEmails,
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

  return {
    userName,
    password,
    email,
    secondaryEmails,
  };
};
