export type InputArrayProps = {
  secondary: boolean;
  isVerified: boolean;
  secondaryEmails: [
    {
      secondary: boolean;
      isVerified: boolean;
      secondaryEmail: string;
    }
  ];
  id: number | string;
};
