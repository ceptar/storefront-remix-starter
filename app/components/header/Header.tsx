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
  const [headerOpacity, setHeaderOpacity] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const newOpacity = Math.min(scrollPosition / 70, 1); // Ensures opacity doesn't exceed 1
      setHeaderOpacity(newOpacity);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  // const { collections } = useLoaderData<typeof loader>();
  // const data = useRootLoader();
  // const isSignedIn = !!data.activeCustomer.activeCustomer?.id;

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

<header
  className="z-40 top-0 flex items-center fixed justify-between h-[8vh] w-full min-w-full border-b"
  style={{
    backgroundColor: `rgba(255, 255, 255, ${headerOpacity})`,
    borderColor: `rgba(${255 * (1 - headerOpacity)}, ${255 * (1 - headerOpacity)}, ${255 * (1 - headerOpacity)})`, // Interpolates from white to black
    transition: 'background-color 0.3s, border-color 0.3s'
  }}
    >
        <div className="relative px-8 flex flex-row items-center justify-between h-full w-full ">
          <div className="relative  flex flex-col  items-start justify-start w-1/6">
            <button
              className="flex flex-col  bg-opacity-90 shadow-none cursor-pointer justify-center rounded-full items-center py-2 text-sm text-discogray transition-all duration-300 ease-out hover:opacity-70"
              onClick={onCartIconClick}
              aria-label="Open cart tray"
            >
              <Cart className="w-8 h-8 z-40" fill={headerOpacity > 0.5 ? '#000' : '#FFF'}  />
              {cartQuantity ? (
                <div className="top-[1.5px] left-[9px] sm:top-[4px] sm:left-[12px] w-5 h-5 sm:w-6 sm:h-6 z-20 absolute items-center justify-center rounded-full text-md font-metrobold1">
                  {cartQuantity}
                </div>
              ) : (
                ''
              )}
            </button>
          </div>
          <div className="z-40 min-w-[100px] max-w-[300px] flex flex-col w-full p-12">
            <Link to="/">
              <Logo className="max-h-12 " fill={headerOpacity > 0.5 ? '#000' : '#FFF'} />
            </Link>
          </div>
          <div className="z-40 flex flex-col items-end justify-center w-1/6">
            <Sliderex headerOpacity={headerOpacity} />
          </div>
        </div>
      </header>
    </>
  );
}
