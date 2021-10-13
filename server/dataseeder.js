const fs = require("fs");
const fastcsv = require("fast-csv");
const { connectMySQLDB: sql } = require("./config/db");

const getCSVData = (path) => {
  return new Promise((resolve, reject) => {
    const csvData = [];
    fs.createReadStream(path)
      .pipe(fastcsv.parse({ headers: true }))
      .on("data", (data) => csvData.push(data))
      .on("end", () => {
        resolve(csvData);
      });
  });
};

const insertCountries = (connection) => {
  // Check if there are any records in Table
  connection.query("SELECT * FROM Country LIMIT 1", async (err, result) => {
    // Insert records if table is empty
    if (result.length === 0) {
      const data = await getCSVData("./datasets/countries.csv");
      const query = "INSERT INTO Country (countryName, isoCode) VALUES ?";
      // Execute query to insert data into db
      connection.query(query, [data], (err, result) => {
        if (err) {
          console.error(`Error: ${err?.sqlMessage}`);
        } else {
          console.log(
            `Successfully inserted ${result?.affectedRows} rows into Country table...`
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
      insertCountries(connection);
      insertCountryVaccinations(connection);
    } catch (err) {
      console.error(err);
    } finally {
      connection.release();
    }
  });
};

module.exports = seedData;
