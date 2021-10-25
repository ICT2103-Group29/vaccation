const Country_Vaccinated = require("../models/Country_Vaccinated");

exports.findAll = (req, res) => {
    Country_Vaccinated.getAll((err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send("Server error");
        } else {
            res.json(data);
        }
    });
};

exports.findOne = (req, res) => {
    Country_Vaccinated.findByISO(req.params.iso, (err, data) => {
    if (err) {
        console.error(err);
        res.status(500).send("Server error");
    } else {
      res.json(data);
    }
    });
};

exports.search = (req, res) => {
    Country_Vaccinated.search(req.body.search, (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send("Server error");
        } else {
            res.json(data);
        }
    });
};