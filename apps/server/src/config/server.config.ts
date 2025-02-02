// node env
export const nodeEnv = process.env.NODE_ENV || 'develop';

// port
export const port = 4000;

// cookie secret
export const cookieSecret = process.env.COOKIE_SECRET || 'cookie-secret';

const allowedOrigins = [process.env.WEB_APP_URL].filter((origin): origin is string =>
  Boolean(origin),
);

// cors config
export const corsConfig = {
  origin: allowedOrigins,
  credentials: true,
};
