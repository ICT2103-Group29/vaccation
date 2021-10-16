require("dotenv").config({ path: "../.env" });

const cors = require("cors");
const cookieParser = require("cookie-parser");
const sql = require("./config/mysql");
const express = require("express");
const fs = require("fs");
const helmet = require("helmet");
const morgan = require("morgan");
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const seedData = require("./dataseeder");
const path = require("path");
const { CLIENT_URL, PORT } = require("./config");

const countryRoute = require("./routes/country");

const app = express();

// DB Connectio
seedData();
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
app.use(cors({ credentials: true, origin: CLIENT_URL }));
app.use(helmet());
app.use(morgan("combined", { stream: accessLogStream }));

// TODO Swagger UI

// Default route
app.get("/", (req, res) => res.send("API Running..."));

// Custom routes
app.use("/api/countries", countryRoute);

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
