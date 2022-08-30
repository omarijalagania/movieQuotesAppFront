import { SetStateAction } from 'react';

type LoginProps = {
  setOpenRecoverModal: Dispatch<SetStateAction<boolean>>;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export default LoginProps;
