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
  const countryCollection = (await mongo).collection("country");
  return countryCollection.find({}).toArray();
};

Country.nosqlFindByISO = async (iso) => {
  const countryCollection = (await mongo).collection("country");
  return countryCollection.findOne({ iso: iso.toUpperCase() });
};

Country.nosqlSearch = async (search) => {
  const countryCollection = (await mongo).collection("country");
  return countryCollection.find({ $text: { $search: search } }).toArray();
};

Country.nosqlGetRestrictions = async (iso) => {
  const countryRestrictionCollection = (await mongo).collection(
    "country_restriction"
  );
  return countryRestrictionCollection.find({ iso });
};

Country.nosqlGetNumberOfCountries = () => {
  return new Promise((resolve, reject) => {
    sql.query(query.COUNT_COUNTRIES, (err, res) => {
      if (err) {
        return reject(err);
      }
      return resolve(res);
    });
  });
};

Country.nosqlGetOpenWithRestrictions = () => {
  return new Promise((resolve, reject) => {
    sql.query(query.COUNT_COUNTRIES_WITH_RESTRICTIONS, (err, res) => {
      if (err) {
        return reject(err);
      }
      return resolve(res);
    });
  });
};

Country.nosqlGetWorldVacc = () => {
  return new Promise((resolve, reject) => {
    sql.query(query.COUNT_COUNTRIES_AND_VACC, (err, res) => {
      if (err) {
        return reject(err);
      }
      return resolve(res);
    });
  });
};

module.exports = Country;
