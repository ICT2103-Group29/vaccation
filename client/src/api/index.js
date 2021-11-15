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

  console.log("search", search);
  return API.post("clinics/search", { search }, config);
};

export const createSession = (
  originplace,
  destinationplace,
  outbounddate,
  inbounddate,
  adults
) => {
  const config = {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  };
  console.log("origin place", originplace);
  console.log(" destination place", destinationplace);
  console.log("outbounddate", outbounddate);
  console.log(" inbounddate", inbounddate);
  console.log("adults", adults);

  // return API.post(
  //   `http://partners.api.skyscanner.net/apiservices/pricing/v1.0/SG/SGD/en-SG/iata/${originplace}/${destinationplace}/${outbounddate}/${inbounddate}/${adults}/prtl6749387986743898559646983194`,

  //   config,
  //   { mode: "no-cors" }
  // );
    return API.post("/creation-session", { originplace,destinationplace,outbounddate,inbounddate, adults }, config);

};;
