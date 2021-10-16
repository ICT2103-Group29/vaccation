/* SELECT statements */
const SELECT_COUNTRY_TOP1 = "SELECT * FROM country LIMIT 1";
const SELECT_COUNTRYVACC_TOP1 = "SELECT * FROM country_vaccinated LIMIT 1";
const SELECT_COUNTRYRES_TOP1 = "SELECT * FROM country_restriction LIMIT 1";
const SELECT_PCRCLINIC_TOP1 = "SELECT * FROM pcr_clinic LIMIT 1";

/* INSERT statements */
const INSERT_COUNTRY = "INSERT INTO country (country_name, iso) VALUES ?";
const INSERT_COUNTRYVACC =
  "INSERT INTO country_vaccinated (iso, total_fully_vacc, total_vacc, vacc_percent) VALUES ?";
const INSERT_PCRCLINIC =
  "INSERT INTO pcr_clinic (clinic_name, location, opening_hours, age, contact_number) VALUES ?";

module.exports = Object.freeze({
  SELECT_COUNTRY_TOP1,
  SELECT_COUNTRYVACC_TOP1,
  SELECT_COUNTRYRES_TOP1,
  SELECT_PCRCLINIC_TOP1,
  INSERT_COUNTRY,
  INSERT_COUNTRYVACC,
  INSERT_PCRCLINIC,
});
