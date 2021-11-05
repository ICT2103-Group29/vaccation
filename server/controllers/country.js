const Country = require("../models/Country");

exports.findAll = async (req, res) => {
  try {
    const data = await Country.getAll();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
};

exports.findOne = async (req, res) => {
  try {
    const data = await Country.findByISO(req.params.iso);
    res.json(data[0]);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
};

exports.search = async (req, res) => {
  try {
    const data = await Country.search(req.body.search);
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
};

exports.getRestrictions = async (req, res) => {
  try {
    const data = await Country.getRestrictions(req.params.iso);
    res.json(data);
  } catch (error) {
    console.error(err);
    res.status(500).send("Server error");
  }
};

exports.getOpenWithRestrictions = async (req, res) => {
  try {
    const data = await Country.getOpenWithRestrictions();
    res.json(data[0]);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
};

exports.getWorldwideVaccPercent = async (req, res) => {
  try {
    const data = await Country.getWorldVacc();
    const vacc = data[1].cnt;
    const total = data[0].cnt;
    res.json({
      vaccPercent: ((vacc / total) * 100).toFixed(2) + "%",
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
};
