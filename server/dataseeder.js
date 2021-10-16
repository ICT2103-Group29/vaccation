const fs = require("fs");
const fastcsv = require("fast-csv");
const query = require("./constants/queries/dataseeder");
const sql = require("./config/mysql");

/**
 * Returns data retrieved from csv.
 *
 * @param {string} path to csv file.
 * @returns {Array} csv data
 */
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

/**
 * Insert country data from csv into database.
 *
 * Checks if there are any data in the table before insertion.
 */
const insertCountries = () => {
  return new Promise((resolve, reject) => {
    sql.query(query.SELECT_COUNTRY_TOP1, async (err, result) => {
      // Insert records if table is empty
      if (result.length === 0) {
        const data = await getCSVData("./datasets/countries.csv");
        sql.query(query.INSERT_COUNTRY, [data], (err, result) => {
          if (err) {
            console.error(`Error: ${err?.sqlMessage}`);
            reject();
          } else {
            console.log(
              `Successfully inserted ${result?.affectedRows} rows into country table...`
            );
            resolve();
          }
        });
      }
    });
  });
};

/**
 * Insert country vaccination data from csv into database.
 *
 * Checks if there are any data in the table before insertion.
 */
const insertCountryVaccinations = () => {
  return new Promise((resolve, reject) => {
    sql.query(query.SELECT_COUNTRYVACC_TOP1, async (err, result) => {
      // Insert records if table is empty
      if (result.length === 0) {
        const data = await getCSVData("./datasets/country_vaccinations.csv");
        sql.query(query.INSERT_COUNTRYVACC, [data], (err, result) => {
          if (err) {
            console.error(`Error: ${err?.sqlMessage}`);
            reject();
          } else {
            console.log(
              `Successfully inserted ${result?.affectedRows} rows into country_vaccinated table...`
            );
            resolve();
          }
        });
      }
    });
  });
};

/**
 * Insert travel restriction data from csv into database.
 *
 * Checks if there are any data in the table before insertion.
 */
const insertTravelRestrictions = () => {
  return new Promise((resolve, reject) => {
    sql.query(query.SELECT_COUNTRYRES_TOP1, async (err, result) => {
      // Insert records if table is empty
      if (result.length === 0) {
        const data = await getCSVData("./datasets/travel_restrictions.csv");

        // Check for empty values
        const cleaned_data = [];
        data.forEach((item) => {
          if (
            item[1].length === 0 ||
            item[2].length === 0 ||
            item[3].length === 0
          ) {
            return;
          }
          cleaned_data.push([item[1], item[2].trim(), item[3].trim()]);
        });

        sql.query(query.INSERT_COUNTRYRES, [cleaned_data], (err, result) => {
          if (err) {
            console.error(`Error: ${err?.sqlMessage}`);
            reject();
          } else {
            console.log(
              `Successfully inserted ${result?.affectedRows} rows into country_restriction table...`
            );
            resolve();
          }
        });
      }
    });
  });
};

/**
 * Insert pcr clinic data from csv into database.
 *
 * Checks if there are any data in the table before insertion.
 */
const insertPCRClinics = () => {
  return new Promise((resolve, reject) => {
    sql.query(query.SELECT_PCRCLINIC_TOP1, async (err, result) => {
      // Insert records if table is empty
      if (result.length === 0) {
        const data = await getCSVData("./datasets/pcr_clinics.csv");
        sql.query(query.INSERT_PCRCLINIC, [data], (err, result) => {
          if (err) {
            console.error(`Error: ${err?.sqlMessage}`);
            reject();
          } else {
            console.log(
              `Successfully inserted ${result?.affectedRows} rows into pcr_clinic table...`
            );
            resolve();
          }
        });
      }
    });
  });
};

const seedData = async () => {
  try {
    await insertCountries();
    await insertCountryVaccinations();
    await insertTravelRestrictions();
    await insertPCRClinics();
  } catch (err) {
    console.error(err);
  }
};

module.exports = seedData;
