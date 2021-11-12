const Country = require("../models/Country");

/* ============== SQL ============== */

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

/* ============== NoSQL ============== */

exports.nosqlFindAll = async (req, res) => {
  try {
    const data = await Country.nosqlGetAll();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
};

exports.nosqlFindOne = async (req, res) => {
  try {
    const data = await Country.nosqlFindByISO(req.params.iso);
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
};

exports.nosqlSearch = async (req, res) => {
  try {
    const data = await Country.nosqlSearch(req.body.search);
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
};

exports.nosqlGetRestrictions = async (req, res) => {
  try {
    const data = await Country.nosqlGetRestrictions(req.params.iso);
    res.json(data);
  } catch (error) {
    console.error(err);
    res.status(500).send("Server error");
  }
};

exports.nosqlGetOpenWithRestrictions = async (req, res) => {
  try {
    const data = await Country.nosqlGetOpenWithRestrictions();
    res.json(data[0]);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
};

exports.nosqlGetWorldwideVaccPercent = async (req, res) => {
  try {
    const data = await Country.nosqlGetWorldVacc();
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
