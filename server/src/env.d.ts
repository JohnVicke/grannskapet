declare namespace NodeJS {
  interface ProcessEnv {
    PORT: string;
    DATABASE_URL: string;
    AUTH0_CLIENT_ID: string;
    AUTH0_DOMAIN: string;
  }
}