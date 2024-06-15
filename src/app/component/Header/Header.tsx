"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className=" sticky z-20 top-0 py-4 md:py-5 bg-white backdrop-blur-3xl bg-opacity-100">
      <div className="w-11/12  max-w-screen-xl  mx-auto bg-white ">
        <nav className="flex items-center justify-between" aria-label="Global">
          <div className="flex ">
            <div className="-m-1.5 p-1.5">
              <Link href="/">
                <Image
                  className="w-[40px] md:w-[60px] h-auto"
                  src="/logo.jpg"
                  alt="Logo"
                  width={70}
                  height={37}
                  priority
                />
              </Link>
            </div>
          </div>

          <div className="flex items-center">
            <div className="flex lg:justify-end gap-1 md:gap-4 ">
              <Link
                href="https://drive.google.com/uc?export=download&id=1Vdbg2Kayyw9bFuH1DXFeEyN7zWyemitO"
                passHref
              >
                <div className="border border-[#957628]/50 bg-[#957628] hover:bg-[#957628]/90 flex flex-row gap-2 py-2 md:py-3 px-3 md:px-5 rounded-lg cursor-pointer">
                  <p className="font-semibold text-xs md:text-sm text-white">
                    Download
                  </p>
                  <Image
                    src="../icons/download-blue.svg"
                    alt="Download Icon Button"
                    width={16}
                    height={16}
                    className="w-[16px] h-[16px]"
                  />
                </div>{" "}
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
