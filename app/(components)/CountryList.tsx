"use client";
import {Country, FilteredCountries} from "@/app/(components)/index";
import {useCustomFetch} from "@/hooks/useCustomFetch";
import {CountryType} from "@/helpers/countryType";
import {useMemo, useState} from "react";

const CountryList = () => {
    const {data, isLoading, error} = useCustomFetch() as {
        data: CountryType[] | null;
        isLoading: boolean;
        error: Error | null;
    };

    const [selectedRegion, setSelectedRegion] = useState("");
    const [selectedSubregion, setSelectedSubregion] = useState("");

    const regions = useMemo(
        () => Array.from(new Set(data?.map((c) => c.region).filter(Boolean))),
        [data]
    );
    const subregions = useMemo(() => {
        const filtered = selectedRegion
            ? data?.filter((c) => c.region === selectedRegion)
            : data;
        return Array.from(new Set(filtered?.map((c) => c.subregion).filter(Boolean)));
    }, [data, selectedRegion]);

    const filteredCountries = useMemo(() => {
        return data
            ?.filter((c) => (selectedRegion ? c.region === selectedRegion : true))
            .filter((c) => (selectedSubregion ? c.subregion === selectedSubregion : true));
    }, [data, selectedRegion, selectedSubregion]);

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error fetching countries</p>;

    return (
        <section className="max-w-7xl mx-auto p-4">
            <FilteredCountries
                regions={regions}
                selectedRegion={selectedRegion}
                setSelectedRegion={setSelectedRegion}
                subregions={subregions}
                selectedSubregion={selectedSubregion}
                setSelectedSubregion={setSelectedSubregion}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredCountries?.map((country, index) => (
                    <Country key={index} {...country} />
                ))}
            </div>
        </section>
    );
};

export default CountryList;
