const express = require('express');
const app = express();

app.get('/', (req, res) => {
  someAsyncOperation().then(() => {
    res.send('Hello World!');
  }).catch(err => {
    // This catch block will not work properly if the promise is rejected outside this function
    next(err); // Pass error to the error handler
  });
});

function someAsyncOperation() {
  return new Promise((resolve, reject) => {
    const randomNumber = Math.random();
    if (randomNumber < 0.5) {
      reject(new Error('Something went wrong!'));
    } else {
      resolve();
    }
  });
}

// Centralized error handler
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).send('Internal Server Error');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});