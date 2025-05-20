import Link from "next/link";
import React from "react";

interface NavLinkProps {
    href: string;
    pathname: string;
    label: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, pathname, label }) => {
    return (
        <li>
            <Link
                href={href}
                className={`hover:text-blue-400 transition ${
                    pathname === href ? 'text-blue-400' : 'text-white'
                }`}>
                {label}
            </Link>
        </li>
    );
};

export default NavLink;
