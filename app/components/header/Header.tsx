import { Link, useLoaderData } from '@remix-run/react';
import { ShoppingBagIcon } from '@heroicons/react/24/outline';
import { SearchBar } from '~/components/header/SearchBar';
import { useRootLoader } from '~/utils/use-root-loader';
import { UserIcon } from '@heroicons/react/24/solid';
import { classNames } from '~/utils/class-names';
import { useState } from "react";

import '~/styles/app.css';

import HeaderTest from './HeaderTest';

export function Header({
  onCartIconClick,
  cartQuantity,
}: {
  onCartIconClick: () => void;
  cartQuantity: number;
}) {
  const data = useRootLoader();
  const isSignedIn = !!data.activeCustomer.activeCustomer?.id;
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <header>
            
      <HeaderTest navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
    


<div className="h-[8vh]"></div>
    </header>

  );
}
