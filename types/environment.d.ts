export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      GOOGLE_CLIENT_ID: string;
      GOOGLE_CLIENT_SECRET: string;
      JWT_SECRET: string;
      MONGODB_URI: string;
      NEXT_PUBLIC_BACKEND_URL: string;
      NEXT_PUBLIC_SOCKET_URL: string;
      NEXT_PUBLIC_RANDOM_AVATAR: string;
    }
  }
}
