const cors = require("cors");
const cookieParser = require("cookie-parser");
const express = require("express");
const dotenv = require("dotenv");
const fs = require("fs");
const helmet = require("helmet");
const morgan = require("morgan");
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const path = require("path");

const db = require("./config/db");

const app = express();
dotenv.config({ path: "../.env" });

// My code here

// DB Connection
db.connectMySQLDB();
// db.connectMongoDB();

// Log api requests to file
const accessLogStream = fs.createWriteStream(
  path.join(__dirname, "access.log"),
  { flags: "a" }
);
app.set("trust proxy", 1);

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ credentials: true, origin: process.env.CLIENT_URL }));
app.use(helmet());
app.use(morgan("combined", { stream: accessLogStream }));

// Swagger UI

// Default route
app.get("/", (req, res) => res.send("API Running..."));

// Custom routes

// Port config
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
