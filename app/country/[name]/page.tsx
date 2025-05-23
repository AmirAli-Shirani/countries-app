'use client';
import InfoItem from './InfoItem';
import {useParams} from 'next/navigation';
import Image from 'next/image';
import {useCustomFetch} from "@/hooks/useCustomFetch";
import React from "react";

const CountryDetailPage = () => {
    const {name: cca3} = useParams<{ cca3: string }>();
    const {data, isLoading, error} = useCustomFetch();

    if (isLoading) return <p className="text-center mt-20 text-xl">Loading...</p>;
    if (error || !data) return <p className="text-center mt-20 text-red-500">Failed to load countries.</p>;

    const country = data.find((c) => c.cca3?.toLowerCase() === cca3.toLowerCase());
    if (!country) return <p className="text-center mt-20 text-gray-700 dark:text-gray-300">Country not found.</p>;

    return (
        <section className="max-w-7xl mx-auto p-8 bg-white dark:bg-gray-900 rounded-3xl shadow-xl mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
                <div className="overflow-hidden rounded-2xl shadow-lg border border-gray-300 dark:border-gray-700">
                    <Image
                        src={country.flags.svg}
                        alt={`Flag of ${country.name.common}`}
                        width={640}
                        height={420}
                        className="w-full h-auto object-cover"
                        priority
                    />
                </div>

                <div className="text-gray-900 dark:text-white space-y-6">
                    <h1 className="text-4xl font-extrabold tracking-tight">{country.name.official}</h1>
                    <p className="text-xl text-gray-600 dark:text-gray-400">
                        <span className="font-semibold">Common Name: </span> {country.name.common}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <InfoItem label="Region" value={country.region}/>
                        <InfoItem label="Subregion" value={country.subregion}/>
                        {country.capital && country.capital.length > 0 && (
                            <InfoItem label="Capital" value={country.capital.join(", ")}/>
                        )}
                        <InfoItem label="Population" value={country.population.toLocaleString()}/>
                        <InfoItem label="Area" value={`${country.area.toLocaleString()} km²`}/>
                        <InfoItem label="Independent" value={country.independent ? "✅ Yes" : "❌ No"}/>
                        <InfoItem label="Timezones" value={country.timezones.join(", ")}/>
                        {country.currencies && (
                            <InfoItem
                                label="Currencies"
                                value={Object.values(country.currencies)
                                    .map((c) => `${c.name} (${c.symbol})`)
                                    .join(", ")}
                            />
                        )}
                        {country.languages && (
                            <InfoItem label="Languages" value={Object.values(country.languages).join(", ")}/>
                        )}
                    </div>

                    <div>
                        <a
                            href={country.maps.googleMaps}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block mt-6 px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-xl shadow-lg transition duration-300"
                        >
                            🌍 View on Google Maps
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};


export default CountryDetailPage;
