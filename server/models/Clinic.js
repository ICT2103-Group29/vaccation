const query = require("../constants/queries/pcr_clinic");
const sql = require("../config/mysql");

const Pcr_Clinic = (pcr_clinic) => {
    this.clinic_id = pcr_clinic.clinic_id;
    this.clinic_name = pcr_clinic.clinic_name;
    this.location = pcr_clinic.location;
    this.opening_hours = pcr_clinic.opening_hours;
    this.age = pcr_clinic.age;
    this.contact_number = pcr_clinic.contact_number;
};

Pcr_Clinic.getAll = (result) => {
    sql.query(query.SELECT_ALL_PCR_CLINIC, (err, res) => {
        if (err) {
            console.error("error:", err);
            result(null, err);
            return;
        }
        result(null, res);
    });
};

Pcr_Clinic.findByClinicId = (clinic_id, result) => {
    sql.query(query.FIND_A_PCR_CLINIC, clinic_id, (err, res) => {
        if (err) {
            console.error("error:", err);
            result(null, err);
            return;
        }
        result(null, res);
    });
};

Pcr_Clinic.search = (search, result) => {
    sql.query(
        query.SEARCH_PCR_CLINIC,
        [`%${search}%`, `%${search}%`],
        (err, res) => {
            if (err) {
                console.error("error:", err);
                result(null, err);
                return;
            }
            result(null, res);
        }
    );
};



module.exports = Pcr_Clinic;
