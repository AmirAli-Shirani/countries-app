import {FaMobileScreenButton} from "react-icons/fa6";
import {FaBolt, FaCode} from "react-icons/fa";
import Service from "@/app/contact/Service";

const services = [
    {
        icon: <FaMobileScreenButton/>,
        title: "Web and Mobile App Development",
        text: "Custom made apps using hybrid development via React Native or Ionic. Need a comprehensive back end? No problems. In App Payments? Sure thing. Push Notifications. Yup. We do it all."
    }, {
        icon: <FaBolt/>,
        title: "Rapid Prototyping",
        text: "We love smashing code out real quick to test an idea. Need to put your startup idea through it's paces? We do UX real good."
    }, {
        icon: <FaCode/>,
        title: "Technical consulting",
        text: "Need a gun Freelancer to get that project over the line? We're here to help. Available remote and onsite in Melbourne. Get in touch."
    },
]
const Page = () => {
    return (
        <section className="z-10">
            <h1 className="lg:text-4xl text-2xl text-center my-20">Services for today, ready for tomorrow</h1>
            <div className="grid grid-cols-1 space-each lg:grid-cols-3 gap-10">
                {services.map((service, index) => (
                    <Service key={index} title={service.title} icon={service.icon}>{service.text}</Service>
                ))}
            </div>
            <div className="bg-emerald-950/75 p-4 mt-5">
                <h2 className="text-3xl font-semibold my-10 text-center">Get in touch</h2>
                <form className="container mx-auto space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <input type="text" placeholder="Name"
                               className="w-full border border-gray-400 py-2 px-3 rounded-lg"/>
                        <input type="email" placeholder="Email"
                               className="w-full border border-gray-400 py-2 px-3 rounded-lg"/>
                        <input type="text" placeholder="Number"
                               className="w-full border border-gray-400 py-2 px-3 rounded-lg"/>
                    </div>
                    <textarea placeholder="Enter your message"
                              className="w-full border border-gray-400 py-2 px-3 rounded-md" rows="6"/>
                    <div className="text-center">
                        <button
                            className="bg-white text-gray-800 p-3 rounded-lg hover:bg-transparent/70
                            hover:text-white hover:border transition-all  duration-300">SEND
                            MESSAGE
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Page;