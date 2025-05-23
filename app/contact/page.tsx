import {FaMobileScreenButton} from "react-icons/fa6";
import {FaBolt, FaCode} from "react-icons/fa";
import Service from "@/app/contact/Service";

const services = [
    {
        icon: <FaBolt/>,
        title: "Rapid Prototyping",
        text: "We love smashing code out real quick to test an idea. Need to put your startup idea through it's paces? We do UX real good."
    }, {
        icon: <FaMobileScreenButton/>,
        title: "Web and Mobile App Development",
        text: "Custom made apps using hybrid development via React Native or Ionic. Need a comprehensive back end? No problems. In App Payments? Sure thing. Push Notifications. Yup. We do it all."
    }, {
        icon: <FaCode/>,
        title: "Technical consulting",
        text: "Need a gun Freelancer to get that project over the line? We're here to help. Available remote and onsite in Melbourne. Get in touch."
    },
]
const Page = () => {
    return (
        <section className="z-10">
            <h1 className="text-center text-3xl md:text-5xl font-bold tracking-tight text-gray-300 mt-10 mb-16">
                Services for today, <br className="hidden md:block"/> ready for tomorrow
            </h1>
            <div className="grid grid-cols-1 space-each lg:grid-cols-3 gap-10">
                {services.map((service, index) => (
                    <Service key={index} title={service.title} icon={service.icon}>{service.text}</Service>
                ))}
            </div>
            <div className="bg-emerald-950/90 p-10 mt-16 rounded-xl shadow-xl text-white">
                <h2 className="text-4xl font-bold mb-10 text-center">Get in touch</h2>
                <form className="max-w-4xl mx-auto space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                        <input type="text" placeholder="Name"
                               className="w-full p-3 rounded-md bg-emerald-800 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white"/>
                        <input type="email" placeholder="Email"
                               className="w-full p-3 rounded-md bg-emerald-800 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white"/>
                        <input type="text" placeholder="Phone Number"
                               className="w-full p-3 rounded-md bg-emerald-800 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white md:col-span-2"/>
                    </div>
                    <textarea placeholder="Enter your message"
                              className="w-full p-3 rounded-md bg-emerald-800 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white"
                              rows={6}/>
                    <div className="text-center">
                        <button
                            className="bg-white text-emerald-900 font-bold px-6 py-3 rounded-lg hover:bg-emerald-800 hover:text-white border border-white transition-all duration-300">
                            SEND MESSAGE
                        </button>
                    </div>
                </form>
            </div>

        </section>
    );
};

export default Page;