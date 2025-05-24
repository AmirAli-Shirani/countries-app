import image from "@/public/assets/images/background_pompadour.jpg";
import Blog from "@/app/blogs/Blog";
import blogs from "@/data/blogs";

const Blogs = () => {
    return (
        <section
            className="flex justify-center  bg-cover bg-fixed"
            style={{backgroundImage: `url(${image.src})`}}>
            <div className="max-w-xl bg-white mt-10 space-y-5 p-4 text-black">
                <h1 className="font-bold text-3xl">Welcome to our Blog</h1>
                <p className="text-sm">Educational articles and motivating stories to encourage you on your eventing
                    journey.
                </p>
                <div>
                    {blogs.map((blog, index) => (
                        <Blog key={index} title={blog.title} image={blog.image} description={blog.text} link={blog.id}/>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Blogs;
