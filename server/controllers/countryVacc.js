const CountryVacc = require("../models/CountryVacc");

/* ============== SQL ============== */

exports.findAll = async (req, res) => {
  try {
    const data = await CountryVacc.getAll();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
};

exports.findOne = async (req, res) => {
  try {
    const data = await CountryVacc.findByISO(req.params.iso);
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
};

exports.search = async (req, res) => {
  try {
    const data = await CountryVacc.search(req.body.search);
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
};

/* ============== NoSQL ============== */

exports.nosqlFindAll = async (req, res) => {
  try {
    const data = await CountryVacc.nosqlGetAll();
    const cleanedData = [];
    data.forEach((item) => {
      cleanedData.push({
        total_vacc: item.total_vacc,
        total_fully_vacc: item.total_fully_vacc,
        vacc_percent: item.vacc_percent,
        country_name: item.country.country_name,
      });
    });
    res.json(cleanedData);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
};

exports.nosqlFindOne = async (req, res) => {
  try {
    const data = await CountryVacc.nosqlFindByISO(req.params.iso);
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
};

exports.nosqlSearch = async (req, res) => {
  try {
    const data = await CountryVacc.nosqlSearch(req.body.search);
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
};
