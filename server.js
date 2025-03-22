const express = require('express');
const dotenv = require('dotenv');
const session = require('express-session');
const authRoutes = require('./routes/authRoutes');
const jetRoutes = require('./routes/jetRoutes');
const User = require('./models/User');
const bcrypt = require('bcryptjs');

dotenv.config();

require('./config/db');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false }
}));

app.use((req, res, next) => {
  console.log('Session on request:', req.session);
  console.log('Requested route:', req.url);
  next();
});

app.use('/', authRoutes);
app.use('/', jetRoutes);

app.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/login');
});

async function initializeAdminUser() {
  const adminEmail = 'admin@lockheed.com';
  const adminPassword = 'password123';
  const user = await User.findOne({ email: adminEmail });

  if (!user) {
    const hashedPassword = await bcrypt.hash(adminPassword, 10);
    await User.create({ email: adminEmail, password: hashedPassword });
    console.log('Admin user created: admin@lockheed.com / password123');
  }
}

initializeAdminUser();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
