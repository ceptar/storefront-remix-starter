import { Link, useLoaderData } from '@remix-run/react';
import { ShoppingBagIcon } from '@heroicons/react/24/outline';
import { SearchBar } from '~/components/header/SearchBar';
import { useRootLoader } from '~/utils/use-root-loader';
import { UserIcon } from '@heroicons/react/24/solid';
import { classNames } from '~/utils/class-names';
import NavBarzwei from './NavBarzwei';
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
      
      <NavBarzwei />
    

      <div>
      <div>
        
      </div>
</div>
    </header>
  );
}
