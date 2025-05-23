"use client"
import {Country} from "@/app/(components)/index";
import {useCustomFetch} from "@/hooks/useCustomFetch";


const CountryList = () => {
    const {data, isLoading, error} = useCustomFetch();
    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error fetching countries</p>;

    const description = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores at aut delectus facere inventore iste molestias nostrum perspiciatis sapiente suscipit!"
    return (

        <section className="grid mt-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {data.map((country, index) => (
                <Country
                    key={index}
                    title={country.name.common}
                    image={country.flags.svg}
                    description="..." // می‌تونی مثل قبلی متنی ساده یا داینامیک بذاری
                    population={country.population}
                    cca3={country.cca3}
                    region={country.region}
                    capital={country.capital}
                    languages={country.languages}
                    flagEmoji={country.flag}  // 👈 ایموجی پرچم
                    area={country.area}
                    mapsLink={country.maps?.googleMaps}
                />
            ))}

        </section>
    );
};

export default CountryList;