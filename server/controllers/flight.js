const axios = require("axios").default;
const qs = require("qs");

exports.createSession = async (req, res) => {
  try {
    const options = {
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      data: qs.stringify(req.body),
      url: "http://partners.api.skyscanner.net/apiservices/pricing/v1.0/",
    };
    const result = await axios(options);
    console.log(result.headers.location);
    res.json({ location: result.headers.location });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
};
