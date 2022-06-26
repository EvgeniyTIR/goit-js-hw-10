import { fetchCountries } from './js/fetchCountries';
import { buildCountriesList, buildCountryInfo } from './js/renderCountry';
import { refs } from './js/refs';
import './css/styles.css';
import './css/reset.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const debounce = require('lodash.debounce');
const DEBOUNCE_DELAY = 300;

refs.inputCountries.addEventListener('input', debounce(inputHandler, DEBOUNCE_DELAY));

function inputHandler(event) {
    
    clearHTML(); 

    const handleCountry = event.target.value.trim();
    console.log(handleCountry);

    fetchCountries(handleCountry).then(countries => {
        while (handleCountry !== "" && countries !== undefined) {
            if (countries.length >= 2 && countries.length <= 10) {
                buildCountriesList(countries);
            } else if (countries.length === 1) {
                buildCountryInfo(countries);
            } else {
                Notify.info(`Too many matches found. Please enter a more specific name.`);
            };
        };
    }).catch(error => {
        console.log(error);
            Notify.failure('Oops, there is no country with that name');
        }); 
};



function clearHTML() {
    refs.countryList.innerHTML = '';
    refs.countryInfo.innerHTML = '';
}