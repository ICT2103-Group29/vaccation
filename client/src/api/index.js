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
  console.log("country postData", postData);

  var body = JSON.stringify(postData);
  console.log("body for createSession", body);
  return API.post("flights/search", body, config);
};

// export const searchFlight = (postData) => {
//   const config = {
//     headers: {
//       "Content-Type": "application/json",
//     },
//   };
//   console.log("country", postData);

//   var body = JSON.stringify(postData);
//   return API.post("flights/search", body, config);
// };

export const places = (place) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  console.log("the place in index.js", place);

  var body = JSON.stringify(place);

  console.log("body for places", body);
  return API.get("flights/places", body, config);
};

export const getPCRClinics = () => API.get("clinics/get/10");
