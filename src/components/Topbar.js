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
            <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.464 16.828C2 15.657 2 14.771 2 11s0-5.657 1.464-6.828C4.93 3 7.286 3 12 3s7.071 0 8.535 1.172S22 7.229 22 11s0 4.657-1.465 5.828C19.072 18 16.714 18 12 18c-2.51 0-3.8 1.738-6 3v-3.212c-1.094-.163-1.899-.45-2.536-.96"/></svg>
            </button>

            <button className="flex items-center text-white bg-gray-400 h-10 w-10 p-2 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" viewBox="0 0 16 16">
            <g fill="none" stroke="currentColor"><path d="m13.258 8.354l.904.805a.91.91 0 0 1 .196 1.169l-1.09 1.862a.94.94 0 0 1-.35.341a1 1 0 0 1-.478.125a1 1 0 0 1-.306-.046l-1.157-.382q-.304.195-.632.349l-.243 1.173a.93.93 0 0 1-.339.544a.97.97 0 0 1-.618.206H6.888a.97.97 0 0 1-.618-.206a.93.93 0 0 1-.338-.544l-.244-1.173a6 6 0 0 1-.627-.35L3.9 12.61a1 1 0 0 1-.306.046a1 1 0 0 1-.477-.125a.94.94 0 0 1-.35-.34l-1.129-1.863a.91.91 0 0 1 .196-1.187L2.737 8v-.354l-.904-.805a.91.91 0 0 1-.196-1.169L2.766 3.81a.94.94 0 0 1 .35-.341a1 1 0 0 1 .477-.125a1 1 0 0 1 .306.028l1.138.4q.305-.195.632-.349l.244-1.173a.93.93 0 0 1 .338-.544a.97.97 0 0 1 .618-.206h2.238a.97.97 0 0 1 .618.206c.175.137.295.33.338.544l.244 1.173q.325.155.627.35l1.162-.382a.98.98 0 0 1 .784.078c.145.082.265.2.35.34l1.128 1.863a.91.91 0 0 1-.182 1.187l-.918.782z"/>
            <path d="M10.5 8a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Z"/></g></svg>
            </button>

            <button className="flex items-center text-white bg-gray-400 h-10 w-10 p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full" viewBox="0 0 16 16">
                    <path fill="currentColor" d="m13.58 11.6l-1.33-2.18V6.33A4.36 4.36 0 0 0 10 2.26a2.5 2.5 0 0 0 0-.38A1.94 1.94 0 0 0 8 0a1.94 1.94 0 0 0-2 1.88a1.6 1.6 0 0 0 0 .38a4.36 4.36 0 0 0-2.25 4.07v3.09L2.42 11.6a1.25 1.25 0 0 0 1.06 1.9h1.77A2.68 2.68 0 0 0 8 16a2.68 2.68 0 0 0 2.75-2.5h1.77a1.25 1.25 0 0 0 1.06-1.9M7.25 1.88A.7.7 0 0 1 8 1.25a.7.7 0 0 1 .75.63a6 6 0 0 0-.75 0a6 6 0 0 0-.75 0M8 14.75a1.44 1.44 0 0 1-1.5-1.25h3A1.44 1.44 0 0 1 8 14.75m-4.52-2.5l1.34-2.17l.18-.31V6.33a4 4 0 0 1 .6-2.12A2.68 2.68 0 0 1 8 3.12a2.68 2.68 0 0 1 2.4 1.09a4 4 0 0 1 .6 2.12v3.44l.18.31l1.34 2.17z" />
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