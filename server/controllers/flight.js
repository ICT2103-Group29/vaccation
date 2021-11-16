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
  search.includeCarriers = true;
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

/**
 * Packages the data into a format that is easier to consume.
 */
const getCleanedData = (data) => {
  const cleanedData = [];
  const itineries = data.Itineraries;
  const legs = data.Legs;
  const carriers = data.Carriers;
  const places = data.Places;

  itineries.forEach((itinerary) => {
    const price = itinerary.PricingOptions[0].Price;
    const outboundLeg = legs.find((leg) => leg.Id === itinerary.OutboundLegId);
    const inboundLeg = legs.find((leg) => leg.Id === itinerary.InboundLegId);

    const outbound = {
      Departure: outboundLeg?.Departure,
      Arrival: outboundLeg?.Arrival,
      Origin: places.find((place) => place.Id === outboundLeg?.OriginStation),
      Destination: places.find(
        (place) => place.Id === outboundLeg?.DestinationStation
      ),
      Carrier: carriers.find(
        (carrier) => carrier.Id === outboundLeg?.Carriers[0]
      ),
    };

    const inbound = {
      Departure: inboundLeg?.Departure,
      Arrival: inboundLeg?.Arrival,
      Origin: places.find((place) => place.Id === inboundLeg?.OriginStation),
      Destination: places.find(
        (place) => place.Id === inboundLeg?.DestinationStation
      ),
      Carrier: carriers.find(
        (carrier) => carrier.Id === inboundLeg?.Carriers[0]
      ),
    };

    cleanedData.push({
      Price: price,
      Outbound: outbound,
      Inbound: inbound,
    });
  });

  return cleanedData;
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
    res.json(getCleanedData(result.data));
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
        console.log("data", data);

  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
};
