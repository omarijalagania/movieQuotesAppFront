import React, { useEffect } from 'react';
import { confirmUserEmailHandler } from 'services';

const UserEmail = () => {
  useEffect(() => {
    const emailConfirm = async () => {
      const data = {};
      const response = await confirmUserEmailHandler(data);
      console.log(response);
    };
    emailConfirm();
  }, []);

  return <div></div>;
};

export default UserEmail;
