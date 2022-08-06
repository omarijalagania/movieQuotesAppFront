// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Session } from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      _id: string;
      token: string;
      email: string;
      user: {
        token: string;
        _id: string;
      };
    };
  }
}
