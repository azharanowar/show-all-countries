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
        newCountryCardDivTag.innerHTML = `<h3 class="country-name">Name: ${countryName}</h3>
            <p>Official Name: ${countryOfficialName}</p>
            <p>Capital: ${countryCapital}</p>
            <button type="button" class="view-details-btn" onclick="getCountryDataByCountryCode('${countryCode}')">View Details</button>`;

        allCountriesCards.appendChild(newCountryCardDivTag);

    });
}

getAllCountriesData();


const getCountryDataByCountryCode = countryCode => {
    const url = `https://restcountries.com/v3.1/alpha/${countryCode}`
    fetch(url)
        .then(response => response.json())
        .then(data => displayCountryFullDetails(data))
}


const displayCountryFullDetails = country => {
    const countryName = country[0].name.common;
    const countryOfficialName = country[0].name.official;
    const countryFlagsSVG = country[0].flags.svg;
    const countryTotalArea = country[0].area;
    const countryPopulation = country[0].population;
    const countryRegion = country[0].region;
    const countryTimeZone = country[0].timezones[0];
    const countryIndependent = country[0].independent ? "Independent Country." : "Not Independent Country.";
    const countryLandlocked = country[0].landlocked ? "Landlocked Country." : "Not Landlocked Country.";

    let countryCurrencies = country[0].currencies;
    let countryAvailableCurrencies = '';
    for (currency in countryCurrencies) {
        countryAvailableCurrencies += `Name: ${countryCurrencies[currency].name}(${currency}), Symbol: ${countryCurrencies[currency].symbol},`;
    }

    const countryLatCode = country[0].latlng[0];
    const countryLongCode = country[0].latlng[1];

    document.getElementById("countryFlagSVG").src = countryFlagsSVG;
    document.getElementById("displayCountryName").innerText = countryName;
    document.getElementById("displayCountryOfficialName").innerText = countryOfficialName;
    document.getElementById("displayCountryTotalArea").innerText = countryTotalArea;
    document.getElementById("displayCountryPopulation").innerText = countryPopulation;
    document.getElementById("displayCountryRegion").innerText = countryRegion;
    document.getElementById("displayCountryCurrencies").innerText = countryAvailableCurrencies;
    document.getElementById("displayCountryTimeZone").innerText = countryTimeZone;
    document.getElementById("displayCountryIndependentStatus").innerText = countryIndependent;
    document.getElementById("displayCountryLandlocked").innerText = countryLandlocked;

    document.getElementById("countryDetailedInformationSection").style.display = 'block';

    showGoogleMapByLatLong(countryLatCode, countryLongCode);
}



const showGoogleMapByLatLong = (latCode = 0, longCode = 0) => {
    //
}


