import { Link, useLoaderData } from '@remix-run/react';
import { useRootLoader } from '~/utils/use-root-loader';
import { getallCollections } from '~/providers/collections/collectionsall';
import type { LoaderArgs } from '@remix-run/server-runtime';
import React, { useState } from 'react';
import Hamburger from '~/components/svgs/Hamburger';
import CollectionsTreemenu from '~/components/CollectionsTreemenu';
import { SearchBar } from '~/components/header/SearchBar';
import SignIn from '~/components/svgs/SignIn';
import { UserIcon } from '@heroicons/react/24/solid';
import '~/styles/app.css';

export async function loader({ request }: LoaderArgs) {
  const collectionsall = await getallCollections(request, { take: 20 });
  return {
    collectionsall,
  };
  
}
type SliderexProps = {
  headerOpacity: number; // Add this line if using TypeScript, adjust the type as necessary
};

const Sliderex: React.FC<SliderexProps> = ({ headerOpacity }) => {
  const data = useRootLoader();
const isSignedIn = !!data.activeCustomer.activeCustomer?.id;
  const [isSlideoverVisible, setSlideoverVisible] = useState(false);

  // Access the collectionsall data from loaderData
  const { collectionsall } = useLoaderData<typeof loader>();

  const toggleSlideover = () => {
    setSlideoverVisible(!isSlideoverVisible);

  };

  return (
    <div className="flex items-center justify-center">
      <div
        onClick={toggleSlideover}
        className="flex flex-col bg-opacity-90 cursor-pointer justify-center items-center py-2 text-sm text-discogray-500 transition-all duration-300 ease-out hover:opacity-70"
      >
        <button>
          <Hamburger className="w-8 h-8 pl-1" fill={headerOpacity > 0.5 ? '#000' : '#FFF'} />
        </button>
      </div>
      <div
        id="slideover-container"
        className={`w-full h-full fixed inset-0 ${
          isSlideoverVisible ? '' : 'invisible'
        }`}
      >
        <div
          onClick={toggleSlideover}
          id="slideover-bg"
          className="w-full h-full duration-500 ease-out transition-all inset-0 absolute bg-discogray opacity-0"
        ></div>
        <div
          onClick={toggleSlideover}
          id="slideover"
          className={`shadow-xl shadow-discogray bg-discogray top-[70px] w-full sm:w-[50vw] h-full absolute right-0 duration-300 ease-out transition-all ${
            isSlideoverVisible ? '' : 'translate-x-full'
          }`}
        >
          <div className="mx-4 px-4 flex absolute top-0 pt-2 text-white text-xl font-metrobold1">
          
          </div>
          <div className="absolute cursor-pointer text-white top-0 w-12 flex items-center justify-center right-0 mt-[6px] pr-6">
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </div>
          <div className="px-8 mt-12 absolute transform w-full">
            <div className="w-full pb-8">
              {/* Use collectionsall directly */}
              <CollectionsTreemenu collectionsData={{ collectionsall }} />
            </div>
            
            <div className="w-full pb-8">
              <SearchBar />
            </div>
            <div className="py-3 pb-8">
            <Link
              to={isSignedIn ? '/account' : '/sign-in'}
              className="flex space-x-1"
            >
              <SignIn className="w-8 h-8 text-white" />
              {/* <span className="text-white text-sm uppercase tracking-[0.15]">{isSignedIn ? 'My Account' : 'Sign In'}</span> */}

            </Link>
          </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sliderex;
