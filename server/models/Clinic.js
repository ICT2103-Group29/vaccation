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

Clinic.getAll = () => {
  return new Promise((resolve, reject) => {
    sql.query(query.SELECT_ALL_PCR_CLINIC, (err, res) => {
      if (err) {
        return reject(err);
      }
      return resolve(res);
    });
  });
};

Clinic.findByClinicId = (clinic_id) => {
  return new Promise((resolve, reject) => {
    sql.query(query.FIND_A_PCR_CLINIC, clinic_id, (err, res) => {
      if (err) {
        return reject(err);
      }
      return resolve(res);
    });
  });
};

Clinic.search = (search) => {
  return new Promise((resolve, reject) => {
    sql.query(
      query.SEARCH_PCR_CLINIC,
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

module.exports = Clinic;
