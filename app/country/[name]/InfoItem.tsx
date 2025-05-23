import React from "react";

const InfoItem = ({label, value}: { label: string; value: React.ReactNode }) => (
    <p className="text-gray-700 dark:text-gray-300 text-lg">
        <span className="font-semibold">{label}: </span>
        <span>{value}</span>
    </p>
);
export default InfoItem;