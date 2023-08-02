"use client"
import Link from 'next/link'

import {useState} from 'react'

export default function Navbar() {
    const [activeButton, setActiveButton] = useState("home")


    return (
        <div className=" flex  w-full bg-gray-600 h-14 text-white">
            <div className="ml-4 self-center ">
                <Link href={"/"}>
                    <h1 className="text-4xl text-center bg-black p-2 " onClick={()=>setActiveButton("home")} >LESLIE</h1>
                </Link>
            </div>
            <ul className="flex w-full h-full justify-end items-center  text-xl ">
                <li className={`flex mr-4 h-full px-2 ${activeButton=== "home" ? "bg-slate-900":"" }` } onClick={()=> setActiveButton("home")} >
                    <Link href={"/"} className='self-center'>
                        Home
                    </Link>
                </li>
                <li  className={` flex mr-4 h-full  px-2 ${activeButton=== "about" ? "bg-slate-900":"" }` } onClick={()=> setActiveButton("about")}>
                    <Link href={"/about"} className='self-center'>
                        About
                    </Link>
                </li>
                <li  className={`flex  h-full  px-2 mr-2 ${activeButton=== "contact" ? "bg-slate-900":"" }` } onClick={()=> setActiveButton("contact")}>
                    <Link href={"/contact"} className='self-center'>
                        Contact
                    </Link>
                </li>
            </ul>
        </div>
    )
}