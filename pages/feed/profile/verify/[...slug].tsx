import React, { useEffect } from 'react';
import { confirmUserEmailHandler } from 'services';
import { useHeader } from 'components';

const UserEmail = () => {
  const { router, userDetails } = useHeader();
  const [secondaryEmail, setSecondaryEmail] = React.useState([]);

  useEffect(() => {
    setSecondaryEmail(
      JSON.parse(localStorage.getItem('secondaryEmails') || '')
    );
  }, []);

  useEffect(() => {
    const emailConfirm = async () => {
      if (router.query.slug) {
        const token = router.query.slug[0];
        const data = {
          token: token,
          userName: userDetails?.userName,
          email: secondaryEmail,
        };
        const response = await confirmUserEmailHandler(data);
        if (response.status === 200) {
          router.push('/');
          localStorage.removeItem('secondaryEmails');
        } else if (response.status === 500) {
          router.push('/');
          localStorage.removeItem('secondaryEmails');
        } else if (response.status === 404) {
          router.push('/');
          localStorage.removeItem('secondaryEmails');
        }
      }
    };
    emailConfirm();
  }, [router, router.query.slug, secondaryEmail, userDetails?.userName]);

  return <div></div>;
};

export default UserEmail;
