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
const getCSVData = (path, header) => {
  return new Promise((resolve, reject) => {
    const csvData = [];
    fs.createReadStream(path)
      .pipe(fastcsv.parse({ headers: header }))
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
        const data = await getCSVData("./datasets/countries.csv", false);
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
        const data = await getCSVData(
          "./datasets/country_vaccinations.csv",
          false
        );
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
 * Helper function to clean country restriction data
 *
 * @returns {Array} cleaned data
 */
const getCleanedResData = async () => {
  try {
    const data = await getCSVData("./datasets/travel_restrictions.csv", true);
    let cleanedData = [];
    let iso, quarantine, covidTest;
    data.forEach((item) => {
      iso = "";
      quarantine = "";
      covidTest = "";
      let tempArr = [];
      for (const key in item) {
        if (item.hasOwnProperty(key)) {
          if (key === "") continue;

          if (key === "ISO") {
            iso = item[key];
          }

          if (key.includes("quarantine") && item[key] !== "") {
            quarantine += `${item[key]}\n`;
          }

          if (key.includes("covidTest") && item[key] !== "") {
            covidTest += `${item[key]}\n`;
          }
        }
      }
      tempArr.push(
        iso,
        quarantine.replace(/\s+/g, " ").trim(),
        covidTest.replace(/\s+/g, " ").trim()
      );
      cleanedData.push(tempArr);
    });
    return cleanedData;
  } catch (error) {
    console.log(error);
  }
};

/**
 * Insert travel restriction data from csv into database.
 *
 * Checks if there are any data in the table before insertion.
 */
const insertTravelRestrictions = () => {
<<<<<<< HEAD
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
        cleaned_data.push([item[1], item[2], item[3]]);
      });
=======
  return new Promise((resolve, reject) => {
    sql.query(query.SELECT_COUNTRYRES_TOP1, async (err, result) => {
      // Insert records if table is empty
      if (result.length === 0) {
        const data = await getCleanedResData();
        sql.query(query.INSERT_COUNTRYRES, [data], (err, result) => {
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
>>>>>>> 6ea985ddb52bad57b8755460295aae0c67ba812d

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
