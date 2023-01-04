// ###############################################
// server.js
// ###############################################
// const express = require('express')
// const app = express()
// const port = 3000

// app.use(express.json())
// app.use(express.urlencoded({extended: true}))
// app.use(express.static('public'))

// app.set('view engine', 'pug')

// app.get('/', (req, res) => {
//   res.render('index', {
//     test: 'pug test!!'
//   })
// })

// app.post('/', (req, res) => {
//   res.render('index', {
//     test: 'pug test!! POST!!!'
//   })
//   content = req.body.hehe
//   console.log(content)
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })



// ###############################################
// db.js
// ###############################################
// const { MongoClient } = require("mongodb");
// const url = "mongodb+srv://hellogyeol:hihello@cluster0.pnnqiq8.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(url);
// const dbName = 'test'

// async function run() {
//   try {
//     await client.connect();
//     console.log("Connected correctly to server");

//     const db = client.db(dbName)
//     const col = db.collection('todo')
//     // await col.insertOne({content: 'wow'})

//     const list = await col.find({}).toArray()
//     console.log(list)
//     console.log(content)
//   }
//   catch (err) {
//     console.log(err.stack);
//   }
//   finally {
//     await client.close();
//     console.log('Connection Closed')
//   }
// }

// run().catch(console.dir);


















const express = require('express')
const app = express()
const port = 3000
const { MongoClient } = require("mongodb");
const url = "mongodb+srv://hellogyeol:hihello@cluster0.pnnqiq8.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(url);
const dbName = 'test'
let content = ''

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))
app.set('view engine', 'pug')

app.get('/', (req, res) => {

})

app.post('/', (req, res) => {
  content = req.body.name
  console.log(content)

  async function run() {
    try {
      await client.connect();
      console.log("Connected correctly to server");
  
      const db = client.db(dbName)
      const col = db.collection('todo')
      await col.insertOne({content: content})
  
      const list = await col.find({}).toArray()
      console.log(list)

      res.render('index', {
        list: list.map(item => item.content)
      })
    }
    catch (err) {
      console.log(err.stack);
    }
    finally {
      await client.close();
      console.log('Connection Closed')
    }
  }
  run().catch(console.dir);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})