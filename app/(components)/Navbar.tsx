'use client'
import {IoMenu} from "react-icons/io5";
import {usePathname} from 'next/navigation'
import {useEffect, useState} from "react";
import {NavLink} from "@/app/(components)/index";

const navItems = [
    {label: 'Home', href: '/'},
    {label: 'Blogs', href: '/blogs'},
    {label: 'About', href: '/about'},
    {label: 'Page', href: '/contact'},
]

const Navbar = () => {
    const pathname = usePathname()
    const [menuOpen, setMenuOpen] = useState(false)
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setMenuOpen(false);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return (
        <header className="dark:bg-darkNav ">
            <nav className="space-each py-5 flex items-center justify-between">
                <h1 className="text-xl font-bold">My Country App</h1>
                <ul className="hidden lg:flex justify-between gap-8">
                    {navItems.map((item, index) => (
                        <NavLink key={index} href={item.href} label={item.label} pathname={pathname}/>
                    ))}
                </ul>
                <div className="hidden lg:flex">
                    <form className="space-x-3">

                        <input type="text" className="px-3 py-2 rounded-xl border dark:border-gray-500"
                               name="countries" placeholder="Search Country..."/>
                        <select name="filter" className="px-3 py-2 rounded-xl border dark:border-gray-500">
                            <option value="" className="px-3 py-2 rounded-xl border dark:border-gray-500">filter by
                                region
                            </option>
                        </select>
                    </form>
                </div>
                <button
                    className="text-2xl lg:hidden"
                    onClick={() => setMenuOpen((prev) => !prev)}>
                    <IoMenu/>
                </button>
            </nav>
            {menuOpen && (
                <div className="lg:hidden flex justify-between container mx-auto mt-8 items-center bg-darkNav">
                    <ul className="flex flex-col gap-4">
                        {navItems.map((item, index) => (
                            <NavLink key={index} href={item.href} label={item.label} pathname={pathname}/>

                        ))}
                    </ul>
                    <div>
                        <form className="gap-4 flex flex-col">

                            <input type="text" className="px-3 py-2 rounded-xl border dark:border-gray-500"
                                   name="countries" placeholder="Search Country..."/>
                            <select name="filter" className="px-3 py-2 rounded-xl border dark:border-gray-500">
                                <option value="" className="px-3 py-2 rounded-xl border dark:border-gray-500">filter
                                    by
                                    region
                                </option>
                            </select>
                        </form>
                    </div>
                </div>
            )}
        </header>
    )
}
export default Navbar