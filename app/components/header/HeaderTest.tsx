import { useEffect, useState } from 'react';
import '~/styles/app.css';
import DropDowneins from './DropDowneins';
import logo from '~/../public/logo.svg'


const HeaderTest = () => {

  const [navColor, setNavColor] = useState('transparent');
  const [navTextCol, setNavTextCol] = useState('rgb(55 65 81)');

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setNavColor('hsla(235, 21%, 23%, 0.5)');
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
    <nav className="w-full fixed h-[8vh]  top-0 z-50 shadow-md "
    
    
    style={{
    backgroundColor: navColor,
      color: navTextCol,
      transition: 'background-color 0.5s',
    }}>
<div className="px-2 md:max-w-full justify-center lg:max-w-screen-xl h-full flex"      
>
<div className="flex items-center justify-center">
<div className="py-4 pl-2 pr-4 flex flex-col justify-start min-w-[15px] max-w-[15px]">
<DropDowneins />
  </div>

    <div className="min-w-[120px] max-w-[350px] px-2 md:max-w-full flex-grow justify-between lg:max-w-screen-xl h-full flex"      
>
<img src={logo} />

      </div>
      
      <div className="flex flex-col items-end justify-center min-w-[15px] max-w-[15px] ">


      

      </div>
      </div>
</div>

</nav>



  );
}
export default HeaderTest