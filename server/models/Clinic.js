const query = require("../constants/queries/clinic");
const sql = require("../config/mysql");

const Clinic = (Clinic) => {
  this.clinic_id = Clinic.clinic_id;
  this.clinic_name = Clinic.clinic_name;
  this.location = Clinic.location;
  this.opening_hours = Clinic.opening_hours;
  this.age = Clinic.age;
  this.contact_number = Clinic.contact_number;
};

Clinic.getAll = (result) => {
  sql.query(query.SELECT_ALL_Clinic, (err, res) => {
    if (err) {
      console.error("error:", err);
      result(null, err);
      return;
    }
    result(null, res);
  });
};

Clinic.findByClinicId = (clinic_id, result) => {
  sql.query(query.FIND_A_Clinic, clinic_id, (err, res) => {
    if (err) {
      console.error("error:", err);
      result(null, err);
      return;
    }
    result(null, res);
  });
};

Clinic.search = (search, result) => {
  sql.query(query.SEARCH_Clinic, [`%${search}%`, `%${search}%`], (err, res) => {
    if (err) {
      console.error("error:", err);
      result(null, err);
      return;
    }
    result(null, res);
  });
};

module.exports = Clinic;
