const express = require('express');
const router = express.Router();
const Jet = require('../models/Jet');
const authMiddleware = require('../middleware/auth');

router.get('/dashboard', authMiddleware, (req, res) => {
  res.sendFile('dashboard.html', { root: './views' });
});

router.get('/add', authMiddleware, (req, res) => {
  res.sendFile('add-jet.html', { root: './views' });
});

router.post('/add', authMiddleware, async (req, res) => {
  const { model, productionYear, status } = req.body;
  await Jet.create({ model, productionYear, status });
  res.redirect('/dashboard');
});

router.get('/jets', authMiddleware, async (req, res) => {
  const jets = await Jet.find();
  res.json(jets);
});

router.post('/update/:id', authMiddleware, async (req, res) => {
  const jetId = req.params.id;
  const { status } = req.body;
  await Jet.findByIdAndUpdate(jetId, { status });
  res.redirect('/dashboard');
});

router.post('/delete/:id', authMiddleware, async (req, res) => {
  const jetId = req.params.id;
  await Jet.findByIdAndDelete(jetId);
  res.redirect('/dashboard');
});

module.exports = router;
