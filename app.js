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
    const list = client.db('todoApp').collection('list');
  
    const cursor = list.find({});
  
    await cursor.forEach(console.log);
    await client.close();

    res.render('index');
  }
  getTest();
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});