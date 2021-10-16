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
      result(null, err);
      return;
    }
    result(null, res);
  });
};

module.exports = Country;
