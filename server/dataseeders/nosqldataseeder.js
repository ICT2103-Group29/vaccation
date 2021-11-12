const connectMongoDB = require("../config/mongodb");
const { getCSVData, getCleanedResData } = require("./utils");

const mongo = connectMongoDB();

/**
 * Insert country data from csv into mongodb.
 *
 * Checks if there are any data in the collection before insertion.
 */
const insertCountries = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const countriesCollection = (await mongo).collection("country");
      const documentCount = await countriesCollection.countDocuments();

      if (documentCount === 0) {
        const data = await getCSVData("./datasets/countries.csv", false);
        let countries = [];
        data.forEach((item) => {
          countries.push({
            iso: item[1],
            country_name: item[0],
          });
        });
        await countriesCollection.createIndex({ country_name: "text" });
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

/**
 * Insert country vaccination data from csv into mongodb.
 *
 * Checks if there are any data in the collection before insertion.
 */
const insertCountryVaccinations = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const countryCollection = (await mongo).collection("country");
      const countryVaccCollection = (await mongo).collection(
        "country_vaccinated"
      );
      const documentCount = await countryVaccCollection.countDocuments();

      if (documentCount === 0) {
        const data = await getCSVData(
          "./datasets/country_vaccinations.csv",
          false
        );
        let countryVaccinations = [];
        for (const item of data) {
          const country = await countryCollection.findOne({ iso: item[0] });
          const countryId = country._id;
          countryVaccinations.push({
            country: countryId,
            total_vacc: item[1],
            total_fully_vacc: item[2],
            vacc_percent: item[3],
          });
        }

        const res = await countryVaccCollection.insertMany(countryVaccinations);
        console.log(
          `Successfully inserted ${res?.insertedCount} rows into country_vaccinations collection...`
        );
      }
      resolve();
    } catch (err) {
      reject(err);
    }
  });
};

/**
 * Insert country vaccination data from csv into mongodb.
 *
 * Checks if there are any data in the collection before insertion.
 */
const insertTravelRestrictions = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const countryCollection = (await mongo).collection("country");
      const countryRestrictionCollection = (await mongo).collection(
        "country_restriction"
      );
      const documentCount = await countryRestrictionCollection.countDocuments();

      if (documentCount === 0) {
        const data = await getCleanedResData();
        let countryRestrictions = [];
        for (const item of data) {
          const country = await countryCollection.findOne({ iso: item[0] });
          if (country) {
            const countryId = country._id;
            countryRestrictions.push({
              country: countryId,
              restrictions: item[2],
              procedures: item[1],
            });
          }
        }
        const res = await countryRestrictionCollection.insertMany(
          countryRestrictions
        );
        console.log(
          `Successfully inserted ${res?.insertedCount} rows into country_restriction collection...`
        );
      }
      resolve();
    } catch (err) {
      reject(err);
    }
  });
};

/**
 * Insert pcr clinic data from csv into mongodb.
 *
 * Checks if there are any data in the collection before insertion.
 */
const insertPCRClinics = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const pcrclinicCollection = (await mongo).collection("pcr_clinic");
      const documentCount = await pcrclinicCollection.countDocuments();

      if (documentCount === 0) {
        const data = await getCSVData("./datasets/pcr_clinics.csv");
        let pcrClinics = [];
        for (const item of data) {
          pcrClinics.push({
            clinic_name: item[0],
            location: item[1],
            opening_hours: item[2],
            age: item[3],
            contact_number: item[4],
          });
        }
        const res = await pcrclinicCollection.insertMany(pcrClinics);
        console.log(
          `Successfully inserted ${res?.insertedCount} rows into pcr_clinic collection...`
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
    await insertCountryVaccinations();
    await insertTravelRestrictions();
    await insertPCRClinics();
  } catch (err) {
    console.error(err);
  }
};
module.exports = seedNoSQLData;
