require("dotenv").config({ path: "../.env" });

const cors = require("cors");
const cookieParser = require("cookie-parser");
const connectMongoDB = require("./config/mongodb");
const sql = require("./config/mysql");
const express = require("express");
const fs = require("fs");
const helmet = require("helmet");
const morgan = require("morgan");
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const seedData = require("./dataseeders/dataseeder");
const seedNoSQLData = require("./dataseeders/nosqldataseeder");
const path = require("path");
const { CLIENT_URL, PORT } = require("./config");

const countryRoute = require("./routes/country");
const bookingRoute = require("./routes/booking");
const clinicRoute = require("./routes/clinic");
const nosqlCountryRoute = require("./routes/nosqlCountry");
const nosqlBookingRoute = require("./routes/nosqlBooking");
const nosqlClinicRoute = require("./routes/nosqlClinic");

const app = express();

// DB Connection
sql.getConnection((error, connection) => {
  if (!error) {
    console.log("MySQL connected...");
  }
  connection.release();
});
connectMongoDB;
console.log("MongoDB connected...");
seedData();
seedNoSQLData();

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

// Swagger config
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Vaccation API",
      description: "Vaccation API Information",
    },
    servers: [
      {
        url: "http://localhost:5000",
      },
    ],
  },
  apis: ["./routes/*.js"],
};
const specs = swaggerJSDoc(options);

// Default route
app.get("/", (req, res) => res.send("API Running..."));

// Custom routes
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
app.use("/api/countries", countryRoute);
app.use("/api/bookings", bookingRoute);
app.use("/api/clinics", clinicRoute);
app.use("/api/nosql/countries", nosqlCountryRoute);
app.use("/api/nosql/bookings", nosqlBookingRoute);
app.use("/api/nosql/clinics", nosqlClinicRoute);

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
