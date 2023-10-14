import Link from "next/link";
import React from "react";
import { TbGridDots } from "react-icons/tb";

function HomeHeader() {
  return (
    <header className="p-5 text-sm">
      <div className="flex justify-end items-center space-x-4">
        <Link href="/" className="hover:underline">
          Gmail
        </Link>
        <Link href="/" className="hover:underline">
          Images
        </Link>
        <TbGridDots className="bg-transparent hover:bg-gray-200 rounded-full text-4xl p-2" />
        <button className="bg-blue-500 text-white px-6 py-2 font-medium rounded-md hover:brightness-105 hover:shadow-md transition-shadow">
          Sign in
        </button>
      </div>
    </header>
  );
}

export default HomeHeader;
