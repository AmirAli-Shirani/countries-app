'use client';
import InfoItem from './InfoItem';
import {useParams} from 'next/navigation';
import Image from 'next/image';
import {useCustomFetch} from "@/hooks/useCustomFetch";
import React from "react";
import {CountryType} from '@/helpers/countryType';

const CountryDetailPage = () => {
    const {name: cca3} = useParams<{ name: string }>();
    const {data, isLoading, error} = useCustomFetch() as {
        data: CountryType[] | null;
        isLoading: boolean;
        error: Error | null;
    };
    console.log(error)

    if (isLoading) return <p className="text-center mt-20 text-xl">Loading...</p>;
    if (error || !data) return <p className="text-center mt-20 text-red-500">Failed to load countries.</p>;

    const country = data.find((c) => c.cca3?.toLowerCase() === cca3.toLowerCase());
    if (!country) return <p className="text-center mt-20 text-gray-700 dark:text-gray-300">Country not found.</p>;

    return (
        <section className="max-w-6xl mx-auto p-6 sm:p-8 bg-white dark:bg-gray-900 rounded-3xl shadow-xl mt-12">
            <div className="grid grid-cols-1 sm:grid-cols-[1fr_1.1fr] gap-8 sm:gap-10 items-start">
                <div
                    className="overflow-hidden rounded-2xl shadow-md border border-gray-300 dark:border-gray-700 aspect-video max-h-[300px] sm:max-h-[360px]">
                    <Image
                        src={country.flags.svg}
                        alt={`Flag of ${country.name.common}`}
                        width={640}
                        height={420}
                        className="w-full h-full object-cover"
                        priority
                    />
                </div>

                <div className="text-gray-900 dark:text-white space-y-5">
                    <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">{country.name.official}</h1>

                    <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400">
                        <span className="font-semibold">Common Name:</span> {country.name.common}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                        <InfoItem label="Region" value={country.region}/>
                        <InfoItem label="Subregion" value={country.subregion}/>
                        {country.capital && <InfoItem label="Capital" value={country.capital.join(", ")}/>}
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
                            className="inline-block mt-4 sm:mt-6 px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-xl shadow-lg transition duration-300"
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
