"use client"
import blogs from "@/data/blogs";
import {notFound, useParams} from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {FaArrowLeft} from "react-icons/fa";


const BlogDetail = () => {
    const {id} = useParams();
    const blog = blogs.find((b) => b.id === Number(id));

    if (!blog) {
        notFound();
    }

    return (
        <section className="min-h-screen py-10 px-4">
            <div
                className="max-w-3xl mx-auto shadow-xl rounded-2xl overflow-hidden bg-[var(--color-background)] text-[var(--color-foreground)]">
                <div className="relative">
                    <Image
                        src={blog.image}
                        alt={blog.title}
                        width={400}
                        height={400}
                        className="w-full h-[40rem] object-cover"
                    />
                    <Link
                        href="/blogs"
                        className="absolute top-4 left-4 bg-[var(--color-background)] bg-opacity-70 hover:bg-opacity-100 backdrop-blur-md px-3 py-1.5 rounded-full text-sm text-[var(--color-foreground)] flex items-center gap-1 transition"
                    >
                        <FaArrowLeft size={16}/>
                        Back to blogs
                    </Link>
                </div>
                <div className="p-8 space-y-5">
                    <h1 className="text-3xl font-bold leading-tight">{blog.title}</h1>
                    <p className="text-base leading-relaxed">{blog.text}</p>
                </div>
            </div>
        </section>
    );
}
export default BlogDetail