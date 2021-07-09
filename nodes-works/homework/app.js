const express = require('express');
const mongoose = require('mongoose');

const { PORT, DB_CONNECTION_URL } = require('./constants/constant');
const { userRouter, authRouter } = require('./routes');

const app = express();

mongooseConnector();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/auth', authRouter);
app.use('/users', userRouter);

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`App listen ${PORT}`);
});

function mongooseConnector() {
  mongoose.connect(DB_CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true });
}
