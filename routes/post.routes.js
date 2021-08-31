const express = require('express');
const router = express.Router();
const Post = require('../models/post.model');
router.get('/posts', async (req, res) => {
  try {
    const result = await Post
      .find({status: 'published'})
      .select('location title image price')
      .sort({created: -1});
    if(!result) res.status(404).json({ post: 'Not found' });
    else res.json(result);
  }
  catch(err) {
    res.status(500).json(err);
  }
});
router.get('/posts/:id', async (req, res) => {
  try {
    const result = await Post
      .findById(req.params.id);
    if(!result) res.status(404).json({ post: 'Not found' });
    else res.json(result);
  }
  catch(err) {
    res.status(500).json(err);
  }
});

router.post('/posts/add', async (req, res) => {
  try {
    const {
      title,
      price,
      content,
      publicationDate,
      lastUpdateDate,
      email,
      image,
      phone,
      location,
      status,
    } = req.body;
    const newPost = new Post({
      title: title,
      price: price,
      content: content,
      publicationDate: publicationDate,
      lastUpdateDate: lastUpdateDate,
      email: email,
      image: image,
      phone: phone,
      location: location,
      status: status,
    });
    await newPost.save();
    res.json({ message: 'OK' });
  } catch(err) {
      res.status(500).json({ message: err });
  }
  });

module.exports = router;
