async function fetchAllCountries() {
  const response = await fetch('https://restcountries.com/v3.1/all?fields=name,capital,population,flags,region,cca3');
  const allCountries = await response.json();
  return allCountries;
}

async function fetchCountry(countryCode: string) {
  const response = await fetch(`https://restcountries.com/v3.1/alpha/${countryCode}?fields=name,capital,population,flags,region,subregion,cca3,borders,languages,currencies,tld,independent,unMember`);
  const country = await response.json();
  return country;
}

export { fetchAllCountries, fetchCountry };
