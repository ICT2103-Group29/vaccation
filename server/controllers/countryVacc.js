const CountryVacc = require("../models/CountryVacc");

exports.findAll = (req, res) => {
  CountryVacc.getAll((err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send("Server error");
    } else {
      res.json(data);
    }
  });
};

exports.findOne = (req, res) => {
  CountryVacc.findByISO(req.params.iso, (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send("Server error");
    } else {
      res.json(data);
    }
  });
};

exports.search = (req, res) => {
  CountryVacc.search(req.body.search, (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send("Server error");
    } else {
      res.json(data);
    }
  });
};
