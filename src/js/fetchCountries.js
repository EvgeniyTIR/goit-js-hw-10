import { Notify } from 'notiflix/build/notiflix-notify-aio';
const options = 'fields=name,capital,population,flags,languages'

export const fetchCountries = (name, options) => {
  return fetch(`https://restcountries.com/v3.1/name/${name}?${options}`)
    .then((res) => {
            if (!res.ok) {
                throw new Error(res.statusText);
            }
            return res.json();
        })
        .catch(error => {
            console.log(error);
            Notify.failure('responce error in fetch');
        })
};
