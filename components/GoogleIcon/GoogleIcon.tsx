import React from 'react';
import { GoogleIconProps } from './types';

const GoogleIcon: React.FC<GoogleIconProps> = ({ icon }) => {
  return (
    <>
      <img className='mr-2' src={icon?.src} alt='' />
    </>
  );
};

export default GoogleIcon;
