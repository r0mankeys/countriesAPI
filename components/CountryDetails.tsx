// import { Link } from "react-router-dom";
import type { Country } from "../src/types.ts";
import { formatNumber, formatMultipleCurrencies, formatMultipleLanguages, formatBoolean, formatTopLevelDomain } from "../src/utils.tsx";

interface CountryDetailsProps {
    country: Country;
}

function CountryDetails({ country }: CountryDetailsProps) {
    return(
        <article className="flex flex-col items-center gap-16 md:gap-24 md:justify-between md:flex-row md:mb-32 mb-6 w-full rounded-md">
            <img src={country.flags.svg} alt={country.flags.alt} className="object-cover w-full md:max-w-[55%] aspect-video rounded-md shadow-md border-[1px] border-solid border-dark-nav dark:border-slate-200" />
            <section className="flex flex-col w-full mb-32 md:mb-0 md:max-w-[45%]">
                <h1 className="font-extrabold md:text-3xl text-4xl mb-8 italic">{country.name.common}</h1>
                <div className="flex flex-col flex-wrap sm:flex-row md:flex-row gap-8 w-full px-2 py-0 self-start leading-7">
                    <div className="mb-4">
                    {country.name && <p><strong className="text-lg">Official Name:&nbsp;</strong>{country.name.official}</p>}
                    {country.population && <p><strong className="text-lg">Population:&nbsp;</strong>{formatNumber(country.population)}</p>}
                    {country.region && <p><strong className="text-lg">Region:&nbsp;</strong>{country.region}</p>}
                    {country.subregion && <p><strong className="text-lg">Sub Region:&nbsp;</strong>{country.subregion}</p>}
                    {country.capital && <p><strong className="text-lg">Capital:&nbsp;</strong>{country.capital.join(', ')}</p>}
                    </div>
                    <div className="">
                        {country.currencies && <div><strong className="text-lg">Currencies:&nbsp;</strong>
                        {formatMultipleCurrencies(country.currencies)}
                        </div>}
                        {country.languages && <div><strong className="text-lg">Languages:&nbsp;</strong>
                        {formatMultipleLanguages(country.languages)}
                        {country.independent && <p><strong className="text-lg">Independent:&nbsp;</strong>{formatBoolean(country.independent)}</p>}
                        {country.unMember && <p><strong className="text-lg">UN Member:&nbsp;</strong>{formatBoolean(country.unMember)}</p>}
                        {country.tld && <p><strong className="text-lg">Top Level Domain:&nbsp;</strong>{formatTopLevelDomain(country.tld)}</p>}
                        </div>}
                    </div>
                </div>
            </section>
        </article>
    )
}

export default CountryDetails;
