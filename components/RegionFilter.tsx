import { useState } from "react";

interface RegionFilterProps {
    onRegionChange: (region: string) => void;
}

function RegionFilter({ onRegionChange }: RegionFilterProps) {
    const [selectedRegion, setSelectedRegion] = useState("");

    return (
        <select onChange={(e) => {setSelectedRegion(e.target.value); onRegionChange(e.target.value)}} value={selectedRegion} className="p-3 bg-slate-100 dark:bg-dark-nav focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 text-lg rounded-lg border border-dark-nav dark:border-slate-600 shadow">
            <option value="">Filter by Region</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
        </select>
    )
}

export default RegionFilter;
