import React from "react";

const Tcard = ({ icon, title, value, percentage }) => {
    return (
        <>
             <div className="bg-gray-800 shadow-lg rounded-lg flex flex-col items-start justify-center p-4 w-full h-full">
                <div className="bg-gray-200 p-3 rounded-full mb-2">{icon}</div>
                <h3 className="text-sm font-semibold text-white mb-1">{title}</h3>
                <div className="flex items-center w-full justify-between">
                    <div className="text-xl font-bold text-white">{value}</div>
                    <div
                        className={`text-sm font-bold ${percentage > 0 ? "text-green-800" : "text-red-800"
                            }`}
                    >
                        {percentage}%
                    </div>
                </div>
            </div>
        </>
    )
}

export default Tcard