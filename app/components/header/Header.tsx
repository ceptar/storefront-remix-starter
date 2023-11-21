import { useEffect, useState } from 'react';
import HeaderDrei from './HeaderDrei';
import { Link } from '@remix-run/react';
import { ShoppingBagIcon } from '@heroicons/react/24/outline';
import { SearchBar } from '~/components/header/SearchBar';
import { useRootLoader } from '~/utils/use-root-loader';
import { UserIcon } from '@heroicons/react/24/solid';
import { classNames } from '~/utils/class-names';
import '~/styles/app.css';
import Logo from '~/components/svgs/Logo';
import Sliderex from '~/components/header/Sliderex';


const Header = ({ 
    onCartIconClick,
cartQuantity,
}: {
onCartIconClick: () => void;
cartQuantity: number;

 }) => {

/*   const [navColor, setNavColor] = useState('transparent');
  const [navTextCol, setNavTextCol] = useState('rgba(255, 255, 255, 0.95)');

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setNavColor('hsla(235, 21%, 23%, 0.9)');
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
  }, []); */


  return (
    <nav className="bg-discoyellow w-full fixed h-[8vh] flex justify-center top-0 z-50 shadow-md mix-blend-hardlight "
       
/*     style={{
    backgroundColor: navColor,
      color: navTextCol,
      transition: 'background-color 0.3s',
    }} */

    >
<div   
className="px-2 md:max-w-full lg:max-w-screen-xl h-full flex flex-grow justify-center "      
>
<div className="py-2 pl-2 pr-4 flex flex-col items-start justify-center min-w-[15px] max-w-[15px]">

  </div>
    <div className="py-2 pl-2 pr-4 flex flex-grow  items-center justify-center">

    <Logo className="max-w-[450px] min-w-[100px]"/>


      </div>
      
      <div className="flex flex-col items-end justify-center ml-auto">

     <Sliderex />
      

      </div>
</div>

</nav>



  );
}
export default Header