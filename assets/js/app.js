const getAllCountriesData = () => {
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => displayAllCountries(data))
}


const displayAllCountries = countries => {
    const allCountriesCards = document.getElementById("allCountriesCards");
    countries.forEach(country => {
        const countryName = country.name.common;
        const countryOfficialName = country.name.official;
        const countryCapital = country.capital?.[0];
        const countryCode = country.cca2;

        const newCountryCardDivTag = document.createElement('div');
        newCountryCardDivTag.classList.add('country-card');
        newCountryCardDivTag.innerHTML =  `<h3 class="country-name">Name: ${countryName}</h3>
            <p>Official Name: ${countryOfficialName}</p>
            <p>Capital: ${countryCapital}</p>
            <button type="button" class="view-details-btn" onclick="displayCountryFullDetails('${countryCode}')">View Details</button>`;

        allCountriesCards.appendChild(newCountryCardDivTag);
        
    });
}

getAllCountriesData();


const displayCountryFullDetails = name => {
    
}