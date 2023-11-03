"use client";
import React, {useRef, useState}from 'react'
import { Playfair_Display } from 'next/font/google'
import Link from 'next/link';
import { useSpring, animated } from 'react-spring';




const screenmockup = () => {
    return (
        <>
        <div className='container relative flex justify-center scale-75 md:scale-100 rotate-12'> 
            <div className="shadow-xl relative flex justify-center h-[530px] w-[250px]  border-4 border-black rounded-2xl my-0 md:my-20 bg-cover bg-screenMockup z-10">

                <span className="border border-black bg-black w-16 h-4 mt-2 rounded-full"></span>



                <span className="absolute -right-1.5 top-20 border-2 border-black h-10 rounded-md"></span>


                <span className="absolute -left-1.5 top-16 border-2 border-black h-6 rounded-md"></span>
                <span className="absolute -left-1.5 top-32 border-2 border-black h-12 rounded-md"></span>
                <span className="absolute -left-1.5 top-48 border-2 border-black h-12 rounded-md"></span>
            </div>

        </div>
        </>
    )
}

export default screenmockup

