"use client";
import { useState } from "react";

import Link from 'next/link';



export default function dropdown() {
    const [navbar, setNavbar] = useState(false);

    return (
        <div className="w-full bg-gray-500 shadow px-7 p-3">
            <nav className=" bg-blue-400/20 rounded-tr-3xl rounded-bl-3xl shadow z-10">
                <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                    <div>
                        <div className="flex items-center justify-between py-3 md:py-5 md:block ">
                            <div className="bg-blue px-10 bg-blue-400/90 rounded-tr-2xl rounded-bl-2xl">
                                <a href="javascript:void(0)">
                                    <h2 className="text-2xl hover:text-bold font-thin text-white">QFlow</h2>
                                </a>
                            </div>
                            <div className="md:hidden">
                                <button
                                    className="px-2 py-1 text-gray-100 rounded-tr-2xl rounded-bl-2xl outline-none focus:border-gray-400 focus:border"
                                    onClick={() => setNavbar(!navbar)}
                                >
                                    {navbar ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M4 6h16M4 12h16M4 18h16"
                                            />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div
                            className={`flex-1 justify-self-center pb-3 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                                }`}
                        >
                            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 p-5">
                                <li className="text-gray-200 hover:text-black font-thin">
                                    <Link href="/">Home</Link>
                                </li>
                                <li className="text-gray-200 hover:text-black font-thin">
                                    <Link href="/about">About Us</Link>
                                </li>
                                <li className="text-gray-200 hover:text-black font-thin">
                                    <Link href="/demo">Demo</Link>
                                </li>
                                <li className="text-gray-200 hover:text-black font-thin">
                                    <Link href="/contact">Contact Us</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>

    );
}