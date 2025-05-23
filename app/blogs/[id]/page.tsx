import blogs from "@/data/blogs";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { FaArrowLeft } from "react-icons/fa";

const BlogDetail = ({ params }: { params: { id: string } }) => {
    const blog = blogs.find((b) => b.id === Number(params.id));
    if (!blog) return notFound();

    return (
        <section className="min-h-screen bg-gradient-to-b from-white to-gray-100 py-10 px-4">
            <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden">
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
                        className="absolute top-4 left-4 bg-white bg-opacity-70 hover:bg-opacity-100 backdrop-blur-md px-3 py-1.5 rounded-full text-sm text-gray-700 flex items-center gap-1 transition"
                    >
                        <FaArrowLeft size={16} />
                        Back to blogs
                    </Link>
                </div>
                <div className="p-8 space-y-5">
                    <h1 className="text-3xl font-bold leading-tight text-gray-900">{blog.title}</h1>
                    <p className="text-gray-600 text-base leading-relaxed">{blog.text}</p>
                </div>
            </div>
        </section>
    );
};

export default BlogDetail;
