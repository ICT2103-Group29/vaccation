const Pcr_Clinic = require("../models/Pcr_Clinic");

exports.findAll = (req, res) => {
    Pcr_Clinic.getAll((err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send("Server error");
        } else {
            res.json(data);
        }
    });
};

exports.findOne = (req, res) => {
    Pcr_Clinic.findByClinicId(req.params.clinic_id, (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send("Server error");
        } else {
            res.json(data);
        }
    });
};

exports.search = (req, res) => {
    Pcr_Clinic.search(req.body.search, (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send("Server error");
        } else {
            res.json(data);
        }
    });
};


