const Country = require("../models/Country");

exports.findAll = (req, res) => {
  Country.getAll((err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send("Server error");
    } else {
      console.log(data);
      res.json(data);
    }
  });
};
