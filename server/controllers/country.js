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

exports.search = (req, res) => {
  Country.search(req.body.search, (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send("Server error");
    } else {
      res.json(data);
    }
  });
};

exports.getRestrictions = (req, res) => {
  Country.getRestrictions(req.params.iso, (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send("Server error");
    } else {
      res.json(data);
    }
  });
};

exports.getOpenWithRestrictions = (req, res) => {
  Country.getOpenWithRestrictions((err, open) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Server error");
    }
    res.json(open[0]);
  });
};

exports.getWorldwideVaccPercent = (req, res) => {
  Country.getWorldVacc((err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Server error");
    }
    console.log(data[0].cnt, data[1].cnt);
    res.json({
      vaccPercent: ((data[1].cnt / data[0].cnt) * 100).toFixed(2) + "%",
    });
  });
};
