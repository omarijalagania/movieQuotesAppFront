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

export const handleChange = (
  event: ChangeEvent<HTMLInputElement>,
  setFile: (arg0: File) => void
) => {
  event.preventDefault();
  const target = event.target as HTMLInputElement;
  if (target.files) {
    setFile(target.files[0]);
  }
};

export const imagePreview = (file: File) => {
  let imageUrl = '';
  if (file) {
    return (imageUrl = URL.createObjectURL(file));
  }
};

export const openFIlePicker = (hiddenFileInput: RefObject<HTMLLinkElement>) => {
  if (hiddenFileInput.current) {
    hiddenFileInput.current.click();
  }
};
