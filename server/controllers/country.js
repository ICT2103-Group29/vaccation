const Country = require("../models/Country");

exports.findAll = (req, res) => {
  Country.getAll((err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send("Server error");
    } else {
      res.json(data);
    }
  });
};

exports.findOne = (req, res) => {
  Country.findByISO(req.params.iso, (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send("Server error");
    } else {
      res.json(data);
    }
  });
};
