const express = require('express');
const cors = require('cors');
const app = express();

const postsRoutes = require('./routes/posts.routes');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', postsRoutes);

app.use((req, res) => {
  res.status(404).send({ message: 'Not found...' });
})

app.listen('8000', () => {
  console.log('Server is running on port: 8000');
});
