const express = require('express');
const app = express();
const port = 3000;

const { MongoClient } = require("mongodb");
const url = "mongodb+srv://hellogyeol:hihello@cluster0.pnnqiq8.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(url);

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.set('view engine', 'pug');

app.get('/', (req, res) => {
  getTest();
  res.render('index');
});

app.post('/', (req, res) => {
  const content = req.body.content;
  postTest(content);
  res.render('index');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});


async function getTest() {
  await client.connect();

  const list = client.db('todoApp').collection('list');
  const cursor = list.find({});

  await cursor.forEach(console.log);
  await client.close();
}

async function postTest(content) {
  await client.connect();

  const list = client.db('todoApp').collection('list');
  await list.insertOne({
    content: content
  });
  const cursor = list.find({});

  await cursor.forEach(console.log);
  await client.close();
}