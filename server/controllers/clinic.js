const PcrClinic = require("../models/Clinic");

exports.findAll = (req, res) => {
  PcrClinic.getAll((err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send("Server error");
    } else {
      res.json(data);
    }
  });
};

exports.findOne = (req, res) => {
  PcrClinic.findByClinicId(req.params.clinicId, (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send("Server error");
    } else {
      res.json(data);
    }
  });
};

exports.search = (req, res) => {
  PcrClinic.search(req.body.search, (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send("Server error");
    } else {
      res.json(data);
    }
  });
};
