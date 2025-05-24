import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {CountryType} from "@/helpers/countryType"


const Country: React.FC<CountryType> = ({
                                             name,
                                             cca3,
                                             flags,
                                             population,
                                             region,
                                             capital,
                                             languages,
                                             flag,
                                             area,
                                             maps,
                                         }) => {
    return (
        <article className="bg-gray-700/80 rounded-2xl hover:scale-105 duration-300 shadow-lg z-20 hover:shadow-2xl flex flex-col">
            <Link href={`/country/${cca3}`}>
                <Image
                    src={flags.svg}
                    alt={`Flag of ${name.common}`}
                    className="object-cover w-full h-42 rounded-t-2xl"
                    width={300}
                    height={180}
                />
            </Link>
            <div className="p-4 flex flex-col flex-grow">
                <div className="flex items-start justify-between mb-2 gap-2 flex-wrap">
                    <h1 className="text-2xl md:text-3xl font-bold flex items-center gap-2 min-w-0">
                        {flag && <span className="text-2xl md:text-3xl">{flag}</span>}
                        <span className="truncate">{name.common}</span>
                    </h1>
                    {area && (
                        <span className="text-sm px-2 py-1 bg-gray-600 rounded-lg whitespace-nowrap">
                            {area.toLocaleString()} km²
                        </span>
                    )}
                </div>

                <h2 className="text-lg font-semibold text-gray-300 mb-1">{region}</h2>
                {capital && (
                    <p className="text-sm mb-1">
                        <strong>Capital:</strong> {capital.join(', ')}
                    </p>
                )}
                {languages && (
                    <p className="text-sm mb-2">
                        <strong>Languages:</strong> {Object.values(languages).join(', ')}
                    </p>
                )}
                <div className="mt-4 flex justify-between items-center text-sm text-gray-400">
                    <span>Population: {population.toLocaleString()}</span>
                    {maps?.googleMaps && (
                        <a
                            href={maps.googleMaps}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline hover:text-white"
                        >
                            View Map
                        </a>
                    )}
                </div>
            </div>
        </article>
    );
};

export default Country;