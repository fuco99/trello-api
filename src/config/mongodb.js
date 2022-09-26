import { MongoClient } from "mongodb";
import { env } from "*/config/environment";
const uri = env.MONGODB_URI;
console.log("hêlo", uri);

export const connectDB = async () => {
  const client = new MongoClient(uri, {
    useunifiedtopology: true,
    useNewUrlParser: true,
  });
  try {
    await client.connect();

    await listDatabases(client);
    console.log("Connected successfully to server");
  } finally {
    // đảm bảo rằng client sẽ luôn luôn được close sau khi kết thúc
    await client.close();
  }
};

const listDatabases = async (client) => {
  const databases = await client.db().admin().listDatabases();
  console.log(databases);
};
