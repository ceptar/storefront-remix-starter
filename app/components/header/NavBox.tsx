import { useState, useEffect } from 'react';
import { DropdownEins } from './DropdownEins';
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
    <header className="fixed h-24 top-0 z-10 w-full">
      <nav
        className="h-24 w-full justify-center"
        style={{
          backgroundColor: navColor,

          // HIER WAR HÖHE DES HEADERS

          // HIER IST HÖHE DES HEADERS
          transition: 'all 1s',
        }}
      >
        <div className="flex md:flex md:flex-grow flex-row justify-between space-x-1">
          <div className="p-4 flex md:flex md:flex-grow flex-col justify-start space-x-1"></div>
          <div className="p-4 flex md:flex md:flex-grow flex-col justify-center space-x-1"></div>
          <div className="p-4 flex md:flex md:flex-shrink flex-col justify-end space-x-1">
            {' '}
            <DropdownEins />
          </div>
        </div>
      </nav>
    </header>
  );
}
