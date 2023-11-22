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
import Sliderex from './Sliderex';


const Header = ({ 
    onCartIconClick,
cartQuantity,
}: {
onCartIconClick: () => void;
cartQuantity: number;

 }) => {

  const [navColor, setNavColor] = useState('transparent');
  const [navTextCol, setNavTextCol] = useState('rgb(46 48 71)');

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setNavColor('rgb(46 48 71)');
      setNavTextCol('#ffffff');
    } else {
      setNavColor('transparent');
      setNavTextCol('rgb(46 48 71)');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <nav className="bg-discogray w-full fixed h-[8vh] flex justify-center top-0 z-40"
       
    style={{
    backgroundColor: navColor,
      color: navTextCol,
      transition: 'background-color 0.3s',
    }}

    >
<div   
className="w-full px-2 md:max-w-full lg:max-w-screen-xl h-full flex justify-between "      
>
<div className="w-1/6 flex flex-col items-start justify-center min-w-[1/6] max-w-[1/6]">

  </div>
    <div className="py-2 pl-2 pr-4 flex flex-col items-center justify-center w-4/6">

    <Logo className="min-w-[100px] max-w-[400px] tronfilter"/>


      </div>
      
      <div className="flex flex-col items-end justify-center w-1/6 min-w-[1/6] max-w-[1/6]">

     <Sliderex />
      

      </div>
</div>

</nav>



  );
}
export default Header