import {
    Link,
    Links,
  } from '@remix-run/react';
import styles from './styles/app.css';

import  { useState } from "react";
import React from 'react'

export default function Navbar() {
const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <nav className="flex items-center flex-wrap bg-white-400 p-3 ">
        <Link href="https://drive.google.com/file/d/1-BUWk9mtWsMWbPC9w7BdS8-mGFS3FhFC/view?usp=sharing">
          <a className="inline-flex items-center p-2 mr-4 ">
            <span className="text-3xl text-black font-bold uppercase tracking-wide">
              CV
            </span>
          </a>
        </Link>
        <button
          className=" inline-flex p-3 hover:bg-white-600 rounded lg:hidden text-black ml-auto hover:text-black outline-none"
          onClick={handleClick}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
        <div
          className={`${
            active ? "" : "hidden"
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
            <Link href="/">
              <a className="2xl:inline-flex text-2xl lg:w-auto w-full px-5 py-3 rounded text-black font-bold items-center justify-center hover:bg-white-600 hover:text-black ">
                Home
              </a>
            </Link>
            <Link href="/about">
              <a className="2xl:inline-flex text-2xl lg:w-auto w-full px-5 py-3 rounded text-black font-bold items-center justify-center hover:bg-white-600 hover:text-black">
                About
              </a>
            </Link>
            <Link href="/#projects-section">
              <a className="2xl:inline-flex text-2xl lg:w-auto w-full px-5 py-3 rounded text-black font-bold items-center justify-center hover:bg-white-600 hover:text-black">
                Projects
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
