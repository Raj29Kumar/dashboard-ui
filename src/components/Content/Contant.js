import React, { useState } from "react";
import Tcard from "./components/Tcard";
import CircularProgressBar from "./components/CircularProgressBar";
import BarChart from "./components/BarChart";


const cardData = [
    {
        id: 1,
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-blue-500"
                viewBox="0 0 24 24"
            >
                <path
                    fill="currentColor"
                    d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8a8 8 0 0 1-8 8zm-1-13h2v5h-2zm0 6h2v2h-2z"
                />
            </svg>
        ),
        title: "Total Order",
        value: "$49.99",
        percentage: -3,
    },
    {
        id: 2,
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-green-500"
                viewBox="0 0 24 24"
            >
                <path
                    fill="currentColor"
                    d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8a8 8 0 0 1-8 8zm-1-13h2v5h-2zm0 6h2v2h-2z"
                />
            </svg>
        ),
        title: "Revenue",
        value: "$199.99",
        percentage: 5,
    },
    {
        id: 3,
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-yellow-500"
                viewBox="0 0 24 24"
            >
                <path
                    fill="currentColor"
                    d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8a8 8 0 0 1-8 8zm-1-13h2v5h-2zm0 6h2v2h-2z"
                />
            </svg>
        ),
        title: "Users",
        value: "120",
        percentage: 10,
    },
    {
        id: 4,
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-red-500"
                viewBox="0 0 24 24"
            >
                <path
                    fill="currentColor"
                    d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8a8 8 0 0 1-8 8zm-1-13h2v5h-2zm0 6h2v2h-2z"
                />
            </svg>
        ),
        title: "Pending Orders",
        value: "15",
        percentage: -2,
    },
];


