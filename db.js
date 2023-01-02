const { MongoClient } = require("mongodb");
                                                                                                                                     
const url = "mongodb+srv://hellogyeol:hihello@cluster0.pnnqiq8.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(url);
const dbName = 'test'

async function run() {
  try {
    await client.connect();
    console.log("Connected correctly to server");

    const db = client.db(dbName)
    const col = db.collection('todo')
    // await col.insertOne({content: 'wow'})

    const list = await col.find({}).toArray()
    console.log(list)
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