import { useEffect, useState } from 'react';
import '~/styles/app.css';
import DropDowneins from './DropDowneins';
import logo from '~/../public/logo.svg'


const HeaderTest = ({  }) => {

  const [navColor, setNavColor] = useState('transparent');
  const [navTextCol, setNavTextCol] = useState('rgb(55 65 81)');

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setNavColor('hsla(235, 21%, 23%, 0.9)');
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
    <nav className="w-full fixed h-[8vh] flex justify-center top-0 z-50 shadow-md mix-blend-hardlight "
    
    
    style={{
    backgroundColor: navColor,
      color: navTextCol,
      transition: 'background-color 0.5s',
    }}>
<div   
className="px-2 md:max-w-full lg:max-w-screen-xl h-full flex flex-grow justify-center "      
>
<div className="py-2 pl-2 pr-4 flex flex-col items-start justify-center h-max-[80%]]  min-w-[15px] max-w-[15px]">
<DropDowneins />
  </div>
    <div className="py-2 pl-2 pr-4 flex flex-grow  items-center justify-center h-max-[90%]] min-w-3/5">

<img src={logo} className="min-w-[200px] max-w-[400px]"></img>

      </div>
      
      <div className="flex flex-col items-end justify-center min-w-[15px] max-w-[15px] ">

      {/* Hamburger Icon */}
      

      </div>

</div>

</nav>



  );
}
export default HeaderTest