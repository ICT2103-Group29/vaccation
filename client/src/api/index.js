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

export const booking = (postData) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  var body = JSON.stringify(postData);
  console.log("body for createSession", body);
  return API.post("flights/search", body, config);
};
export const places = (place) => API.get(`flights/places/${place}`);

  

export const getPCRClinics = () => API.get("clinics/get/10");
