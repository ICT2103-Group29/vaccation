const SELECT_ALL_COUNTRIES = "SELECT * FROM country";

const FIND_A_COUNTRY = "SELECT * FROM country WHERE iso = ?";

const SEARCH_COUNTRY =
  "SELECT * FROM country WHERE iso LIKE ? OR country_name LIKE ?";

module.exports = Object.freeze({
  SELECT_ALL_COUNTRIES,
  FIND_A_COUNTRY,
  SEARCH_COUNTRY,
});
