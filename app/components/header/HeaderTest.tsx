import { useEffect, useState } from 'react';
import '~/styles/app.css';
import DropDowneins from './DropDowneins';
import logo from '~/../public/logo.svg';

const HeaderTest = () => {
  const [navColor, setNavColor] = useState('transparent');
  const [navTextCol, setNavTextCol] = useState('rgb(55 65 81)');

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setNavColor('hsla(235, 21%, 23%, 0.8)');
      setNavTextCol('rgb(55 65 81)');
    } else {
      setNavColor('transparent');
      setNavTextCol('rgb(55 65 81)');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="fixed h-[8vh] top-0 z-50 w-full">
      <nav
        className="shadow-md w-full h-full flex items-center justify-center"
        style={{
          backgroundColor: navColor,
          color: navTextCol,
          transition: 'background-color 0.5s',
        }}
      >
        <div className="flex w-full justify-between items-center max-w-screen-xl mx-auto p-4">
          <div className="flex">
            <DropDowneins />
          </div>
          <div className="flex-grow flex justify-center items-center">
            <img src={logo} className="min-w-[100px] max-w-[400px]" alt="Logo" />
          </div>
          <div className="flex w-9">{/* Add your hamburger menu here */}</div>
        </div>
      </nav>
    </div>
  );
};

export default HeaderTest;