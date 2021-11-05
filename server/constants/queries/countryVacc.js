
const SELECT_ALL_COUNTRIES_VACCINATED = `SELECT CV.cv_id, CV.iso, C.country_name, CV.total_fully_vacc, CV.total_vacc, CV.vacc_percent
FROM country_vaccinated CV
JOIN country C 
on CV.iso = C.iso`;


const FIND_A_COUNTRY_VACCINATED = `SELECT CV.cv_id, CV.iso, C.country_name, CV.total_fully_vacc, CV.total_vacc, CV.vacc_percent
FROM country_vaccinated CV
JOIN country C 
on CV.iso = C.iso
WHERE CV.iso LIKE ?`;


const SEARCH_COUNTRY_VACCINATED = `SELECT CV.cv_id, CV.iso, C.country_name, CV.total_fully_vacc, CV.total_vacc, CV.vacc_percent
FROM country_vaccinated CV
JOIN country C 
on CV.iso = C.iso
WHERE CV.iso LIKE ? OR C.country_name LIKE ?`;


module.exports = Object.freeze( {
   SELECT_ALL_COUNTRIES_VACCINATED,
   FIND_A_COUNTRY_VACCINATED,
   SEARCH_COUNTRY_VACCINATED, 
});