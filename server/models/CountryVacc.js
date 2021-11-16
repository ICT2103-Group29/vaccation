const sql = require("../config/mysql");
const connectMongoDB = require("../config/mongodb");
const query = require("../constants/queries/countryVacc");

const mongo = connectMongoDB();

const Country_Vaccinated = (country_vaccinated) => {
  this.cv_id = country_vaccinated.cv_id;
  this.iso = country_vaccinated.iso;
  this.total_fully_vacc = country_vaccinated.total_fully_vacc;
  this.total_vacc = country_vaccinated.total_vacc;
  this.vacc_percent = country_vaccinated.vacc_percent;
};

/* ============== SQL ============== */

Country_Vaccinated.getAll = () => {
  return new Promise((resolve, reject) => {
    sql.query(query.SELECT_ALL_COUNTRIES_VACCINATED, (err, res) => {
      if (err) {
        return reject(err);
      }
      return resolve(res);
    });
  });
};

Country_Vaccinated.findByISO = (iso) => {
  return new Promise((resolve, reject) => {
    sql.query(query.FIND_A_COUNTRY_VACCINATED, iso, (err, res) => {
      if (err) {
        return reject(err);
      }
      return resolve(res);
    });
  });
};

Country_Vaccinated.search = (search) => {
  return new Promise((resolve, reject) => {
    sql.query(
      query.SEARCH_COUNTRY_VACCINATED,
      [`%${search}%`, `%${search}%`],
      (err, res) => {
        if (err) {
          return reject(err);
        }
        return resolve(res);
      }
    );
  });
};

/* ============== NoSQL ============== */

Country_Vaccinated.nosqlGetAll = async () => {
  const collection = (await mongo).collection("country_vaccinated");
  return collection
    .aggregate([
      {
        $lookup: {
          from: "country",
          localField: "country",
          foreignField: "iso",
          as: "country",
        },
      },
      { $unwind: "$country" },
      { $match: {} },
    ])
    .toArray();
};

Country_Vaccinated.nosqlFindByISO = async (iso) => {
  const collection = (await mongo).collection("country_vaccinated");
  return collection
    .aggregate([
      { $match: { country: iso.toUpperCase() } },
      {
        $lookup: {
          from: "country",
          localField: "country",
          foreignField: "iso",
          as: "country",
        },
      },
    ])
    .toArray();
};

Country_Vaccinated.nosqlSearch = async (search) => {
  const collection = (await mongo).collection("country_vaccinated");
  return collection
    .aggregate([
      {
        $lookup: {
          from: "country",
          localField: "country",
          foreignField: "iso",
          as: "country",
        },
      },
      { $unwind: "$country" },
      { $match: { "country.country_name": search } },
    ])
    .toArray();
};

module.exports = Country_Vaccinated;
