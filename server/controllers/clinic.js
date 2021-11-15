const PcrClinic = require("../models/Clinic");

/* ============== SQL ============== */

exports.findAll = async (req, res) => {
  try {
    const data = await PcrClinic.getAll();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
};

exports.findSome = async (req, res) => {
  try {
    const data = await PcrClinic.getSome(req.params.number);
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
};

exports.findOne = async (req, res) => {
  try {
    const data = await PcrClinic.findByClinicId(req.params.clinicId);
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
};

exports.search = async (req, res) => {
  try {
    const data = await PcrClinic.search(req.body.search);
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
};

/* ============== NoSQL ============== */

exports.nosqlFindAll = async (req, res) => {
  try {
    const data = await PcrClinic.getAll();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
};

exports.nosqlFindOne = async (req, res) => {
  try {
    const data = await PcrClinic.findByClinicId(req.params.clinicId);
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
};

exports.nosqlSearch = async (req, res) => {
  try {
    const data = await PcrClinic.search(req.body.search);
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
};
