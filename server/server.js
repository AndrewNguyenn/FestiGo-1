const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

const apiRouter = require('./routes/api');

app.use(express.static(path.resolve(__dirname, '../client')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

app.use("/api", apiRouter);



app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});

module.exports = app;