import React from "react";
import Image from "next/image";

const AboutUs = () => {
    return (
        <main className="min-h-screen bg-gradient-to-r from-indigo-600 via-purple-700 to-pink-600 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 text-white flex flex-col items-center p-6 sm:p-8 transition-colors duration-500">
            <section className="max-w-6xl w-full bg-white bg-opacity-20 dark:bg-gray-900 dark:bg-opacity-70 backdrop-blur-md rounded-3xl shadow-xl p-6 sm:p-10 transition-colors duration-500">
                <h1 className="text-4xl sm:text-5xl font-extrabold mb-8 text-center drop-shadow-lg dark:text-indigo-400">
                    About Us
                </h1>
                <p className="text-base sm:text-lg leading-relaxed mb-10 dark:text-gray-300 px-2 sm:px-0">
                    Welcome to our company! We are passionate about delivering the best
                    solutions and services to our customers. Our team is dedicated,
                    creative, and always ready to innovate.
                </p>

                <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                    <div className="flex-1 bg-white bg-opacity-30 dark:bg-gray-800 dark:bg-opacity-60 rounded-2xl p-5 sm:p-6 shadow-md hover:bg-opacity-50 dark:hover:bg-opacity-80 transition duration-300 cursor-default">
                        <h2 className="text-2xl sm:text-3xl font-semibold mb-3 dark:text-indigo-300">Our Mission</h2>
                        <p className="dark:text-gray-300 text-sm sm:text-base">
                            To empower individuals and businesses through cutting-edge
                            technology and unparalleled service.
                        </p>
                    </div>

                    <div className="flex-1 bg-white bg-opacity-30 dark:bg-gray-800 dark:bg-opacity-60 rounded-2xl p-5 sm:p-6 shadow-md hover:bg-opacity-50 dark:hover:bg-opacity-80 transition duration-300 cursor-default">
                        <h2 className="text-2xl sm:text-3xl font-semibold mb-3 dark:text-indigo-300">Our Vision</h2>
                        <p className="dark:text-gray-300 text-sm sm:text-base">
                            To be a global leader in our field, known for innovation,
                            integrity, and impact.
                        </p>
                    </div>

                    <div className="flex-1 bg-white bg-opacity-30 dark:bg-gray-800 dark:bg-opacity-60 rounded-2xl p-5 sm:p-6 shadow-md hover:bg-opacity-50 dark:hover:bg-opacity-80 transition duration-300 cursor-default">
                        <h2 className="text-2xl sm:text-3xl font-semibold mb-3 dark:text-indigo-300">Our Values</h2>
                        <ul className="list-disc list-inside space-y-2 dark:text-gray-300 text-sm sm:text-base">
                            <li>Integrity & Transparency</li>
                            <li>Customer-Centric Approach</li>
                            <li>Continuous Learning</li>
                            <li>Collaboration & Teamwork</li>
                            <li>Innovation & Creativity</li>
                        </ul>
                    </div>
                </div>

                {/* Team */}
                <section className="mt-14 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-8 dark:text-indigo-400">Meet the Team</h2>
                    <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
                        {[
                            {
                                name: "Alice Johnson",
                                role: "CEO",
                                img: "https://randomuser.me/api/portraits/women/44.jpg",
                            },
                            {
                                name: "Mark Wilson",
                                role: "Lead Developer",
                                img: "https://randomuser.me/api/portraits/men/46.jpg",
                            },
                            {
                                name: "Sofia Lee",
                                role: "Product Manager",
                                img: "https://randomuser.me/api/portraits/women/68.jpg",
                            },
                            {
                                name: "James Smith",
                                role: "UX Designer",
                                img: "https://randomuser.me/api/portraits/men/52.jpg",
                            },
                        ].map((member) => (
                            <div
                                key={member.name}
                                className="bg-white bg-opacity-30 dark:bg-gray-800 dark:bg-opacity-60 backdrop-blur-md rounded-xl p-4 sm:p-5 w-36 sm:w-40 hover:scale-105 transform transition shadow-lg cursor-default"
                            >
                                <Image
                                    width={100}
                                    height={100}
                                    src={member.img}
                                    alt={member.name}
                                    className="w-28 h-28 sm:w-32 sm:h-32 rounded-full mx-auto mb-3 object-cover border-4 border-white dark:border-indigo-500"
                                />
                                <h3 className="text-lg sm:text-xl font-semibold dark:text-indigo-300">{member.name}</h3>
                                <p className="text-xs sm:text-sm text-gray-200 dark:text-gray-300">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </section>
        </main>
    );
};

export default AboutUs;
