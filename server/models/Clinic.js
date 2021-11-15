const sql = require("../config/mysql");
const connectMongoDB = require("../config/mongodb");
const query = require("../constants/queries/clinic");

const mongo = connectMongoDB();

const Clinic = (Clinic) => {
  this.clinic_id = Clinic.clinic_id;
  this.clinic_name = Clinic.clinic_name;
  this.location = Clinic.location;
  this.opening_hours = Clinic.opening_hours;
  this.age = Clinic.age;
  this.contact_number = Clinic.contact_number;
};

/* ============== SQL ============== */

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

Clinic.getSome = (number) => {
  return new Promise((resolve, reject) => {
    sql.query(query.SELECT_SOME_PCR_CLINIC, parseInt(number), (err, res) => {
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

/* ============== NoSQL ============== */

Clinic.nosqlGetAll = async () => {
  const collection = (await mongo).collection("pcr_clinic");
  return collection.find({}).toArray();
};

Clinic.nosqlGetSome = async (number) => {
  const collection = (await mongo).collection("pcr_clinic");
  return collection.find({}).limit(number).toArray();
};

Clinic.nosqlFindByClinicId = async (clinic_id) => {
  const collection = (await mongo).collection("pcr_clinic");
  return collection.findOne({ clinic_id });
};

Clinic.nosqlSearch = async (search) => {
  const collection = (await mongo).collection("pcr_clinic");
  return collection.find({ $text: { $search: search } }).toArray();
};

module.exports = Clinic;
