const SELECT_ALL_COUNTRIES = "SELECT * FROM country";

const FIND_A_COUNTRY = "SELECT * FROM country WHERE iso = ?";

const SEARCH_COUNTRY =
  "SELECT * FROM country WHERE iso LIKE ? OR country_name LIKE ?";

const SELECT_COUNTRY_RESTRICTIONS = `SELECT C.iso, C.country_name, CR.restrictions, CR.procedures 
FROM country C 
JOIN country_restriction CR 
ON C.iso = CR.iso
WHERE C.iso = ?`;

const COUNT_COUNTRIES = "SELECT COUNT(*) total FROM country";

const COUNT_COUNTRIES_WITH_RESTRICTIONS =
  "SELECT COUNT(*) open FROM country_restriction";

const COUNT_COUNTRIES_AND_VACC = `SELECT COUNT(*) cnt FROM country
UNION
SELECT COUNT(*) cnt FROM country_vaccinated`;

module.exports = Object.freeze({
  SELECT_ALL_COUNTRIES,
  FIND_A_COUNTRY,
  SEARCH_COUNTRY,
  SELECT_COUNTRY_RESTRICTIONS,
  COUNT_COUNTRIES,
  COUNT_COUNTRIES_WITH_RESTRICTIONS,
  COUNT_COUNTRIES_AND_VACC,
});
