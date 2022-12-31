const { MongoClient } = require("mongodb");
                                                                                                                                     
const url = "mongodb+srv://hellogyeol:hihello@cluster0.pnnqiq8.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(url);
const dbName = 'test'

async function run() {
  try {
    await client.connect();
    console.log("Connected correctly to server");

    const db = client.db(dbName)
    await db.collection('todo').insertOne({content: 'sleep'})

    const list = db.collection('todo').find({})
    console.log(list)
  }
  catch (err) {
    console.log(err.stack);
  }
  finally {
    await client.close();
  }
}

run().catch(console.dir);