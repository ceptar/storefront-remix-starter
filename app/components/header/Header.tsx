
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
      className="bg-discogray text-white w-full fixed h-[8vh] flex justify-center top-0 z-40"
    >

<div   
className="w-full px-8 h-full flex justify-between "      
>
<div className="w-1/6 flex flex-col items-start justify-center min-w-[1/6] max-w-[1/6]">
<div><button
        className="button flex flex-row"
        onClick={onCartIconClick}
        aria-label="Open cart tray"
      >
            <div className="flex flex-col items-start justify-center w-16 h-16">
        <Cart
          
        />
</div>
        {cartQuantity ? (
          <div className="top-4 -right-6 font-metroblack1 w-4 h-4">{cartQuantity}</div>
        ) : (
          ''
        )}
      </button>
      </div>
  </div>
    <div className="py-2 pt-2 inline-flex justify-center w-4/6">
  <Link to="/">
    <Logo className="h-full min-w-[100px] max-w-[450px] tronfilter"/>
    </Link>

      </div>
      
      <div className="flex flex-col items-end justify-center w-1/6 min-w-[1/6] max-w-[1/6]">

     <Sliderex />
      

      </div>
</div>

</div>



  );
}
export default Header