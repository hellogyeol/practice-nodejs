require('dotenv').config();
const express = require('express');
const app = express();
const port = 3000;

const { MongoClient } = require("mongodb");
const url = process.env.URL;
const client = new MongoClient(url);

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.set('view engine', 'pug');

app.get('/', (req, res) => {
  async function getTest() {
    await client.connect();
    const col = client.db('db').collection('col');

    const todoList = await col.find({}).toArray();
    console.log(todoList);
    await client.close();

    res.render('index', {
      todoList: todoList
    });
  }
  getTest();
});








app.get('/test', (req, res) => {
  res.sendFile(`${__dirname}/test.html`)
});

app.post('/test', (req, res) => {
  async function getTest() {
    await client.connect();
    const col = client.db('db').collection('col');

    const todoList = await col.find({}).toArray();
    console.log(todoList);
    await client.close();
  }
  getTest();
  res.sendFile(`${__dirname}/test.html`)
});


app.get('/test2', (req, res) => {
  res.send('asdfasdf')
});











app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});