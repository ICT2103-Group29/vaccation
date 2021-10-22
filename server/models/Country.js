const query = require("../constants/queries/country");
const sql = require("../config/mysql");

const Country = (country) => {
  this.iso = country.iso;
  this.countryName = country.country_name;
};

Country.getAll = (result) => {
  sql.query(query.SELECT_ALL_COUNTRIES, (err, res) => {
    if (err) {
      console.error("error:", err);
      result(err, null);
      return;
    }
    result(null, res);
  });
};

Country.findByISO = (iso, result) => {
  sql.query(query.FIND_A_COUNTRY, iso, (err, res) => {
    if (err) {
      console.error("error:", err);
      result(err, null);
      return;
    }
    result(null, res);
  });
};

Country.search = (search, result) => {
  sql.query(
    query.SEARCH_COUNTRY,
    [`%${search}%`, `%${search}%`],
    (err, res) => {
      if (err) {
        console.error("error:", err);
        result(err, null);
        return;
      }
      result(null, res);
    }
  );
};

Country.getRestrictions = (iso, result) => {
  sql.query(query.SELECT_COUNTRY_RESTRICTIONS, iso, (err, res) => {
    if (err) {
      console.error("error:", err);
      result(err, null);
      return;
    }
    result(null, res);
  });
};

module.exports = Country;
