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

app.post('/', (req, res) => {
  const content = req.body.content;
  
  async function postTest() {
    await client.connect();
    const col = client.db('db').collection('col');

    await col.insertOne({
      content: content
    });
    const todoList = await col.find({}).toArray();
    console.log(todoList);
    await client.close();

    res.render('index', {
      todoList: todoList
    });
  }
  postTest();
});

app.get('/test', (req, res) => {
  res.sendFile(`${__dirname}/test.html`)
})

app.get('/test2', (req, res) => {
  res.send('wow')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});