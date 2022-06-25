export const buildCountriesList = (countries) => {      

    const markupCountries = countries
        .reduce((acc, { flags, name }) => acc + `<li class="country-item" >
            <img src="${flags.svg}" alt="flag" width="30px" />
            <span class="country-item__text"><b>${name.common}</b></span>                
        </li>`, "");
    
    refs.countryList.innerHTML = markupCountries;
};

export const buildCountryInfo = (countries) => {      

    const markupCountry = countries
        .map(({ name, capital, population, flags, languages }) => {
                return `<div class="country-info__wrap">
                        <img class="country-info__image"
                        src = "${flags.svg}"
                        alt = "${name.official}"
                        width = "20px"
                        />
                        <span class="country-info__title"><b>${name.common}</b></span>
                    </div>
                    <ul class="country-info__list">
                        <li class="country-info__item"><b>Capital:</b> ${capital[0]}</li>
                        <li class="country-info__item"><b>Population:</b> ${population}</li>
                        <li class="country-info__item"><b>Languages: </b> ${Object.values(languages)}</li>
                    </ul> `;
        })
        .join();
    
    refs.countryInfo.innerHTML = markupCountry;
};