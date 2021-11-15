const axios = require("axios").default;
const qs = require("qs");

const createSession = async (search) => {
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
    const url = `${location}?apikey=prtl6749387986743898559646983194`;
    const options = {
      method: "GET",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      url: url,
    };
    const result = await axios(options);
    res.json(result.data);
    console.log("result", result.data);
    console.log("res-json", res.json(result.data));
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
};
