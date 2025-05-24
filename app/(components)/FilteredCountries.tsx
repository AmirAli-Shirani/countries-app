import React from 'react';

interface CountryFiltersProps {
    regions: string[];
    selectedRegion: string;
    setSelectedRegion: (value: string) => void;
    subregions: string[];
    selectedSubregion: string;
    setSelectedSubregion: (value: string) => void;
}

const FilteredCountries: React.FC<CountryFiltersProps> = ({
                                                           regions,
                                                           selectedRegion,
                                                           setSelectedRegion,
                                                           subregions,
                                                           selectedSubregion,
                                                           setSelectedSubregion,
                                                       }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <select
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                className="p-2 border rounded-xl dark:bg-gray-800 dark:text-white"
            >
                <option value="">All Regions</option>
                {regions.map((region) => (
                    <option key={region} value={region}>
                        {region}
                    </option>
                ))}
            </select>
            <select
                value={selectedSubregion}
                onChange={(e) => setSelectedSubregion(e.target.value)}
                className="p-2 border rounded-xl dark:bg-gray-800 dark:text-white"
            >
                <option value="">All Subregions</option>
                {subregions.map((subregion) => (
                    <option key={subregion} value={subregion}>
                        {subregion}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default FilteredCountries;
