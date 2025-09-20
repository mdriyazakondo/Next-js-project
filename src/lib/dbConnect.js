import { MongoClient, ServerApiVersion } from "mongodb";
function dbConnect(collectionName) {
  const uri = process.env.MONGODB_URL;

  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });
  return client.db(process.env.MONGODB_NAME).collection(collectionName);
  // return client.db(process.env.MONGODB_URL).collection(collectionName);
}

export default dbConnect;
