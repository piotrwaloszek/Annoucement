const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');

const postsRoutes = require('./routes/posts.routes');

const app = express();

/* MIDDLEWARE */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/* API ENDPOINTS */
app.use('/api', postsRoutes);

/* API ERROR PAGES */
app.use('/api', (req, res) => {
  res.status(404).send({ post: 'Not found...' });
});

/* REACT WEBSITE */
app.use(express.static(path.join(__dirname, 'client/build')));
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build/index.html'));
});

/* MONGOOSE */
//mongoose.connect('mongodb+srv://petermus:or#DPooL@yneLRcYq4TLo5h&RQxA@cluster0.zfp11.mongodb.net/BulletinBoard?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connect('mongodb://localhost:27017/BulletinBoard', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.once('open', () => {
  console.log('Successfully connected to the database');
});
db.on('error', err => console.log('Error: ' + err));

/* START SERVER */
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log('Server is running on port: '+port);
});
