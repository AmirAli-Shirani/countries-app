import React from "react";
import Link from "next/link";
import Image from "next/image";

interface Blog {
    title: string;
    image: string;
    description: string;
    link: number;
}

const Blog: React.FC<Blog> = ({title, image, description, link}) => {
    return (
        <article className="space-y-7 mb-5">
            <h3 className="text-xl font-semibold">{title}</h3>
            <Link href={`/blogs/${link}`}>
                <Image src={image} alt={title} width={300} height={300} className="object-cover w-full"/>
            </Link>
            <p>{description}</p>
            <Link href={`/blogs/${link}`} className="text-lg text-red-400 hover:text-red-500 hover:underline">
                Read more
            </Link>
        </article>
    );
};

export default Blog;
