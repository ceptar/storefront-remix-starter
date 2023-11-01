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
      transition: 'background-color 0.5s',
    }}>
  <div className="flex-row items-center justify-between flex w-full max-w-screen-2xl md:flex-row mt-auto mr-auto mb-auto ml-auto">
    <div className="flex-col">
      <div className="flex-row  justify-between items-center mt-2 mb-2 md:m-0 hidden md:flex">
        <a href="#" className="text-gray-600 text-center mr-6 font-medium text-base">Product</a>
        <a href="#" className="text-gray-600 text-center mr-6 font-medium text-base">Features</a>
        <a href="#" className="text-gray-600 text-center font-medium text-base">Pricing</a>
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
      <div className="flex-col">
      <div className="flex-row justify-center items-center md:justify-start hidden md:flex">
        <button className="h-9 w-24 text-gray-600 bg-white border-2 border-white flex items-center justify-center
            text-center rounded-lg text-lg font-normal mr-6">Sign in</button>
        <button className="h-9 w-24 text-white bg-blue-700 hover:bg-blue-900 hover:border-blue-900 border-2 flex
            items-center justify-center text-center border-blue-700 rounded-lg text-lg font-normal mr-auto">Sign
            up</button>
      </div>
      <div className="md:hidden flex items-center">
        <div className="outline-none mobile-menu-button">
         
        </div>
      </div>
    </div>
    <div className="hidden md:hidden md:hidden mobile-menu">
      <div>
        <div className="flex flex-col">
          <a href="#" className="text-gray-600 text-center mt-2 font-medium text-base">Product</a>
          <a href="#" className="text-gray-600 text-center mt-2 font-medium text-base">Features</a>
          <a href="#" className="text-gray-600 text-center mt-2 font-medium text-base">Pricing</a>
          <button className="h-9 w-24 text-gray-600 bg-white border-2 border-white flex items-center justify-center
              text-center rounded-lg text-lg font-normal mt-2 mr-auto ml-auto">Sign in</button>
          <button className="h-9 w-24 text-white bg-blue-700 hover:bg-blue-900 hover:border-blue-900 border-2 flex
              items-center justify-center text-center border-blue-700 rounded-lg text-lg font-normal mt-2 mr-auto
              ml-auto">Sign up</button>
        </div>
      </div>
    </div>
  </div>
</nav>

);
}