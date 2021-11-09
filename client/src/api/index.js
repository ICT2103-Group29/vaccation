import { triggerFocus } from "antd/lib/input/Input";
import API from "axios";
API.defaults.baseURL = "http://localhost:5000/api/";

export const getOpenCountries = () => API.get("countries/open");

export const getWorldWideVaccPercent = () =>
  API.get("countries/worldwide/vacc");

export const getCountries = () => API.get("countries");
export const getVaccData = () => API.get("countries/vacc");
export const searchPCRClinic = (search) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  return API.post("clinics/search", { search }, config);
};

export const fetchFlights = (
  originplace,
  destinationplace,
  outboundate,
  inboundate,
  adults
) => {
  const config = {
    method: "POST",
    headers: {
      apikey: "prtl6749387986743898559646983194",
    },
  };
  return API.post(
    `http://partners.api.skyscanner.net/apiservices/pricing/v1.0/SG/SGD/en-SG/iata/${originplace}/${destinationplace}/${outboundate}/${inboundate}/${adults}`,
    {
      originplace,
      destinationplace,
      outboundate,
      inboundate,
      adults,
    },
    config
  );
};
