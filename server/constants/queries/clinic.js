const SELECT_ALL_PCR_CLINIC = "SELECT * FROM pcr_clinic";

const SELECT_SOME_PCR_CLINIC = "SELECT * FROM pcr_clinic LIMIT ?";

const FIND_A_PCR_CLINIC = "SELECT * FROM pcr_clinic WHERE clinic_id = ?";

const SEARCH_PCR_CLINIC =
  "SELECT * FROM pcr_clinic WHERE clinic_name LIKE ? OR location LIKE ?";

module.exports = Object.freeze({
  SELECT_ALL_PCR_CLINIC,
  SELECT_SOME_PCR_CLINIC,
  FIND_A_PCR_CLINIC,
  SEARCH_PCR_CLINIC,
});
