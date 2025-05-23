"use client"
import React from 'react';
import Image from 'next/image';
import { useRouter } from "next/navigation";

interface Country {
    title: string,
    image: string,
    description: string,
    population: number,
    region: string,
    href: string,
    country: object,
}


const Country: React.FC<Country> = ({ title, image, description, population, region, href, country }) => {
    const router = useRouter();

    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault();
        localStorage.setItem("selectedCountry", JSON.stringify(country));
        router.push(href);
    };

    return (
        <article
            onClick={handleClick}
            className="bg-gray-600/70 rounded-2xl hover:scale-110 duration-300 shadow-lg z-20 hover:shadow-2xl cursor-pointer"
        >
            <Image src={image} alt={title} className="object-cover w-full rounded-2xl" width={300} height={300} />
            <div className="p-3">
                <h1 className="text-4xl font-bold">{title}</h1>
                <h2 className="text-2xl font-semibold">{region}</h2>
                <h3 className="text-xl font-semibold">{population}</h3>
                <p className="text-sm">{description}</p>
            </div>
        </article>
    );
};
export default Country