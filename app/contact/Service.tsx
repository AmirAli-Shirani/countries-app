import React, { ReactNode } from "react";

interface ServiceProps {
    title: string;
    icon: ReactNode;
    children: ReactNode;
}

const Service: React.FC<ServiceProps> = ({ title, icon, children }) => {
    return (
        <div
            className="space-y-6 text-center flex flex-col items-center p-6
      bg-white dark:bg-zinc-900
      rounded-xl shadow-md hover:shadow-lg
      transition-shadow duration-300"
        >
            <div className="w-20 h-20 border-4 border-emerald-500 rounded-full flex justify-center items-center transform rotate-45">
                <div className="text-3xl text-emerald-700 dark:text-emerald-400 -rotate-45">
                    {icon}
                </div>
            </div>
            <div className="space-y-2">
                <h2 className="font-bold text-xl text-gray-900 dark:text-white">{title}</h2>
                <p className="text-gray-600 dark:text-gray-300 max-w-xs text-base">
                    {children}
                </p>
            </div>
        </div>
    );
};

export default Service;
