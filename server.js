const express = require('express');
const cors = require('cors');
const app = express();
const mongoClient = require('mongodb').MongoClient;

const postsRoutes = require('./routes/posts.routes');

mongoClient.connect('mongodb://localhost:27017/', { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
  if(err) {
    console.log(err);
  }
  else {
    console.log('Successfully connected to the database');
    const db = client.db('BulletinBoard');
    const app = express();

    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));

    app.use('/api', postsRoutes);;

    app.use((req, res) => {
      res.status(404).send({ message: 'Not found...' });
    })

    app.listen('8000', () => {
      console.log('Server is running on port: 8000');
    });
  }
});
