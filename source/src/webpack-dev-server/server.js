const express = require('express');
const setup = require('./frontend-middleware');
const app = express();

// In production we need to pass these values in instead of relying on webpack
setup(app);

// get the intended port number, use port 3000 if not provided
const port = 3000;

// Start your app.
app.listen(port, (err) => {
  if (err) {
    return logger.error(err.message);
  }
});
