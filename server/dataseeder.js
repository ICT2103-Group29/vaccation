const fs = require("fs");
const fastcsv = require("fast-csv");
const { connectMySQLDB: sql } = require("./config/db");

const getCSVData = (path) => {
  return new Promise((resolve, reject) => {
    const csvData = [];
    fs.createReadStream(path)
      .pipe(fastcsv.parse())
      .on("data", (data) => csvData.push(data))
      .on("end", () => {
        csvData.shift();
        resolve(csvData);
      });
  });
};

const insertCountries = (connection) => {
  // Check if there are any records in Table
  connection.query("SELECT * FROM country LIMIT 1", async (err, result) => {
    // Insert records if table is empty
    if (result.length === 0) {
      const data = await getCSVData("./datasets/countries.csv");

      const query = "INSERT INTO country (country_name, iso) VALUES ?";
      // Execute query to insert data into db
      connection.query(query, [data], (err, result) => {
        if (err) {
          console.error(`Error: ${err?.sqlMessage}`);
        } else {
          console.log(
            `Successfully inserted ${result?.affectedRows} rows into country table...`
          );
        }
      });
    }
  });
};

const insertCountryVaccinations = (connection) => {
  connection.query(
    "SELECT * FROM CountryVaccinated LIMIT 1",
    async (err, result) => {
      // Insert records if table is empty
      if (result.length === 0) {
        const data = await getCSVData("./datasets/country_vaccinations.csv");
        console.log(data);
        const query =
          "INSERT INTO CountryVaccinated (isoCode, totalFullyVaccinated, totalVaccinated, vaccinatedPercent) VALUES ?";
        // Execute query to insert data into db
        connection.query(query, [data], (err, result) => {
          if (err) {
            console.error(`Error: ${err?.sqlMessage}`);
          } else {
            console.log(
              `Successfully inserted ${result?.affectedRows} rows into CountryVaccinated table...`
            );
          }
        });
      }
    }
  );
};

const seedData = () => {
  const db = sql();
  db.getConnection(async (err, connection) => {
    try {
      // console.log(await getCSVData("./datasets/travel_restrictions.csv"));
      // insertCountries(connection);
      // insertCountryVaccinations(connection);
    } catch (err) {
      console.error(err);
    } finally {
      connection.release();
    }
  });
};

module.exports = seedData;
