const { MongoClient } = require("mongodb");
const mysql = require("mysql");

const connectMySQLDB = async () => {
  try {
    db = mysql.createConnection({
      host: process.env.MYSQL_HOST,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
    });
    console.log("MySQL Connected...");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

const connectMongoDB = async () => {
  try {
    const client = new MongoClient(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await client.connect();

    console.log("MongoDB Connected...");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = {
  connectMySQLDB,
  connectMongoDB,
};
