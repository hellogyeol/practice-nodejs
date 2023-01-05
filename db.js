const { MongoClient } = require("mongodb");
const url = "mongodb+srv://hellogyeol:hihello@cluster0.pnnqiq8.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(url);

async function run() {
  await client.connect()
  const page = client.db('book').collection('page')
  await page.deleteMany({})

  await page.insertMany([
    {
      name: 'a',
      contact: {
        home: '123'
      }
    },
    {
      name: 'b',
      contact: {
        home: '123'
      }
    }
  ])
  

  const cursor = page.find({
    'contact.home': '123'
  })


  await cursor.forEach(console.log)
  await client.close()
}

run()