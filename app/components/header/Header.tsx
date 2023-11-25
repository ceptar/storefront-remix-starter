
import { Link, useLoaderData } from '@remix-run/react';
import Cart from '~/components/svgs/Cart';
import { SearchBar } from '~/components/header/SearchBar';
import { useRootLoader } from '~/utils/use-root-loader';
import { UserIcon } from '@heroicons/react/24/solid';

import '~/styles/app.css';
import Logo from '~/components/svgs/Logo';
import Sliderex from './Sliderex';

export function Header({
  onCartIconClick,
  cartQuantity,
}: {
  onCartIconClick: () => void;
  cartQuantity: number;
}) {
  const data = useRootLoader();
  const isSignedIn = !!data.activeCustomer.activeCustomer?.id;

  return (
    <div
      className="bg-discogray text-white w-full fixed h-[8vh] flex flex-col justify-center top-0 z-40"
    >

<div   
className="w-full px-8 h-full flex flex-col items-center justify-center"      
>
<div className="w-1/6 flex flex-col items-start justify-center min-w-[1/6] max-w-[1/6]">
<button
        className="button flex items-start justify-center w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16"
        onClick={onCartIconClick}
        aria-label="Open cart tray"
      >
            
        <Cart />

        {cartQuantity ? (
          <div className="top-4 -right-6 font-metroblack1 w-4 h-4">{cartQuantity}</div>
        ) : (
          ''
        )}
      </button>


    <div className="py-2 pt-2 flex flex-col justify-center w-4/6">
  <Link to="/">
    <Logo className="h-full min-w-[100px] max-w-[450px] tronfilter"/>
    </Link>

      </div>
      
      <div className="flex flex-col items-end justify-center w-1/6 min-w-[1/6] max-w-[1/6]">

     <Sliderex />
      

      </div>
</div>

</div>
</div>



  );
}
export default Header