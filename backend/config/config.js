require("dotenv").config();

module.exports = {
  // Environment
  NODE_ENV: process.env.NODE_ENV || "development",

  // Server
  PORT: process.env.PORT || 5000,
  HOST: process.env.HOST || "localhost",

  // MongoDB
  MONGODB_URI: process.env.MONGODB_URI || "mongodb://localhost:27017/drivemate",
  MONGODB_OPTIONS: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },

  // JWT
  JWT_SECRET: process.env.JWT_SECRET || "drivemate-secret-key",
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN || "30d",
  JWT_COOKIE_EXPIRES_IN: process.env.JWT_COOKIE_EXPIRES_IN || 30,

  // Email
  EMAIL_HOST: process.env.SMTP_HOST,
  EMAIL_PORT: process.env.SMTP_PORT || 587,
  EMAIL_USER: process.env.SMTP_USER,
  EMAIL_PASS: process.env.SMTP_PASS,
  EMAIL_FROM: process.env.FROM_EMAIL || "noreply@drivemate.com",

  // Redis
  REDIS_HOST: process.env.REDIS_HOST || "localhost",
  REDIS_PORT: process.env.REDIS_PORT || 6379,
  REDIS_PASSWORD: process.env.REDIS_PASSWORD,

  // Rate Limiting
  RATE_LIMIT_WINDOW_MS: process.env.RATE_LIMIT_WINDOW_MS || 15 * 60 * 1000,
  RATE_LIMIT_MAX: process.env.RATE_LIMIT_MAX || 100,

  // Logging
  LOG_LEVEL: process.env.LOG_LEVEL || "info",
  LOG_FILE_PATH: process.env.LOG_FILE_PATH || "logs/app.log",
};
