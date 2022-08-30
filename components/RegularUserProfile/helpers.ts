import { UserDetails } from 'components/shared';

export const getRegularUserFormInitialValue = () => {
  let userName = '';
  let password = '';
  let email = '';
  let repeatPassword = '';
  let secondaryEmails: any = [];
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
  userDetails: UserDetails
) => {
  let userName = userDetails?.userName;
  let password = '';
  let email = userDetails?.email;
  let secondaryEmails: any = [];
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
