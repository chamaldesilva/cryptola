const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// import routes
const authRoute = require('./routes/auth');

// use routes
app.use('/api/auth', authRoute);

app.listen(PORT, () => {
  console.log('Server listening on port: ' + PORT);
});
