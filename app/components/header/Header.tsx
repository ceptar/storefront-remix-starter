import React from 'react';
import { LoaderArgs, Link, useLoaderData, useFetcher } from '@remix-run/react';
import Cart from '~/components/svgs/Cart';
import { SearchBar } from '~/components/header/SearchBar';
import { useRootLoader } from '~/utils/use-root-loader';
import { UserIcon } from '@heroicons/react/24/solid';
import { getCollections } from '~/providers/collections/collections';
import '~/styles/app.css';
import Logo from '~/components/svgs/Logo';
import Sliderex from './Sliderex';


export async function loader({ request }: LoaderArgs<null>) {
  const collections = await getCollections(request, { take: 20 });
  return {
    collections,
  };
}

export default function Header({
  onCartIconClick,
  cartQuantity,
}: {
  onCartIconClick: () => void;
  cartQuantity: number;
}) {
  
  const { collections } = useLoaderData<typeof loader>();
  const data = useRootLoader();
  const isSignedIn = !!data.activeCustomer.activeCustomer?.id;
 
  return (
    <>
      <header className="hidden">
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
      </header>

    <div className="z-40 bg-discogray top-0 items-center fixed justify-between h-[8vh] w-full min-w-full">
    <div className="relative px-8 flex flex-row items-center justify-between h-[8vh] w-full ">
      <div className="relative  flex flex-col  items-start justify-start w-1/6">

      <button
            className="flex flex-col bg-white bg-opacity-90 shadow-md shadow-gray-500 cursor-pointer justify-center rounded-full items-center p-2 text-sm border text-gray-500 transition-all duration-300 ease-out hover:bg-gray-100 hover:opacity-70 hover:shadow-none "
            
            onClick={onCartIconClick}
            aria-label="Open cart tray"
          >
            <Cart className="w-10 h-10 z-40"/>
            {cartQuantity ? (
             <div className="z-20 absolute top-1.5 left-[20px] rounded-full font-metrobold1 bg-primary-600 w-6 h-6">
             {cartQuantity}
           </div>
            ) : (
              ''
            )}
          </button>
      </div>
      <div className="tronfilter z-40 h-auto min-w-[100px] max-w-[450px] flex flex-col w-full ">
      <Link to="/">
    <Logo/>
    </Link>

      
        
      </div>
      <div className="z-40 flex flex-col items-end justify-center w-1/6">
      <Sliderex/>
      </div>
      </div>
    </div>
    </>
  );
}
