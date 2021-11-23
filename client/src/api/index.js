import API from "axios";
API.defaults.baseURL = "http://localhost:5000/api";

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

export const searchRestrictions = (search) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  return API.post("countries/restrictions/search", { search }, config);
};

export const getRestrictions = () =>
  API.get("countries/all/restrictions/get/10");

export const getBookingDetails = (bookingId) =>
  API.get(`bookings/${bookingId}`);
