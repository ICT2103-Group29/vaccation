const sql = require("../config/mysql");
const connectMongoDB = require("../config/mongodb");
const query = require("../constants/queries/country");

const mongo = connectMongoDB();

const Country = (country) => {
  this.iso = country.iso;
  this.countryName = country.country_name;
};

/* ============== SQL ============== */

Country.getAll = () => {
  return new Promise((resolve, reject) => {
    sql.query(query.SELECT_ALL_COUNTRIES, (err, res) => {
      if (err) {
        return reject(err);
      }
      return resolve(res);
    });
  });
};

Country.findByISO = (iso) => {
  return new Promise((resolve, reject) => {
    sql.query(query.FIND_A_COUNTRY, iso, (err, res) => {
      if (err) {
        return reject(err);
      }
      return resolve(res);
    });
  });
};

Country.search = (search) => {
  return new Promise((resolve, reject) => {
    sql.query(
      query.SEARCH_COUNTRY,
      [`%${search}%`, `%${search}%`],
      (err, res) => {
        if (err) {
          return reject(err);
        }
        return resolve(res);
      }
    );
  });
};

Country.getRestrictions = (iso) => {
  return new Promise((resolve, reject) => {
    sql.query(query.SELECT_COUNTRY_RESTRICTIONS, iso, (err, res) => {
      if (err) {
        return reject(err);
      }
      return resolve(res);
    });
  });
};

Country.getNumberOfCountries = () => {
  return new Promise((resolve, reject) => {
    sql.query(query.COUNT_COUNTRIES, (err, res) => {
      if (err) {
        return reject(err);
      }
      return resolve(res);
    });
  });
};

Country.getOpenWithRestrictions = () => {
  return new Promise((resolve, reject) => {
    sql.query(query.COUNT_COUNTRIES_WITH_RESTRICTIONS, (err, res) => {
      if (err) {
        return reject(err);
      }
      return resolve(res);
    });
  });
};

Country.getWorldVacc = () => {
  return new Promise((resolve, reject) => {
    sql.query(query.COUNT_COUNTRIES_AND_VACC, (err, res) => {
      if (err) {
        return reject(err);
      }
      return resolve(res);
    });
  });
};

/* ============== NoSQL ============== */

Country.nosqlGetAll = async () => {
  const collection = (await mongo).collection("country");
  return collection.find({}).toArray();
};

Country.nosqlFindByISO = async (iso) => {
  const collection = (await mongo).collection("country");
  return collection.findOne({ iso: iso.toUpperCase() });
};

Country.nosqlSearch = async (search) => {
  const collection = (await mongo).collection("country");
  return collection.find({ $text: { $search: search } }).toArray();
};

Country.nosqlGetRestrictions = async (iso) => {
  const collection = (await mongo).collection("country_restriction");
  return collection
    .aggregate([
      {
        $match: { country: iso.toUpperCase() },
      },
      {
        $lookup: {
          from: "country",
          localField: "country",
          foreignField: "iso",
          as: "country",
        },
      },
    ])
    .toArray();
};

Country.nosqlGetNumberOfCountries = async () => {
  const collection = (await mongo).collection("country");
  return collection.countDocuments();
};

Country.nosqlGetOpenWithRestrictions = async () => {
  const collection = (await mongo).collection("country_restriction");
  return collection.countDocuments();
};

Country.nosqlGetWorldVacc = async () => {
  const countryCollection = (await mongo).collection("country");
  const countryVaccCollection = (await mongo).collection("country_vaccinated");
  const countryCount = await countryCollection.countDocuments();
  const countryVaccCount = await countryVaccCollection.countDocuments();
  return [countryCount, countryVaccCount];
};

module.exports = Country;
