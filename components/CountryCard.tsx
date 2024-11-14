import { Link } from "react-router-dom";
import type { Country } from "../src/types";
import { formatNumber } from "../src/utils.tsx";

interface CountryCardProps {
  country: Country
}


function CountryCard({ country }: CountryCardProps) {
  return (
    <Link to={`/country/${country.cca3.toLowerCase()}`} key={country.cca3} className="block mx-auto w-full">
      <article className="flex flex-col rounded-md shadow w-full hover:brightness-110 hover:scale-105 transition-all ease-linear">
        <img className="h-44 w-full object-cover rounded-t-md" src={country.flags.svg} alt={country.flags.alt} />
        <div className="py-8 px-6 bg-slate-200 dark:bg-dark-nav rounded-b-md">
          <h3 className="font-black text-xl mb-4 italic">{country.name.common}</h3>
          <p><strong className="text-lg">Population:&nbsp;</strong>{formatNumber(country.population)}</p>
          <p><strong className="text-lg">Region:&nbsp;</strong>{country.region}</p>
          <p><strong className="text-lg">Capital:&nbsp;</strong>{country.capital}</p>
        </div>
      </article>
    </Link>
  );
}

export default CountryCard;
