const SELECT_ALL_COUNTRIES = "SELECT * FROM country";

const FIND_A_COUNTRY = "SELECT * FROM country WHERE iso = ?";

module.exports = Object.freeze({
  SELECT_ALL_COUNTRIES,
  FIND_A_COUNTRY,
});
