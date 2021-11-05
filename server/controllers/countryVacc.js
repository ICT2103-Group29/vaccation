const CountryVacc = require("../models/CountryVacc");

exports.findAll = async (req, res) => {
  try {
    const data = await CountryVacc.getAll();
    res.json(data);
  } catch (error) {
    console.error(err);
    res.status(500).send("Server error");
  }
};

exports.findOne = async (req, res) => {
  try {
    const data = await CountryVacc.findByISO(req.params.iso);
    res.json(data);
  } catch (error) {
    console.error(err);
    res.status(500).send("Server error");
  }
};

exports.search = async (req, res) => {
  try {
    const data = await CountryVacc.search(req.body.search);
    res.json(data);
  } catch (error) {
    console.error(err);
    res.status(500).send("Server error");
  }
};
