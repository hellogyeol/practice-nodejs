// const { MongoClient } = require("mongodb");
// import { MongoClient } from "mongodb";
// const url = "mongodb+srv://hellogyeol:hihello@cluster0.pnnqiq8.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(url);


// const btn = document.querySelector('.btn')
// btn.addEventListener('click', getTest)

// async function getTest() {
//   await client.connect();
//   const col = client.db('db').collection('col');

//   const todoList = await col.find({}).toArray();
//   console.log(todoList);
// }

import { MongoClient } from "../node_modules/mongodb/"
console.log('test')