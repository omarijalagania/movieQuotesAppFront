export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      GOOGLE_CLIENT_ID: string;
      GOOGLE_CLIENT_SECRET: string;
      JWT_SECRET: string;
      MONGODB_URI: string;
      BACKEND_URL: string;
    }
  }
}
