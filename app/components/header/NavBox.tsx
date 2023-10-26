import React, { useState, useEffect } from "react";
import Navigation from './Navigation';
import DropdownEins from './DropdownEins';

export default function NavBox() {
  // const [navSize, setnavSize] = useState("7rem");
  const [navColor, setnavColor] = useState("#transparent");

  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavColor("#ffffff") : setnavColor("transparent");
    // window.scrollY > 10 ? setnavSize("7rem") : setnavSize("7rem");

  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  return (
    <div className="fixed bg-opacity-70 top-0 z-10 w-full">
      <nav
        style={{
          backgroundColor: navColor,
          // HIER IST HÖHE DES HEADERS
          height: "7rem",
          // HIER IST HÖHE DES HEADERS
          transition: "all 1s"
        }}
      >
<DropdownEins />
      </nav>
    </div>
  );
}