import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { googleLoginHandler } from 'services';

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  secret: process.env.JWT_SECRET,
  callbacks: {
    async signIn({ user }) {
      const data = {
        userName: user.name,
        email: user.email,
      };
      googleLoginHandler(data);
      return true;
    },
  },
});
