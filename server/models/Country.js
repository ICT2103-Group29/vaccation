const query = require("../constants/queries/country");
const sql = require("../config/mysql");

const Country = (country) => {
  this.iso = country.iso;
  this.countryName = country.country_name;
};

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

module.exports = Country;
