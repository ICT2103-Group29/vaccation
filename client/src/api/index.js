import API from "axios";
API.defaults.baseURL = "http://localhost:5000/api/nosql";

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

export const getPCRClinics = () => API.get("clinics/get/10");
