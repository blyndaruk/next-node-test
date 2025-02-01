// node env
export const nodeEnv = process.env.NODE_ENV || 'develop';

// port
export const port = 4000;

// cookie secret
export const cookieSecret = process.env.COOKIE_SECRET || 'cookie-secret';

// cors config
export const corsConfig = {
  origin: [process.env.WEB_APP_URL],
  credentials: true,
};
