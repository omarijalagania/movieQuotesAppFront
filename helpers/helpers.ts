import { ChangeEvent, RefObject } from 'react';

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
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    return (imageUrl = URL.createObjectURL(file));
  }
};

export const openFIlePicker = (hiddenFileInput: RefObject<HTMLLinkElement>) => {
  if (hiddenFileInput.current) {
    hiddenFileInput.current.click();
  }
};

export const showInAvatar = (
  imagePreview: string | undefined,
  memberAvatar?: string,
  Member?: string
) => {
  if (imagePreview) {
    return imagePreview;
  } else if (!imagePreview && !Member) {
    return memberAvatar;
  } else {
    return process.env.NEXT_PUBLIC_BACKEND_URL + '/' + Member;
  }
};

export const showAvatarPicture = (userDetails: {
  provider: string;
  poster: string;
  image: string;
}) => {
  return userDetails?.provider === 'google'
    ? userDetails?.poster
      ? process.env.NEXT_PUBLIC_BACKEND_URL + '/' + userDetails?.poster
      : userDetails?.image
    : userDetails?.provider === 'email'
    ? userDetails?.poster
      ? process.env.NEXT_PUBLIC_BACKEND_URL + '/' + userDetails?.poster
      : userDetails?.image
    : process.env.NEXT_PUBLIC_RANDOM_AVATAR;
};
