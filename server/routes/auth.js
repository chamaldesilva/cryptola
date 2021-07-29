const router = require('express').Router();

router.post('/login', (req, res) => {
  res.send('Login');
});

module.exports = router;
