async function fetchAllCountries() {
  const response = await fetch('https://restcountries.com/v3.1/all?fields=name,capital,population,flags,region,cca3');
  const allCountries = await response.json();
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(allCountries);
    }, 2000); // Simulate a slow network request
  });
}

async function fetchCountry(countryCode: string) {
  const response = await fetch(`https://restcountries.com/v3.1/alpha/${countryCode}?fields=name,capital,population,flags,region,subregion,cca3,borders,languages,currencies,tld,independent,unMember`);
  const country = await response.json();
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(country);
    }, 2000); // Simulate a slow network request
  });
}

export { fetchAllCountries, fetchCountry };
