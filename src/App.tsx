import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout.tsx'
import SearchBar from "../components/SearchBar.tsx"
import RegionFilter from "../components/RegionFilter.tsx"
import LoadingCard from "../components/LoadingCard.tsx"
import CountryCard from "../components/CountryCard.tsx"
import CountryGrid from "../components/CountryGrid.tsx"
import CountryDetailsPage from "../components/CountryDetailsPage.tsx"
import NotFound from "../components/NotFound.tsx"
import Footer from "../components/Footer.tsx";
import { fetchAllCountries } from './APIutils.ts'
import type { Country } from './types.ts'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/country/:countryCode" element={<CountryDetailsPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

function Home() {
  const { isPending, isError, data, error } = useQuery({ queryKey: ['countries'], queryFn: () => fetchAllCountries() });
  const [searchedCountry, setSearchedCountry] = useState("");
  const arr = Array.from({ length: 60 });

  const filteredCountries = data?.filter((country: Country) => {
    return country.name.common.toLowerCase().includes(searchedCountry.toLowerCase()) || country.region.toLowerCase().includes(searchedCountry.toLowerCase());
  });


  return (
    <>
          <Layout>
            <main className='p-8 md:px-24 mb-14'>
              <section className='flex flex-wrap gap-16 items-center justify-between mt-6 mb-16'>
                <SearchBar ready={!isPending} onSearch={(value) => setSearchedCountry(value)} />
                  <RegionFilter onRegionChange={(value) => setSearchedCountry(value)} />
              </section>
              { isPending ? (
                <CountryGrid>
                  {arr.map((_, index) => (
                    <LoadingCard key={index} />
                  ))}
                </CountryGrid>
              ) : isError ? (
                <p>Error: {error.message}</p>
              ) : (
                <CountryGrid>
                  {filteredCountries.map((country: Country) => (
                    <CountryCard country={country} /> 
                  ))}
                </CountryGrid>
              )}
              {filteredCountries && filteredCountries.length === 0 ? <div className="flex flex-col items-center mx-auto text-2xl font-bold select-none"><span className='inline-block mb-4'>&#8317;&#x3186;&#x5f;&#x3186;&#8318;</span><p>None Found</p></div> : null}
            </main>
          </Layout>
          <Footer />
    </>
  )
}

export default App
