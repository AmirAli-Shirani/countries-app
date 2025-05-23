import Iran from "@/public/assets/images/Iran.jpeg"
import {Country} from "@/app/(components)/index";



const CountryList = () => {
    const description = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores at aut delectus facere inventore iste molestias nostrum perspiciatis sapiente suscipit!"
    return (

        <section className="grid mt-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <Country href="/detail" title="Iran" image={Iran} description={description} population={850000000} region="Asia"/>
        </section>
    );
};

export default CountryList;