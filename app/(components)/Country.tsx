import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Country {
    title: string;
    image: string;
    description: string;
    population: number;
    region: string;
    cca3: string;
    capital?: string[];
    languages?: { [key: string]: string };
    flagEmoji?: string;
    area?: number;
    mapsLink?: string;
}

const Country: React.FC<Country> = ({
                                        title,
                                        cca3,
                                        image,
                                        description,
                                        population,
                                        region,
                                        capital,
                                        languages,
                                        flagEmoji,
                                        area,
                                        mapsLink,
                                    }) => {
    return (
        <article
            className="bg-gray-700/80 rounded-2xl hover:scale-105 duration-300 shadow-lg z-20 hover:shadow-2xl flex flex-col"
        >
            <Link href={`/country/${cca3}`}>
                <Image
                    src={image}
                    alt={`Flag of ${title}`}
                    className="object-cover w-full rounded-t-2xl"
                    width={300}
                    height={180}
                    priority={true}
                />
            </Link>
            <div className="p-4 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-2">
                    <h1 className="text-3xl font-bold flex items-center gap-2">
                        {flagEmoji && <span className="text-3xl">{flagEmoji}</span>}
                        {title}
                    </h1>
                    {area && (
                        <span className="text-sm px-2 py-1 bg-gray-600 rounded-lg">
              {area.toLocaleString()} km²
            </span>
                    )}
                </div>
                <h2 className="text-lg font-semibold text-gray-300 mb-1">{region}</h2>
                {capital && (
                    <p className="text-sm mb-1">
                        <strong>Capital:</strong> {capital.join(", ")}
                    </p>
                )}
                {languages && (
                    <p className="text-sm mb-2">
                        <strong>Languages:</strong> {Object.values(languages).join(", ")}
                    </p>
                )}
                <p className="text-sm flex-grow">{description}</p>
                <div className="mt-4 flex justify-between items-center text-sm text-gray-400">
          <span>
            Population: {population.toLocaleString()}
          </span>
                    {mapsLink && (
                        <Link
                            href={mapsLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline hover:text-white"
                        >
                            View Map
                        </Link>
                    )}
                </div>
            </div>
        </article>
    );
};

export default Country;
