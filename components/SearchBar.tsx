import { useState, useRef } from "react";
import { MagnifyingGlassIcon, FlagIcon } from "@heroicons/react/16/solid";

interface SearchBarProps {
    ready: boolean;
    onSearch: (searchedCountry: string) => void;
}

function SearchBar({ ready, onSearch }: SearchBarProps) {
    const inputRef = useRef<HTMLInputElement>(null);
    const [search, setSearch] = useState("");

    function handleSubmit(event: React.FormEvent, searchedCountry: string) {
        event.preventDefault();
        onSearch(searchedCountry);
        setSearch("");
        console.log(`Searching for ${searchedCountry}`);
    }

    return (
        <form onSubmit={(e) => handleSubmit(e, search)} className="flex flex-wrap w-fit">
            <label htmlFor="search" className="sr-only">Search</label>
            <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-5 pointer-events-none">
                    <FlagIcon className="w-6 h-6 text-gray-500 dark:text-gray-400" aria-hidden="true">
                    </FlagIcon>
                </div>
                <input
                ref={inputRef}
                value={search}
                onChange={(e) => {
                    setSearch(e.target.value);
                    onSearch(e.target.value);
                }}
                type="text"
                id="search"
                className={`ps-14 me-2 p-2 bg-slate-100 dark:bg-dark-nav text-lg rounded-lg border border-dark-nav dark:border-slate-600 shadow focus:outline-none focus-visible:ring-0 
                    ${!ready ? "cursor-not-allowed opacity-55 border-opacity-55 focus-visible:ring-0 pointer-events-none" : "focus-visible:ring-2 dark:focus-visible:ring-blue-400 focus-visible:ring-blue-500"}`}
                placeholder="Search for a country..."
                disabled={!ready}
                required
                />
            </div>
            <button className={`p-2.5 mt-3 tiny:mt-0 sm:mt-0 md:mt-0 lg:mt-0 text-sm font-medium text-white bg-blue-700 dark:bg-blue-600 rounded-lg border border-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 ${!ready ? "cursor-not-allowed opacity-55 border-opacity-55 hover:bg-blue-700 dark:hover:bg-blue-600" : "hover:bg-blue-800 dark:hover:bg-blue-700"}`} type="submit" disabled={!ready}>
                <MagnifyingGlassIcon onClick={() => inputRef.current?.focus()} className={`w-6 h-6`} aria-hidden="true">
                </MagnifyingGlassIcon>
            </button>
        </form>
    )
}
export default SearchBar;