const Contant = () => {
    const [percentage, setPercentage] = useState(50);
    return (
        <>
            <div className="flex-1 p-6 pl-10 mt-20 relative overflow-auto bg-black scrollbar-hide h-full">
                <div className='absolute top-8 left-6 right-6 bottom-4 overflow-y-auto scrollbar-hide'>
                    <h1 className="text-3xl font-bold mt-16 md:mt-0 sm:mt-0 text-white">Dashboard Content</h1>
                    {/* First Row  */}
                    <div className="grid grid-cols-1 md:grid-cols-[70%_30%] gap-3 pt-4 pr-4">
                        <div className="text-white rounded-md">
                            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-fr">
                                {cardData.map((card) => (
                                    <Tcard
                                        key={card.id}
                                        icon={card.icon}
                                        title={card.title}
                                        value={card.value}
                                        percentage={card.percentage}
                                    />
                                ))}
                            </div>
                        </div>

                        <div className="text-white p-0 rounded-md">
                            <div className="grid grid-cols-2 gap-0 w-full h-full">
                                <div className="bg-gray-800 flex flex-col items-start rounded-tl-md rounded-bl-md justify-center px-4 w-full h-full">
                                    <h3 className="text-sm font-semibold text-white mb-1">Net Profit</h3>
                                    <h1 className="text-xl font-bold text-white mb-1">$ 67000.59</h1>
                                    <div className="flex items-center w-full justify-between">
                                        <div className="text-xl font-bold text-red-700">3%</div>
                                    </div>
                                </div>
                                <div className="bg-gray-800 flex flex-col items-center rounded-tr-md rounded-br-md justify-center p-0 w-full h-full">
                                    <div className="ml-0">
                                        <CircularProgressBar percentage={percentage} size={100} strokeWidth={12} />
                                        <p>Enter Your Text</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Second Row */}
                    <div className="grid grid-cols-1 md:grid-cols-[70%_30%] gap-3 pt-4 pr-4">
                        <div className="bg-gray-800 p-4 rounded-md">
                            <BarChart />
                        </div>
                        <div className="text-white p-0 rounded-md">
                            <div className="grid grid-cols-1 gap-0 w-full h-full">
                                <div className="bg-gray-800 flex flex-col items-start rounded-tl-md rounded-bl-md justify-center px-4 w-full h-full">
                                    <div className="flex items-center justify-between p-4 rounded-md w-full">
                                        <div className="flex flex-inline items-center">
                                            <button className="w-12 h-12 flex items-center justify-center bg-white text-white rounded-full shadow-md">

                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="w-6 h-6 text-green-500"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        fill="currentColor"
                                                        d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8a8 8 0 0 1-8 8zm-1-13h2v5h-2zm0 6h2v2h-2z"
                                                    />
                                                </svg>


                                            </button>
                                            <p className="text-lg font-medium ml-6 text-white">Goals</p>
                                        </div>

                                        <button className="w-10 h-10 flex items-center justify-center bg-gray-700 text-gray-600 rounded-full shadow-md hover:bg-gray-300">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="2"
                                                stroke="currentColor"
                                                className="w-6 h-6"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M9 5l7 7-7 7"
                                                />
                                            </svg>
                                        </button>
                                    </div>

                                    <div className="flex items-center justify-between p-4 py-6 rounded-md w-full">
                                        <div className="flex flex-inline items-center">
                                            <button className="w-12 h-12 flex items-center justify-center bg-white text-white rounded-full shadow-md">

                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="w-6 h-6 text-red-500"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        fill="currentColor"
                                                        d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8a8 8 0 0 1-8 8zm-1-13h2v5h-2zm0 6h2v2h-2z"
                                                    />
                                                </svg>

                                            </button>
                                            <p className="text-lg font-medium ml-6 text-white">Popular</p>
                                        </div>

                                        <button className="w-10 h-10 flex items-center justify-center bg-gray-700 text-gray-600 rounded-full shadow-md hover:bg-gray-300">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="2"
                                                stroke="currentColor"
                                                className="w-6 h-6"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M9 5l7 7-7 7"
                                                />
                                            </svg>
                                        </button>
                                    </div>

                                    <div className="flex items-center justify-between p-4 rounded-md w-full">
                                        <div className="flex flex-inline items-center">
                                            <button className="w-12 h-12 flex items-center justify-center bg-white text-white rounded-full shadow-md">

                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="w-6 h-6 text-yellow-500"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        fill="currentColor"
                                                        d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8a8 8 0 0 1-8 8zm-1-13h2v5h-2zm0 6h2v2h-2z"
                                                    />
                                                </svg>


                                            </button>
                                            <p className="text-lg font-medium ml-6 text-white">Menus</p>
                                        </div>

                                        <button className="w-10 h-10 flex items-center justify-center bg-gray-700 text-gray-600 rounded-full shadow-md hover:bg-gray-300">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="2"
                                                stroke="currentColor"
                                                className="w-6 h-6"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M9 5l7 7-7 7"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Third Row */}
                    <div className="grid grid-cols-1 md:grid-cols-[70%_30%] gap-3 pt-4 pr-4">
                        <div className="bg-gray-800 p-4 rounded-md">
                            <div className="overflow-x-auto pt-4 max-h-96 scrollbar-hide">
                                <h1 className="text-white text-lg font-bold">Recent Order</h1>
                                <table className="min-w-full table-auto text-white">
                                    <thead>
                                        <tr className="text-left text-sm font-semibold text-white">
                                            <th className="px-4 py-3 sticky -top-5 bg-gray-800">Customer Name</th>
                                            <th className="px-4 py-3 sticky -top-5 bg-gray-800">Order Number</th>
                                            <th className="px-4 py-3 sticky -top-5 bg-gray-800">Amount</th>
                                            <th className="px-4 py-3 sticky -top-5 bg-gray-800">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-b">
                                            <td className="px-4 py-3 text-sm font-medium flex items-center text-gray-800">
                                                <img src="https://via.placeholder.com/40" alt="Profile" className="w-10 h-10 rounded-full" />
                                                <spna className="pl-4 text-white">John Doe</spna>
                                            </td>

                                            <td className="px-4 py-3 text-sm text-white">#12345</td>
                                            <td className="px-4 py-3 text-sm text-white">$250.00</td>
                                            <td className="px-4 py-3 text-sm">
                                                <span className="bg-green-100 text-green-600 rounded-full px-2 py-1 text-xs font-semibold">Completed</span>
                                            </td>
                                        </tr>


                                        <tr className="border-b">
                                            <td className="px-4 py-3 text-sm font-medium flex items-center text-gray-800">
                                                <img src="https://via.placeholder.com/40" alt="Profile" className="w-10 h-10 rounded-full" />
                                                <spna className="pl-4 text-white">John Doe</spna>
                                            </td>

                                            <td className="px-4 py-3 text-sm text-white">#12345</td>
                                            <td className="px-4 py-3 text-sm text-white">$250.00</td>
                                            <td className="px-4 py-3 text-sm">
                                                <span className="bg-green-100 text-green-600 rounded-full px-2 py-1 text-xs font-semibold">Completed</span>
                                            </td>
                                        </tr>
                                        <tr className="border-b">
                                            <td className="px-4 py-3 text-sm font-medium flex items-center text-gray-800">
                                                <img src="https://via.placeholder.com/40" alt="Profile" className="w-10 h-10 rounded-full" />
                                                <spna className="pl-4 text-white">John Doe</spna>
                                            </td>

                                            <td className="px-4 py-3 text-sm text-white">#12345</td>
                                            <td className="px-4 py-3 text-sm text-white">$250.00</td>
                                            <td className="px-4 py-3 text-sm">
                                                <span className="bg-green-100 text-green-600 rounded-full px-2 py-1 text-xs font-semibold">Completed</span>
                                            </td>
                                        </tr>


                                        <tr className="border-b">
                                            <td className="px-4 py-3 text-sm font-medium flex items-center text-gray-800">
                                                <img src="https://via.placeholder.com/40" alt="Profile" className="w-10 h-10 rounded-full" />
                                                <spna className="pl-4 text-white">John Doe</spna>
                                            </td>

                                            <td className="px-4 py-3 text-sm text-white">#12345</td>
                                            <td className="px-4 py-3 text-sm text-white">$250.00</td>
                                            <td className="px-4 py-3 text-sm">
                                                <span className="bg-green-100 text-green-600 rounded-full px-2 py-1 text-xs font-semibold">Completed</span>
                                            </td>
                                        </tr>
                                        <tr className="border-b">
                                            <td className="px-4 py-3 text-sm font-medium flex items-center text-gray-800">
                                                <img src="https://via.placeholder.com/40" alt="Profile" className="w-10 h-10 rounded-full" />
                                                <spna className="pl-4 text-white">John Doe</spna>
                                            </td>

                                            <td className="px-4 py-3 text-sm text-white">#12345</td>
                                            <td className="px-4 py-3 text-sm text-white">$250.00</td>
                                            <td className="px-4 py-3 text-sm">
                                                <span className="bg-green-100 text-green-600 rounded-full px-2 py-1 text-xs font-semibold">Completed</span>
                                            </td>
                                        </tr>
                                        <tr className="border-b">
                                            <td className="px-4 py-3 text-sm font-medium flex items-center text-gray-800">
                                                <img src="https://via.placeholder.com/40" alt="Profile" className="w-10 h-10 rounded-full" />
                                                <spna className="pl-4 text-white">John Doe</spna>
                                            </td>

                                            <td className="px-4 py-3 text-sm text-white">#12345</td>
                                            <td className="px-4 py-3 text-sm text-white">$250.00</td>
                                            <td className="px-4 py-3 text-sm">
                                                <span className="bg-green-100 text-green-600 rounded-full px-2 py-1 text-xs font-semibold">Completed</span>
                                            </td>
                                        </tr>
                                        <tr className="border-b">
                                            <td className="px-4 py-3 text-sm font-medium flex items-center text-gray-800">
                                                <img src="https://via.placeholder.com/40" alt="Profile" className="w-10 h-10 rounded-full" />
                                                <spna className="pl-4 text-white">John Doe</spna>
                                            </td>

                                            <td className="px-4 py-3 text-sm text-white">#12345</td>
                                            <td className="px-4 py-3 text-sm text-white">$250.00</td>
                                            <td className="px-4 py-3 text-sm">
                                                <span className="bg-green-100 text-green-600 rounded-full px-2 py-1 text-xs font-semibold">Completed</span>
                                            </td>
                                        </tr>

                                        <tr className="border-b">
                                            <td className="px-4 py-3 text-sm font-medium flex items-center text-gray-800">
                                                <img src="https://via.placeholder.com/40" alt="Profile" className="w-10 h-10 rounded-full" />
                                                <spna className="pl-4 text-white">John Doe</spna>
                                            </td>

                                            <td className="px-4 py-3 text-sm text-white">#12345</td>
                                            <td className="px-4 py-3 text-sm text-white">$250.00</td>
                                            <td className="px-4 py-3 text-sm">
                                                <span className="bg-green-100 text-green-600 rounded-full px-2 py-1 text-xs font-semibold">Completed</span>
                                            </td>
                                        </tr>
                                        <tr className="border-b">
                                            <td className="px-4 py-3 text-sm font-medium flex items-center text-gray-800">
                                                <img src="https://via.placeholder.com/40" alt="Profile" className="w-10 h-10 rounded-full" />
                                                <spna className="pl-4 text-white">John Doe</spna>
                                            </td>

                                            <td className="px-4 py-3 text-sm text-white">#12345</td>
                                            <td className="px-4 py-3 text-sm text-white">$250.00</td>
                                            <td className="px-4 py-3 text-sm">
                                                <span className="bg-green-100 text-green-600 rounded-full px-2 py-1 text-xs font-semibold">Completed</span>
                                            </td>
                                        </tr>
                                        <tr className="border-b">
                                            <td className="px-4 py-3 text-sm font-medium flex items-center text-gray-800">
                                                <img src="https://via.placeholder.com/40" alt="Profile" className="w-10 h-10 rounded-full" />
                                                <spna className="pl-4 text-white">John Doe</spna>
                                            </td>

                                            <td className="px-4 py-3 text-sm text-white">#12345</td>
                                            <td className="px-4 py-3 text-sm text-white">$250.00</td>
                                            <td className="px-4 py-3 text-sm">
                                                <span className="bg-green-100 text-green-600 rounded-full px-2 py-1 text-xs font-semibold">Completed</span>
                                            </td>
                                        </tr>
                                        <tr className="border-b">
                                            <td className="px-4 py-3 text-sm font-medium flex items-center text-gray-800">
                                                <img src="https://via.placeholder.com/40" alt="Profile" className="w-10 h-10 rounded-full" />
                                                <spna className="pl-4 text-white">John Doe</spna>
                                            </td>

                                            <td className="px-4 py-3 text-sm text-white">#12345</td>
                                            <td className="px-4 py-3 text-sm text-white">$250.00</td>
                                            <td className="px-4 py-3 text-sm">
                                                <span className="bg-green-100 text-green-600 rounded-full px-2 py-1 text-xs font-semibold">Completed</span>
                                            </td>
                                        </tr>

                                        <tr className="border-b">
                                            <td className="px-4 py-3 text-sm font-medium flex items-center text-gray-800">
                                                <img src="https://via.placeholder.com/40" alt="Profile" className="w-10 h-10 rounded-full" />
                                                <spna className="pl-4 text-white">John Doe</spna>
                                            </td>

                                            <td className="px-4 py-3 text-sm text-white">#12345</td>
                                            <td className="px-4 py-3 text-sm text-white">$250.00</td>
                                            <td className="px-4 py-3 text-sm">
                                                <span className="bg-green-100 text-green-600 rounded-full px-2 py-1 text-xs font-semibold">Completed</span>
                                            </td>
                                        </tr>

                                        <tr className="border-b">
                                            <td className="px-4 py-3 text-sm font-medium flex items-center text-gray-800">
                                                <img src="https://via.placeholder.com/40" alt="Profile" className="w-10 h-10 rounded-full" />
                                                <spna className="pl-4 text-white">John Doe</spna>
                                            </td>

                                            <td className="px-4 py-3 text-sm text-white">#12345</td>
                                            <td className="px-4 py-3 text-sm text-white">$250.00</td>
                                            <td className="px-4 py-3 text-sm">
                                                <span className="bg-green-100 text-green-600 rounded-full px-2 py-1 text-xs font-semibold">Completed</span>
                                            </td>
                                        </tr>

                                        <tr className="border-b">
                                            <td className="px-4 py-3 text-sm font-medium flex items-center text-gray-800">
                                                <img src="https://via.placeholder.com/40" alt="Profile" className="w-10 h-10 rounded-full" />
                                                <spna className="pl-4 text-white">John Doe</spna>
                                            </td>

                                            <td className="px-4 py-3 text-sm text-white">#12345</td>
                                            <td className="px-4 py-3 text-sm text-white">$250.00</td>
                                            <td className="px-4 py-3 text-sm">
                                                <span className="bg-green-100 text-green-600 rounded-full px-2 py-1 text-xs font-semibold">Completed</span>
                                            </td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="text-white bg-gray-800 rounded-md">
                            <div className="bg-gray-800 p-4 rounded-md max-h-96 mt-4 overflow-x-auto scrollbar-hide">
                                <div className="flex flex-col items-start w-full">
                                    <h1 className="text-white text-lg font-bold">Customer's FeedBack</h1>
                                    <div className="p-2 w-full  border-b border-gray-400">
                                        <div className="flex items-center mb-4 ">

                                            <img
                                                src="https://via.placeholder.com/40"
                                                alt="Customer"
                                                className="w-12 h-12 rounded-full mr-4"
                                            />
                                            <div className="text-white">
                                                <h3 className="text-lg font-semibold">John Doe</h3>

                                            </div>
                                        </div>

                                        <div className="flex mb-4">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="yellow"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                className="w-5 h-5"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M12 17.27l6.18 3.73-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73-1.64 7.03L12 17.27z"
                                                />
                                            </svg>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="yellow"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                className="w-5 h-5"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M12 17.27l6.18 3.73-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73-1.64 7.03L12 17.27z"
                                                />
                                            </svg>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="yellow"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                className="w-5 h-5"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M12 17.27l6.18 3.73-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73-1.64 7.03L12 17.27z"
                                                />
                                            </svg>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="yellow"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                className="w-5 h-5"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M12 17.27l6.18 3.73-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73-1.64 7.03L12 17.27z"
                                                />
                                            </svg>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="yellow"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                className="w-5 h-5"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M12 17.27l6.18 3.73-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73-1.64 7.03L12 17.27z"
                                                />
                                            </svg>
                                        </div>

                                        <p className="text-white text-sm">
                                            "The service was amazing! I had a great experience and would definitely recommend this to others."
                                        </p>
                                    </div>
                                    <div className="p-2 w-full  border-b border-gray-400">
                                        <div className="flex items-center mb-4 ">

                                            <img
                                                src="https://via.placeholder.com/40"
                                                alt="Customer"
                                                className="w-12 h-12 rounded-full mr-4"
                                            />
                                            <div className="text-white">
                                                <h3 className="text-lg font-semibold">John Doe</h3>

                                            </div>
                                        </div>

                                        <div className="flex mb-4">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="yellow"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                className="w-5 h-5"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M12 17.27l6.18 3.73-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73-1.64 7.03L12 17.27z"
                                                />
                                            </svg>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="yellow"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                className="w-5 h-5"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M12 17.27l6.18 3.73-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73-1.64 7.03L12 17.27z"
                                                />
                                            </svg>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="yellow"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                className="w-5 h-5"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M12 17.27l6.18 3.73-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73-1.64 7.03L12 17.27z"
                                                />
                                            </svg>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="yellow"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                className="w-5 h-5"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M12 17.27l6.18 3.73-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73-1.64 7.03L12 17.27z"
                                                />
                                            </svg>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="yellow"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                className="w-5 h-5"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M12 17.27l6.18 3.73-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73-1.64 7.03L12 17.27z"
                                                />
                                            </svg>
                                        </div>

                                        <p className="text-white text-sm">
                                            "The service was amazing! I had a great experience and would definitely recommend this to others."
                                        </p>
                                    </div>


                                    <div className="p-2 w-full  border-b border-gray-400">
                                        <div className="flex items-center mb-4 ">

                                            <img
                                                src="https://via.placeholder.com/40"
                                                alt="Customer"
                                                className="w-12 h-12 rounded-full mr-4"
                                            />
                                            <div className="text-white">
                                                <h3 className="text-lg font-semibold">John Doe</h3>

                                            </div>
                                        </div>

                                        <div className="flex mb-4">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="yellow"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                className="w-5 h-5"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M12 17.27l6.18 3.73-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73-1.64 7.03L12 17.27z"
                                                />
                                            </svg>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="yellow"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                className="w-5 h-5"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M12 17.27l6.18 3.73-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73-1.64 7.03L12 17.27z"
                                                />
                                            </svg>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="yellow"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                className="w-5 h-5"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M12 17.27l6.18 3.73-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73-1.64 7.03L12 17.27z"
                                                />
                                            </svg>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="yellow"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                className="w-5 h-5"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M12 17.27l6.18 3.73-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73-1.64 7.03L12 17.27z"
                                                />
                                            </svg>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="yellow"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                className="w-5 h-5"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M12 17.27l6.18 3.73-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73-1.64 7.03L12 17.27z"
                                                />
                                            </svg>
                                        </div>

                                        <p className="text-white text-sm">
                                            "The service was amazing! I had a great experience and would definitely recommend this to others."
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Contant