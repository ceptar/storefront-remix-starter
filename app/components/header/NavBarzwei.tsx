import React, { useState } from "react";
import HeaderTest from "./HeaderTest";
// import MenuOverlay from "./MenuOverlay";


function NavBarzwei() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <div className="w-full min-h-screen bg-gray-800">
      <HeaderTest navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />

      {/* <MenuOverlay navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} /> */}

      {/* Main */}

    </div>
  );
}

export default NavBarzwei;