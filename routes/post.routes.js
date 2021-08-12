const express = require('express');
const router = express.Router();
const db = require('./../db');

router.get('/posts', (req, res) => {
  res.json(db.posts);
});

router.get('/posts/:id', (req, res) => {
  res.json(db.posts.find(item => item.id == req.params.id));
});

router.post('/posts', (req, res) => {
  const { title } = req.body;
  db.posts.push({ id: 3, title })
  res.json({ message: 'OK' });
});

router.put('/posts/:id', (req, res) => {
  const { title } = req.body;
  db = db.posts.map(item => (item.id == req.params.id) ? { ...item, title } : item );
  res.json({ message: 'OK' });
});

module.exports = router;
