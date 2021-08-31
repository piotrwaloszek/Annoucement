const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: String },
  content: { type: String, required: true },
  publicationDate: { type: Date, required: true },
  lastUpdateDate: { type: Date, required: true },
  email: { type: String, required: true },
  image: { type: String },
  phone: { type: String },
  location: { type: String },
  status: { type: String},
});

module.exports = mongoose.model('Post', postSchema);
