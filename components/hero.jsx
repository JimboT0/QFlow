"use client";
import React, { useRef, useState } from 'react'
import { Playfair_Display } from 'next/font/google'
import Link from 'next/link';
import { useSpring, animated } from 'react-spring';

import Screenmockup from './screenmockup';

function hero() {
    return (
        <div className='bg-gradient-to-b from-gray-500 to-white overflow-hidden max-w-[100vw]'>
            <div className="w-[100%] h-100vh bg-clear flex flex-col md:flex-row justify-center items-center text-center isolate overflow-hidden">
                <Screenmockup />
                <div className=' flex flex-col justify-center items-center text-center md:mr-60'>
                    <div className='bg-blue px-10 bg-blue-400 rounded-tr-3xl rounded-bl-3xl shadow-xl'>
                        <div className="w-[50%] text-gray-100 text-[50px] tracking-wide font-thin">QFlow</div>
                    </div>

                    <div className="p-10 text-gray-100 text-base">An intuitive solution for a better customer experience. Letting your customers order anything without needing to queue.</div>
                    <div className='flex justify-center items-center text-center md:p-4 pb-10 flex-col w-[90%] md:flex-row'>
                        <Link href='/demo' className="w-[60%] h-[50px] bg-white hover:opacity-80 flex justify-center items-center text-center m-2 shadow-xl rounded-xl border-2 border-gray-100"><div className="w-[100%] text-center text-black text-[17px] font-thin tracking-tight">Demo</div></Link>
                        <Link href='/demo' className="w-[60%] h-[50px] bg-white hover:opacity-80 flex justify-center items-center text-center m-2 shadow-xl rounded-xl border-2 border-gray-100 "><div className="w-[100%] text-center text-black text-[17px] font-thin tracking-tight">Demo</div></Link>
                    </div>

                </div>
                <div className="absolute left-100 top-[85%] -z-10 md:-translate-x-5 blur-2xl md:top-[15rem] overflow-hidden max-w-[100%]" aria-hidden="true">
                    <div
                        className="aspect-[1155/678] md:w-[90rem] w-[70rem]  bg-gradient-to-tr from-blue-400 to-blue-700 opacity-40 overflow-hidden"
                        style={{
                            clipPath:
                                'polygon(27.9% 45.1%, 0% 64.6%, 2.8% 26.9%, 18.5% 0.1%, 19.3% 2%, 27.5% 32.5%, 39.8% 62.4%, 47.6% 68.1%, 52.5% 58.3%, 54.8% 34.5%, 72.5% 76.7%, 99.9% 64.9%, 82.1% 100%, 72.4% 76.8%, 23.9% 97.7%, 25.9% 44.1%)',
                        }}
                    />
                </div>


            </div>
        </div>

    )
}

export default hero
