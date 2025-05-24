"use client";
import { useCustomFetch } from '@/hooks/useCustomFetch';
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { CountryType } from '@/helpers/countryType';

const SearchInput = () => {
    const {data :countries, isLoading} = useCustomFetch() as {
        data: CountryType[] | null;
        isLoading: boolean;
    };
    const [searchResult, setSearchResult] = useState<CountryType[]>([]);
    const [inputValue, setInputValue] = useState('');
    const containerRef = useRef<HTMLDivElement>(null);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.toLowerCase();
        setInputValue(value);
        if (value.length >= 3 && countries) {
            const filtered = countries.filter((country) =>
                country.name.common.toLowerCase().includes(value)
            );
            setSearchResult(filtered);
        } else {
            setSearchResult([]);
        }
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setSearchResult([]);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    if (isLoading) return <p>Loading...</p>;

    return (
        <div className="relative" ref={containerRef}>
            <label htmlFor="country-search" className="sr-only">Search Country</label>
            <input
                id="country-search"
                type="text"
                className="px-3 py-2  rounded-xl border dark:border-gray-500"
                name="countries"
                value={inputValue}
                onChange={handleSearch}
                placeholder="Search Country..."
                autoComplete="off"
            />
            {searchResult.length > 0 && (
                <ul className="w-60 mt-2 absolute bg-gray-700 z-30 rounded-lg overflow-hidden shadow-md">
                    {searchResult.map((c) => (
                        <li key={c.cca3}>
                            <Link
                                href={`/country/${c.cca3}`}
                                className="block p-2 hover:bg-gray-600 transition-all duration-200 text-sm border-b border-gray-600"
                            >
                                {c.name.common}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SearchInput;
