module.exports = {
  PORT: process.env.PORT || 3000,
  DB_CONNECTION_URL: process.env.DB_CONECTION_URL || 'mongodb://localhost:27017/users',
  ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET || 'Secret',
  REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN_SECRET || 'Refresh_Secret',
  SYSTEM_EMAIL: process.env.SYSTEM_EMAIL || 'noReply@gmail.com',
  SYSTEM_EMAIL_PASSWORD: process.env.SYSTEM_EMAIL_PASSWORD || '1234567890123',

  AUTHORIZATION: 'Authorization'
};
