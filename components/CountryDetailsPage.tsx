import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import { fetchCountry } from "../src/APIutils.ts";
import { ArrowLeftIcon } from "@heroicons/react/16/solid";
import type { Country } from "../src/types.ts";
import Layout from "./Layout.tsx";
import LoadingDetails from "./LoadingDetails.tsx";
import CountryDetails from "./CountryDetails.tsx";
import Footer from "./Footer.tsx";


function CountryDetailsPage() {
  const { countryCode } = useParams() as { countryCode: string };
  const { isPending, data, error } = useQuery({ queryKey: [`country`, countryCode], queryFn: () => fetchCountry(countryCode), staleTime: 0});

  useEffect(() => {
    window.scrollTo(0, 0);
  },[])

  return (
    <div>
      <Layout>
        <div className="px-8 md:px-24 mt-14 pb-16">
          <Link to="/" className="p-4 bg-slate-200 dark:bg-dark-nav mb-8 scale-90 md:mb-16 cursor-pointer w-28 flex items-center justify-center rounded-md border-[1px] border-solid border-dark-nav dark:border-slate-500 hover:brightness-110">
            <ArrowLeftIcon className="w-6 h-6 mr-2" />
            <span className="inline-block">Back</span>
          </Link>
          {isPending ? (
            <LoadingDetails />
          ) : error ? (
            <p>Error: {error.message}</p>
          ) : (
            <CountryDetails country={data as Country} />
          )}
        </div>
        <Footer />
      </Layout>
    </div>
  );
}

export default CountryDetailsPage;
