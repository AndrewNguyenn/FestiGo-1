const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

app.use(express.static(path.resolve(__dirname, '../client')));


// app.get('/', (req, res) => {
//     console.log('main route endpoint')
//   return res.status(200).sendFile(path.join(__dirname, '../client/index.html'));
// });

// app.get('/languages', (req, res) => {
//     console.log('languages route endpoint')
//     return res.status(200).sendFile(path.join(__dirname, '../client/index.html'));
// });

// app.get('/home2', (req, res) => {
//     console.log('home2 route endpoint')
//     return res.status(200).sendFile(path.join(__dirname, '../client/index.html'));
// });

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
