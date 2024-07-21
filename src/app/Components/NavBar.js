"use client";
import Image from "next/image";
import { FaBarsStaggered } from "react-icons/fa6";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [moblieNav, setMobileNav] = useState(false);


  return (
    <>
      <header className="  p-5  mx-5  lg:mx-5  " >
        
        <div className=" flex   justify-between items-center  md:hidden">
          <Link href={"/"}>
            <Image
              src="/logo.png"
              alt="logo"
              width={100}
              height={100}
              className="md:w-10 lg:hidden"
            ></Image>
          </Link>
          <Link href={"/"}>
              <Image src="/logo.png" alt="logo" height={150} className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 lg:inline hidden " width={150} ></Image>
            </Link>
          <button
            className="border p-2"
            onClick={() => setMobileNav((prev) => !prev)}
          >
            <FaBarsStaggered />
          </button>
        </div>
    
        {moblieNav && (
          <div
            className=" p-4 bg-white border rounded-lg mt-2 flex flex-col gap-3 font-semibold text-center    "
            onClick={() => setMobileNav(false)}
          >
            <Link href={"/"} className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ">
              Home
            </Link>
          
            <Link
              href={"/BuyList"}
              className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 "
            >
              Buy Property
            </Link>
            <Link
              href={"/RentList"}
              className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 "
            >
              Rent Property
            </Link>
          
          </div>
        )}


        <div className="hidden md:flex items-center justify-between   py-2 ">
          <nav className="flex items-center gap-14 text-gray-900 font-semibold ">
            <Link href={"/"}>
              <Image src="/logo.png" alt="logo" height={150} className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 " width={150} ></Image>
            </Link>

            <Link href={"/"} className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ">
              Home
            </Link>
          
           
            <Link
              href={"/BuyList"}
              className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 "
            >
            
            Buy Property
            </Link>
            <Link
              href={"/RentList"}
              className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 "
            >
                Rent Property
            </Link>
          </nav>
       
        </div>
      </header>
    </>
  );
}
