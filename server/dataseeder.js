const fs = require("fs");
const fastcsv = require("fast-csv");
const query = require("./queries/dataseeder");
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
  connection.query(query.SELECT_COUNTRY_TOP1, async (err, result) => {
    // Insert records if table is empty
    if (result.length === 0) {
      const data = await getCSVData("./datasets/countries.csv");

      // Execute query to insert data into db
      connection.query(query.INSERT_COUNTRY, [data], (err, result) => {
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
  connection.query(query.SELECT_COUNTRYVACC_TOP1, async (err, result) => {
    // Insert records if table is empty
    if (result.length === 0) {
      const data = await getCSVData("./datasets/country_vaccinations.csv");
      // Execute query to insert data into db
      connection.query(query.INSERT_COUNTRYVACC, [data], (err, result) => {
        if (err) {
          console.error(`Error: ${err?.sqlMessage}`);
        } else {
          console.log(
            `Successfully inserted ${result?.affectedRows} rows into country_vaccinated table...`
          );
        }
      });
    }
  });
};

const insertPCRClinics = (connection) => {
  connection.query(query.SELECT_PCRCLINIC_TOP1, async (err, result) => {
    // Insert records if table is empty
    if (result.length === 0) {
      const data = await getCSVData("./datasets/pcr_clinics.csv");
      // Execute query to insert data into db
      connection.query(query.INSERT_PCRCLINIC, [data], (err, result) => {
        if (err) {
          console.error(`Error: ${err?.sqlMessage}`);
        } else {
          console.log(
            `Successfully inserted ${result?.affectedRows} rows into pcr_clinic table...`
          );
        }
      });
    }
  });
};

const seedData = () => {
  const db = sql();
  db.getConnection(async (err, connection) => {
    try {
      // console.log(await getCSVData("./datasets/travel_restrictions.csv"));
      insertCountries(connection);
      insertCountryVaccinations(connection);
      insertPCRClinics(connection);
    } catch (err) {
      console.error(err);
    } finally {
      connection.release();
    }
  });
};

module.exports = seedData;
