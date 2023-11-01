import { Link, useLoaderData } from '@remix-run/react';
import { ShoppingBagIcon } from '@heroicons/react/24/outline';
import { SearchBar } from '~/components/header/SearchBar';
import { useRootLoader } from '~/utils/use-root-loader';
import { UserIcon } from '@heroicons/react/24/solid';
import { classNames } from '~/utils/class-names';
import {NavBar} from './NavBar';
import '~/styles/app.css';

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
    <header>
      
      <NavBar />
      <div className="h-[12vh]"></div>

      <div className="max-w-6xl mx-auto p-4 flex items-center space-x-4">

        <div className="flex space-x-4 hidden sm:block">
          {data.collections.map((collection) => (
            <Link
              className="text-sm md:text-base text-gray-200 hover:text-white"
              to={'/collections/' + collection.slug}
              prefetch="intent"
              key={collection.id}
            >
              {collection.name}
            </Link>
          ))}
        </div>
        <div className="flex-1 md:pr-8">
          <SearchBar></SearchBar>
        </div>
        <div>
       
       <button className="relative w-fit bg-opacity-20 rounded text-white p-1">
          <Link       
             to={isSignedIn ? '/account' : '/sign-in'}
              className="flex space-x-1"
          >
              <UserIcon className="w-fit whitespace-nowrap h-9"></UserIcon>
              <span>{isSignedIn ? 'My Account' : 'Sign In'}</span>
            </Link>
            </button>
          </div>
        <div className="">
          <button
            className="relative  bg-white bg-opacity-20 rounded text-white p-1"
            onClick={onCartIconClick}
            aria-label="Open cart tray"
          >
            <ShoppingBagIcon className="w-9 h-9"></ShoppingBagIcon>
            {cartQuantity ? (
              <div className="absolute rounded-full -top-2 -right-2 bg-primary-600 w-6 h-6">
                {cartQuantity}
              </div>
            ) : (
              ''
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
