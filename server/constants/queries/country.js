const SELECT_ALL_COUNTRIES = "SELECT * FROM country";

const FIND_A_COUNTRY = "SELECT * FROM country WHERE iso = ?";

const SEARCH_COUNTRY =
  "SELECT * FROM country WHERE iso LIKE ? OR country_name LIKE ?";

const SELECT_COUNTRY_RESTRICTIONS = `SELECT C.iso, C.country_name, CR.restrictions, CR.procedures 
FROM country C 
JOIN country_restriction CR 
ON C.iso = CR.iso
WHERE C.iso = ?`;

module.exports = Object.freeze({
  SELECT_ALL_COUNTRIES,
  FIND_A_COUNTRY,
  SEARCH_COUNTRY,
  SELECT_COUNTRY_RESTRICTIONS,
});
