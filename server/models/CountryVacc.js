const query = require("../constants/queries/countryVacc");
const sql = require("../config/mysql");

const Country_Vaccinated = (country_vaccinated) => {
  this.cv_id = country_vaccinated.cv_id;
  this.iso = country_vaccinated.iso;
  this.total_fully_vacc = country_vaccinated.total_fully_vacc;
  this.total_vacc = country_vaccinated.total_vacc;
  this.vacc_percent = country_vaccinated.vacc_percent;
};

Country_Vaccinated.getAll = () => {
  return new Promise((resolve, reject) => {
    sql.query(query.SELECT_ALL_COUNTRIES_VACCINATED, (err, res) => {
      if (err) {
        return reject(err);
      }
      return resolve(res);
    });
  });
};

Country_Vaccinated.findByISO = (iso) => {
  return new Promise((resolve, reject) => {
    sql.query(query.FIND_A_COUNTRY_VACCINATED, iso, (err, res) => {
      if (err) {
        return reject(err);
      }
      return resolve(res);
    });
  });
};

Country_Vaccinated.search = (search) => {
  return new Promise((resolve, reject) => {
    sql.query(
      query.SEARCH_COUNTRY_VACCINATED,
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

module.exports = Country_Vaccinated;
