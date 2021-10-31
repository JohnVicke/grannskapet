declare namespace NodeJS {
  interface ProcessEnv {
    PORT: string;
    NODE_ENV: string;
    DATABASE_URL: string;
    AUTH0_CLIENT_ID: string;
    AUTH0_DOMAIN: string;
    AUTH0_CLIENT_SECRET: string;
  }
}