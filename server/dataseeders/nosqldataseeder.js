const connectMongoDB = require("../config/mongodb");
const { getCSVData } = require("./utils");

const mongo = connectMongoDB();

const insertCountries = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await getCSVData("./datasets/countries.csv", false);
      let countries = [];
      data.forEach((item) => {
        countries.push({
          iso: item[1],
          country_name: item[0],
        });
      });

      const countriesCollection = (await mongo).collection("countries");
      const documentCount = await countriesCollection.countDocuments();

      if (documentCount === 0) {
        const res = await countriesCollection.insertMany(countries);
        console.log(
          `Successfully inserted ${res?.insertedCount} rows into country collection...`
        );
      }
      resolve();
    } catch (err) {
      reject(err);
    }
  });
};

const seedNoSQLData = async () => {
  try {
    await insertCountries();
    //   await insertCountryVaccinations();
    //   await insertTravelRestrictions();
    //   await insertPCRClinics();
  } catch (err) {
    console.error(err);
  }
};
module.exports = seedNoSQLData;
