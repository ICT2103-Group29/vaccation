const fs = require("fs");
const fastcsv = require("fast-csv");

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

module.exports = { getCSVData, getCleanedResData };
