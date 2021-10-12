const fs = require("fs");
const fastcsv = require("fast-csv");
const { connectMySQLDB: sql } = require("./config/db");

const insertCountries = (connection) => {
  let csvData = [];
  fs.createReadStream("./datasets/countries.csv")
    .pipe(fastcsv.parse())
    .on("data", (data) => csvData.push(data))
    .on("end", () => {
      csvData.shift(); // Remove header row

      // Check if there are any records in Table
      connection.query("SELECT * FROM Country LIMIT 1", (err, result) => {
        // Insert records if table is empty
        if (result.length === 0) {
          // Bulk insert into table
          let query = "INSERT INTO Country (countryName, isoCode) VALUES ?";
          connection.query(query, [csvData], (err, result) => {
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
    });
};

const insertCountryVaccinations = (connection) => {
  let csvData = [];
  fs.createReadStream("./datasets/country_vaccinations.csv")
    .pipe(fastcsv.parse())
    .on("data", (data) => csvData.push(data))
    .on("end", () => {
      csvData.shift(); // Remove header row
      // Check if there are any records in Table
      connection.query(
        "SELECT * FROM CountryVaccinated LIMIT 1",
        (err, result) => {
          // Insert records if table is empty
          if (result.length === 0) {
            // Bulk insert into table
            let query =
              "INSERT INTO CountryVaccinated (isoCode, totalFullyVaccinated, totalVaccinated, vaccinatedPercent) VALUES ?";
            connection.query(query, [csvData], (err, result) => {
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
    });
};

const seedData = () => {
  const db = sql();
  db.getConnection((err, connection) => {
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
