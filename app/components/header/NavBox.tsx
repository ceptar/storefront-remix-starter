import { useState, useEffect } from 'react';

import { DropdownZwei } from './DropdownZwei';
import logo from '~/../public/logo.svg';
import '~/styles/app.css';

export function NavBox() {
  // const [navSize, setnavSize] = useState("7rem");
  const [navColor, setnavColor] = useState('#transparent');

  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavColor('#ffffff') : setnavColor('transparent');
    // window.scrollY > 10 ? setnavSize("7rem") : setnavSize("7rem");
  };
  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
    return () => {
      window.removeEventListener('scroll', listenScrollEvent);
    };
  }, []);

  return (
    <header className="fixed top-0 z-10 w-full">
      <nav
        style={{
          backgroundColor: navColor,

          // HIER WAR HÖHE DES HEADERS

          // HIER IST HÖHE DES HEADERS
          transition: 'all 1s',
        }}
      >
        <div className=" grid-cols-3 flex items-center justify-between">
          <div className="flex-col justify-items-start"></div>
          <div className="flex-col justify-items-center">
            <img
              className="w-[80vw] max-w-[350px] min-w-[150px]"
              src={logo}
              alt="logo"
            />
          </div>
          <div className="flex-col items-center justify-items-end">
            <DropdownZwei />
          </div>
        </div>
      </nav>
    </header>
  );
}
