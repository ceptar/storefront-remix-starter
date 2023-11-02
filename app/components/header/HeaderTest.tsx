import React from "react";
import logo from '~/../public/logo.svg';
import hamburger from '~/../public/hamburger.svg';
import {Button} from '~/components/Button';
import '~/styles/app.css';

const HeaderTest = ({ navbarOpen, setNavbarOpen }) => {
  return (
    <header className="w-full fixed top-0 left-0 p-10 flex z-50">
      {/* Logo */}
      <div className="text-white flex-grow z-50">
      <img
              className="w-[50vw] max-h-[12vh] max-w-[350px] min-w-[150px]"
              src={logo}
              alt="logo"
            />
      </div>
      {/* Hamburger Icon */}
      <button className="button-wrapper h-[48px] w-[48px] p-2"

        onClick={() => setNavbarOpen(!navbarOpen)}
      >
<svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.42969 8H42.5726" />
<path d="M5.42969 24H42.5726" />
<path d="M5.42969 40H42.5726" />
</svg>

      </button>
    </header>
  );
};
export default HeaderTest;