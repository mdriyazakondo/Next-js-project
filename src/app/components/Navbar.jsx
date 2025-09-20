import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="max-w-7xl mx-auto my-3 flex items-center justify-between">
      <h2>Next.js</h2>
      <nav className="">
        <ul className="flex gap-4 justify-end items-center">
          <Link href="/">
            <li className=" font-semibold cursor-pointer text-gray-500">
              Home
            </li>
          </Link>
          <Link href="/Services">
            <li className=" font-semibold cursor-pointer text-gray-500">
              Services
            </li>
          </Link>
          <Link href="/About">
            <li className=" font-semibold cursor-pointer text-gray-500">
              About
            </li>
          </Link>
          <Link href="/posts">
            <li className=" font-semibold cursor-pointer text-gray-500">
              Posts
            </li>
          </Link>
          <Link href="/meals">
            <li className=" font-semibold cursor-pointer text-gray-500">
              Meals
            </li>
          </Link>
          <Link href="/products">
            <li className=" font-semibold cursor-pointer text-gray-500">
              Products
            </li>
          </Link>
          <Link href="/products/add">
            <li className=" font-semibold cursor-pointer text-gray-500">
              Add Products
            </li>
          </Link>
        </ul>
      </nav>
      <button className="font-medium bg-green-600 px-6 py-1.5 hover:bg-green-700 rounded-md text-white cursor-pointer">
        Login
      </button>
    </div>
  );
};

export default Navbar;
