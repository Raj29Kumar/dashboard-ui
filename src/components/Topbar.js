import React from "react";

const Topbar = () => (
    <div className="bg-gray-800 text-white mb-4 p-6 flex flex-col sm:flex-row justify-between items-center fixed top-0 left-0 right-0 z-10">
        <div className="text-xl flex font-semibold sm:w-auto">
            <button className="hidden sm:flex md:display items-center ml-2 bg-gray-400 p-2 justify-center w-10 h-10 rounded-full overflow-hidden">
                <img
                    src="/logo192.png"
                    alt="User Profile"
                    className="w-auto h-auto object-cover rounded-full"
                />
            </button>
            <div className="relative ml-7">
                <input
                    type="text"
                    placeholder="Search..."
                    className="pl-10 py-1 pr-4 w-full bg-gray-600 rounded-lg text-white outline-none"
                />
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-300">
                    <path fill="currentColor" d="m19.485 20.154l-6.262-6.262q-.75.639-1.725.989t-1.96.35q-2.402 0-4.066-1.663T3.808 9.503T5.47 5.436t4.064-1.667t4.068 1.664T15.268 9.5q0 1.042-.369 2.017t-.97 1.668l6.262 6.261zM9.539 14.23q1.99 0 3.36-1.37t1.37-3.361t-1.37-3.36t-3.36-1.37t-3.361 1.37t-1.37 3.36t1.37 3.36t3.36 1.37" />
                </svg>

            </div>
        </div>

        <div className="space-x-4 flex items-center mt-2 sm:mt-0">
            <button className="flex items-center text-white bg-gray-400 p-2 rounded-full w-10 h-10">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-auto h-auto object-cover"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 6h12M16 6l4 4m0 0l-4 4m4-4H10m0 0v12m0 0H4"
                    />
                </svg>
            </button>

            <button className="flex items-center text-white bg-gray-400 h-10 w-10 p-2 rounded-full">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-auto h-auto object-cover"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-3.87 0-7 3.13-7 7s3.13 7 7 7 7-3.13 7-7-3.13-7-7-7z"
                    />
                </svg>
            </button>

            <button className="flex items-center text-white bg-gray-400 h-10 w-10 p-2 rounded-full">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-auto h-auto object-cover"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 20h9M12 4h9M12 12h9M12 16h9"
                    />
                </svg>
            </button>

            <button className="flex items-center justify-center bg-gray-400 w-10 h-10 p-2 rounded-full overflow-hidden">
                <img
                    src="/logo192.png"
                    alt="User Profile"
                    className="w-full h-full object-cover"
                />
            </button>
        </div>
    </div>
)

export default Topbar