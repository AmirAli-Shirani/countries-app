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
                        country={country}
                        title={country.name.common}
                        image={country.flags.svg}
                        description={description}
                        population={country.population}
                        region={country.region}
                        href={`/country/${encodeURIComponent(country.name.common)}`}/>
                ))}
        </section>
    );
};

export default CountryList;