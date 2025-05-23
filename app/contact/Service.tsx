import React from "react";

interface service {
    title :  string;
    text:  string;
    icon:  string;
}

const Service : React.FC<service> = ({title , icon , children}) => {
    return (
        <div className="space-y-4 text-center flex flex-col items-center">
            <div className="w-24 my-5 h-24 border flex justify-center items-center rotate-45">
                <div className="-rotate-45 text-4xl">
                    {icon}
                </div>
            </div>
            <div className="space-y-2">
                <h1 className="font-semibold text-2xl">{title}</h1>
                <p className="text-gray-400 max-w-sm text-base text-center">{children}</p>
            </div>
        </div>

    );
};

export default Service;