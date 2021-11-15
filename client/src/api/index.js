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

export const createSession = (postData) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  console.log("country", postData);

  var body = JSON.stringify(postData);
  return API.post("flights/search", body, config);
};

export const searchFlight = (postData) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  console.log("country", postData);

  var body = JSON.stringify(postData);
  return API.post("flights/search", body, config);
};;

