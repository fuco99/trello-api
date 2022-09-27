import { MongoClient } from "mongodb";
import { env } from "*/config/environment";
const uri = env.MONGODB_URI;
let dbInstance = null;

export const connectDB = async () => {
  const client = new MongoClient(uri, {
    useunifiedtopology: true,
    useNewUrlParser: true,
  });

  // connect the client to server
  await client.connect();
  // Assign clientDB to our dbInstance
  dbInstance = client.db(env.DATABASE_NAME);
};

// GET DATABASE INSTANCE
export const getDB = () => {
  if (!dbInstance) throw new Error("Must connect to Database first.");
  return dbInstance;
};
