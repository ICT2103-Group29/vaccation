const axios = require("axios").default;
const qs = require("qs");

/**
 * Create a skyscanner session and
 * return the location url
 */
const createSession = async (search) => {
  search.country = "SG";
  search.currency = "SGD";
  search.locale = "SG";
  search.locationSchema = "sky";
  search.apikey = "prtl6749387986743898559646983194";

  const options = {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    data: qs.stringify(search),
    url: "http://partners.api.skyscanner.net/apiservices/pricing/v1.0/",
  };
  const result = await axios(options);

  return result.headers.location;
};

exports.search = async (req, res) => {
  try {
    const location = await createSession(req.body);
    const options = {
      method: "GET",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      url: `${location}?apikey=prtl6749387986743898559646983194`,
    };
    const result = await axios(options);
    res.json(result.data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
};

exports.places = async (req, res) => {
  try {
    const options = {
      method: "GET",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      url: `http://partners.api.skyscanner.net/apiservices/autosuggest/v1.0/SG/SGP/SG/?query=${req.params.country}&apiKey=prtl6749387986743898559646983194`,
    };
    const result = await axios(options);
    const data = result.data.Places.filter((place) => place.CityId !== "-sky");
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
};
