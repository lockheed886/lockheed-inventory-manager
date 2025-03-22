const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../models/User');


router.get('/login', (req, res) => {
  res.sendFile('login.html', { root: './views' });
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user && await bcrypt.compare(password, user.password)) {
    req.session.userId = user._id;
    res.redirect('/dashboard');
  } else {
    res.redirect('/login?error=Invalid%20email%20or%20password');
  }
});

module.exports = router;


