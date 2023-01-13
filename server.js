require('dotenv').config();
const express = require('express');
const app = express();
const port = 3000;

const { MongoClient } = require("mongodb");
const url = process.env.DB_URL;
const client = new MongoClient(url);

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.set('view engine', 'pug');

////////////////////////////////////////////////////////////////
app.get('/', (req, res) => {
  getTest();
  async function getTest() {
    await client.connect();
    const col = client.db('db').collection('col');
  
    const fruits = await col.find({}).toArray();
    console.log(fruits);
  
    await client.close();
  
    res.render('index', {
      fruits: fruits
    });
  }
});

app.post('/', (req, res) => {
  postTest();
  async function postTest() {
    const content = req.body.content;

    await client.connect();
    const col = client.db('db').collection('col');
  
    await col.insertOne({fruit: content});
    const fruits = await col.find({}).toArray();
    console.log(fruits);
  
    await client.close();

    res.render('index', {
      fruits: fruits
    });
  }
});


/////////////////////////////////////////////////////////////////
app.get('/csr', (req, res) => {
  getTest();
  async function getTest() {
    await client.connect();
    const col = client.db('db').collection('col');
  
    const fruits = await col.find({}).toArray();
    console.log(fruits);
  
    await client.close();
  
    res.render('csr');
  }
});

app.post('/csr', (req, res) => {
  postTest();
  async function postTest() {
    const content = req.body.content;

    await client.connect();
    const col = client.db('db').collection('col');
  
    await col.insertOne({fruit: content});
    const fruits = await col.find({}).toArray();
    console.log(fruits);
  
    await client.close();

    res.send(fruits);
  }
});


//////////////////////////////////////////////////////////////////
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});