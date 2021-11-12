const { MongoClient } = require("mongodb");
const { MONGO_URI } = require(".");

const connectMongoDB = async () => {
  try {
    const client = new MongoClient(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const conn = await client.connect();
    console.log("MongoDB Connected...");
    return conn.db("vaccationdb");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectMongoDB;
