"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const CountryDetailPage = () => {
    const [country, setCountry] = useState(null);

    useEffect(() => {
        const saved = localStorage.getItem("selectedCountry");
        if (saved) {
            setCountry(JSON.parse(saved));
        }
    }, []);

    if (!country) return <p>Loading data or no country selected</p>;

    return (
        <section className="max-w-6xl mx-auto p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-lg mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                {/* Flag */}
                <div className="w-full h-full">
                    <Image
                        src={country.flags.svg}
                        alt={`Flag of ${country.name.common}`}
                        width={600}
                        height={400}
                        className="w-full h-auto rounded-lg border"
                    />
                </div>

                {/* Info */}
                <div className="text-gray-900 dark:text-white space-y-4">
                    <h1 className="text-3xl font-bold">{country.name.official}</h1>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                        <span className="font-semibold">Common Name: </span>
                        {country.name.common}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <p><strong>Region:</strong> {country.region}</p>
                        <p><strong>Subregion:</strong> {country.subregion}</p>
                        <p><strong>Capital:</strong> {country.capital?.join(", ")}</p>
                        <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
                        <p><strong>Area:</strong> {country.area.toLocaleString()} km²</p>
                        <p><strong>Independent:</strong> {country.independent ? "Yes" : "No"}</p>
                        <p><strong>Time Zone:</strong> {country.timezones.join(", ")}</p>
                        <p><strong>Currency:</strong> {Object.values(country.currencies).map(c => `${c.name} (${c.symbol})`).join(", ")}</p>
                        <p><strong>Languages:</strong> {Object.values(country.languages).join(", ")}</p>
                    </div>

                    {/* Map link */}
                    <div>
                        <a
                            href={country.maps.googleMaps}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow"
                        >
                            View on Google Maps
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CountryDetailPage;
