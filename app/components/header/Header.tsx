import React from 'react';
import { Link } from '@remix-run/react';
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
  // const { collections } = useLoaderData<typeof loader>();
  const data = useRootLoader();
  const isSignedIn = !!data.activeCustomer.activeCustomer?.id;

  return (
    <>
      {/* <header className="hidden">
        {collections.map((collection) => (
          <Link
            className="text-sm md:text-base text-gray-200 hover:text-white"
            to={`/collections/${collection.slug}`}
            prefetch="intent"
            key={collection.id}
          >
            {collection.name}
          </Link>
        ))}
      </header> */}

      <header className="z-40 bg-discogray top-0 items-center fixed justify-between h-[8vh] w-full min-w-full">
        <div className="relative px-4 flex flex-row items-center justify-between h-[8vh] w-full ">
          <div className="relative  flex flex-col  items-start justify-start w-1/6">
            <button
              className="flex flex-col  bg-opacity-90 shadow-none cursor-pointer justify-center rounded-full items-center p-2 text-sm text-discogray-500 transition-all duration-300 ease-out hover:opacity-70"
              onClick={onCartIconClick}
              aria-label="Open cart tray"
            >
              <Cart className="tronfilter w-8 h-8 sm:w-10 sm:h-10 z-40" />
              {cartQuantity ? (
                <div className="top-[1.5px] left-[17px] sm:top-[4px] sm:left-[20px] w-5 h-5 sm:w-6 sm:h-6 z-20 absolute items-center justify-center rounded-full text-md font-metrobold1 bg-primary  ">
                  {cartQuantity}
                </div>
              ) : (
                ''
              )}
            </button>
          </div>
          <div className="tronfilter z-40 h-auto min-w-[100px] max-w-[300px] flex flex-col w-full ">
            <Link to="/">
              <Logo />
            </Link>
          </div>
          <div className="z-40 flex flex-col items-end justify-center w-1/6">
            <Sliderex />
          </div>
        </div>
        </header>
        </>


  );
}
