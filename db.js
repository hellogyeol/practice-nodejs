const { MongoClient } = require("mongodb");
const url = "mongodb+srv://hellogyeol:hihello@cluster0.pnnqiq8.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(url);

async function run() {
  await client.connect()
  const page = client.db('book').collection('page')
  await page.deleteMany({})

  await page.insertMany([
    {
      title: 'third'
    },
    {
      title: 'fourth'
    }
  ])
  const cursor = page.find({})
  await cursor.forEach(console.log)

  await client.close()
}

run()