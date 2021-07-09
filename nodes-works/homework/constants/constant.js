module.exports = {
  PORT: process.env.PORT || 3000,
  DB_CONNECTION_URL: process.env.DB_CONECTION_URL || 'mongodb://localhost:27017/users',
  ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET || 'Secret',
  REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN_SECRET || 'Refresh_Secret',
  SYSTEM_EMAIL: process.env.SYSTEM_EMAIL || 'dybuna.mark@gmail.com',
  SYSTEM_EMAIL_PASSWORD: process.env.SYSTEM_EMAIL_PASSWORD || 'Marik_prorok1',

  AUTHORIZATION: 'Authorization'
};
