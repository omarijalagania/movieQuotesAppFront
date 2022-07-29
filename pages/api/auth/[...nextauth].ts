/* eslint-disable @typescript-eslint/no-unused-vars */
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import { googleLoginHandler, loginHandler } from 'services';

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { type: 'string' },
        password: { type: 'password' },
      },
      // @ts-ignore
      authorize: async (credentials) => {
        try {
          const data = {
            email: credentials?.email,
            password: credentials?.password,
          };

          const response = await loginHandler(
            data as { email: string; password: string }
          );

          if (response.status === 200) {
            return {
              user: response.data,
            };
          }
        } catch (error) {
          throw new Error('error');
        }
      },
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  secret: process.env.JWT_SECRET,
  callbacks: {
    async signIn({ user, account }) {
      if (account.provider === 'google') {
        const data = {
          userName: user.name,
          email: user.email,
        };
        googleLoginHandler(data);
      }

      return true;
    },
  },
});
