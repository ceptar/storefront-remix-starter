import { useState, useEffect } from 'react';
import { Popover, Transition } from '@headlessui/react';
import logo from '~/../public/logo.svg';
import '~/styles/app.css';

export function NavBar() {
  const [navColor, setNavColor] = useState('transparent');
  const [navTextCol, setNavTextCol] = useState('#ffffff');

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setNavColor('#ffffff');
      setNavTextCol('rgb(55 65 81)');
    } else {
      setNavColor('transparent');
      setNavTextCol('#ffffff');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (

    <nav className="fixed z-50 h-12[vh] top-0 pt-4 pr-8 pb-4 pl-8 flex w-full items-center justify-between max-w-screen-2xl md:flex-row mt-auto mr-auto mb-auto ml-auto" 
    style={{
      backgroundColor: navColor,
      color: navTextCol,
      transition: 'background-color 100ms',
    }}>
  <div className="flex-row items-center justify-between flex w-full max-w-screen-2xl md:flex-row mt-auto mr-auto mb-auto ml-auto">
    <div className="flex-col justify-between w-2/5">
      <div className="flex-row  justify-start items-center mt-2 mb-2 md:m-0 hidden md:flex">
AAA

      </div>
      </div>
      <div className="flex-col">
      <div className="flex-row flex items-center justify-center order-first md:order-none">
     
      <img
              className="w-[50vw] max-h-[12vh] max-w-[350px] min-w-[150px]"
              src={logo}
              alt="logo"
            />

      </div>
      </div>
      <div className="flex-col items-center w-2/5">
      <div className="flex-row-reverse items-center md:justify-start hidden md:flex">
BBB

      </div>
      <div className="md:hidden flex items-center">
        <div className="outline-none mobile-menu-button">
         
        </div>
      </div>
    </div>
  
  </div>
</nav>

);
}