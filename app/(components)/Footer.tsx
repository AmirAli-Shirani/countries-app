import Link from "next/link";
import {FaInstagram, FaLinkedinIn, FaTelegram, FaWhatsapp} from "react-icons/fa";

const links = [
    {name: "Home", href: "/"},
    {name: "Blogs", href: "/blogs"},
    {name: "About", href: "/about"},
    {name: "Contact", href: "/contact"},
]
const socialMedia = [
    {
        icon: <FaTelegram/>,
        href: "https://t.me/AmirAli_Shirani",
        className: "text-blue-500 hover:text-blue-600",
    },
    {
        icon: <FaLinkedinIn/>,
        href: "https://linkedin.com/in/amirali-shirani-93b9422b1",
        className: "text-blue-500 hover:text-blue-800",
    },
    {
        icon: <FaWhatsapp/>,
        href: "https://wa.me/+989104344950",
        className: "text-green-500 hover:text-green-600",
    },
    {
        icon: <FaInstagram/>,
        href: "https://instagram.com/amirali._shirani",
        className: "text-pink-500 hover:text-pink-600",
    },
];

const Footer = () => {
    return (
        <footer className="w-full">
            <div className="lg:flex  justify-between space-y-10 bg-gray-800 py-5 space-each items-center ">
                <div>
                    <h1 className="font-bold text-3xl mb-5">Let&#39;s Talk</h1>
                    <p className="text-gray-400 text-base max-w-lg">Every project starts with a chat. AmirAli leads our
                        client conversations and will be
                        happy to discuss your project. He will be also pull in the right people from the team when
                        needed</p>
                </div>
                <div className="flex justify-between gap-20">
                    <ul className="flex flex-col gap-3">
                        {links.map((link, index) => (
                            <Link href={link.href} key={index}>
                                <li className="hover:text-blue-400 transition-all duration-200">{link.name}</li>
                            </Link>
                        ))}
                    </ul>
                    <div className="flex flex-col gap-2">
                        <h3 className="text-blue-500">amirali7shirani@gmail.com</h3>
                        <h3 className="text-blue-500">(+98) 9232638366</h3>
                        <h3 className="text-blue-500">Iran , Isfahan</h3>
                        <div className="flex gap-3">
                            <div className="flex gap-5 text-gray-300 mt-5 text-2xl">
                                {socialMedia.map((link, index) => (
                                    <a key={index} target="_blank" className=" hover:scale-105
                                hover:-translate-y-2 rounded-full transition-all  duration-300 text-white" href={link.href}>{link.icon}</a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;