const objTest = [
    {
        "name": {
            "common": "Bangladesh",
            "official": "People's Republic of Bangladesh",
            "nativeName": {
                "ben": {
                    "official": "বাংলাদেশ গণপ্রজাতন্ত্রী",
                    "common": "বাংলাদেশ"
                }
            }
        },
        "tld": [
            ".bd"
        ],
        "cca2": "BD",
        "ccn3": "050",
        "cca3": "BGD",
        "cioc": "BAN",
        "independent": true,
        "status": "officially-assigned",
        "unMember": true,
        "currencies": {
            "BDT": {
                "name": "Bangladeshi taka",
                "symbol": "৳"
            }
        },
        "idd": {
            "root": "+8",
            "suffixes": [
                "80"
            ]
        },
        "capital": [
            "Dhaka"
        ],
        "altSpellings": [
            "BD",
            "People's Republic of Bangladesh",
            "Gônôprôjatôntri Bangladesh"
        ],
        "region": "Asia",
        "subregion": "Southern Asia",
        "languages": {
            "ben": "Bengali"
        },
        "translations": {
            "ara": {
                "official": "جمهورية بنغلاديش الشعبية",
                "common": "بنغلاديش"
            },
            "bre": {
                "official": "Republik pobl Bangladesh",
                "common": "Bangladesh"
            },
            "ces": {
                "official": "Bangladéšská lidová republika",
                "common": "Bangladéš"
            },
            "cym": {
                "official": "Gweriniaeth Pobl Bangladesh",
                "common": "Bangladesh"
            },
            "deu": {
                "official": "Volksrepublik Bangladesch",
                "common": "Bangladesch"
            },
            "est": {
                "official": "Bangladeshi Rahvavabariik",
                "common": "Bangladesh"
            },
            "fin": {
                "official": "Bangladeshin kansantasavalta",
                "common": "Bangladesh"
            },
            "fra": {
                "official": "La République populaire du Bangladesh",
                "common": "Bangladesh"
            },
            "hrv": {
                "official": "Narodna Republika Bangladeš",
                "common": "Bangladeš"
            },
            "hun": {
                "official": "Banglades",
                "common": "Banglades"
            },
            "ita": {
                "official": "Repubblica popolare del Bangladesh",
                "common": "Bangladesh"
            },
            "jpn": {
                "official": "バングラデシュ人民共和国",
                "common": "バングラデシュ"
            },
            "kor": {
                "official": "방글라데시 인민 공화국",
                "common": "방글라데시"
            },
            "nld": {
                "official": "Volksrepubliek Bangladesh",
                "common": "Bangladesh"
            },
            "per": {
                "official": "جمهوری خلق بنگلادش",
                "common": "بنگلادش"
            },
            "pol": {
                "official": "Ludowa Republika Bangladeszu",
                "common": "Bangladesz"
            },
            "por": {
                "official": "República Popular do Bangladesh",
                "common": "Bangladesh"
            },
            "rus": {
                "official": "Народная Республика Бангладеш",
                "common": "Бангладеш"
            },
            "slk": {
                "official": "Bangladéšska ľudová republika",
                "common": "Bangladéš"
            },
            "spa": {
                "official": "República Popular de Bangladesh",
                "common": "Bangladesh"
            },
            "swe": {
                "official": "Folkrepubliken Bangladesh",
                "common": "Bangladesh"
            },
            "tur": {
                "official": "Bangladeş Halk Cumhuriyeti",
                "common": "Bangladeş"
            },
            "urd": {
                "official": "عوامی جمہوریہ بنگلہ دیش",
                "common": "بنگلہ دیش"
            },
            "zho": {
                "official": "孟加拉人民共和国",
                "common": "孟加拉国"
            }
        },
        "latlng": [
            24,
            90
        ],
        "landlocked": false,
        "borders": [
            "MMR",
            "IND"
        ],
        "area": 147570,
        "demonyms": {
            "eng": {
                "f": "Bangladeshi",
                "m": "Bangladeshi"
            },
            "fra": {
                "f": "Bangladaise",
                "m": "Bangladais"
            }
        },
        "flag": "🇧🇩",
        "maps": {
            "googleMaps": "https://goo.gl/maps/op6gmLbHcvv6rLhH6",
            "openStreetMaps": "https://www.openstreetmap.org/relation/184640"
        },
        "population": 164689383,
        "gini": {
            "2016": 32.4
        },
        "fifa": "BAN",
        "car": {
            "signs": [
                "BD"
            ],
            "side": "left"
        },
        "timezones": [
            "UTC+06:00"
        ],
        "continents": [
            "Asia"
        ],
        "flags": {
            "png": "https://flagcdn.com/w320/bd.png",
            "svg": "https://flagcdn.com/bd.svg"
        },
        "coatOfArms": {
            "png": "https://mainfacts.com/media/images/coats_of_arms/bd.png",
            "svg": "https://mainfacts.com/media/images/coats_of_arms/bd.svg"
        },
        "startOfWeek": "sunday",
        "capitalInfo": {
            "latlng": [
                23.72,
                90.4
            ]
        },
        "postalCode": {
            "format": "####",
            "regex": "^(\\d{4})$"
        }
    }
]

let countryCurrencies = objTest[0].currencies;
let countryAvailableCurrencies = '';
for (currency in countryCurrencies) {
    countryAvailableCurrencies += `Name: ${countryCurrencies[currency].name}(${currency}), Symbol: ${countryCurrencies[currency].symbol},`;
}

console.log(countryAvailableCurrencies)