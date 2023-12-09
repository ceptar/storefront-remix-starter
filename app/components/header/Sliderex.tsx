import { useLoaderData } from '@remix-run/react';
import { getallCollections } from '~/providers/collections/collectionsall';
import type { LoaderArgs } from '@remix-run/server-runtime';
import React, { useState } from 'react';
import Hamburger from '~/components/svgs/Hamburger';
import CollectionsTreemenu from '~/components/CollectionsTreemenu';
import { SearchBar } from '~/components/header/SearchBar';
import '~/styles/app.css';

export async function loader({ request }: LoaderArgs) {
  const collectionsall = await getallCollections(request, { take: 20 });
  return {
    collectionsall,
  };
}


export default function Sliderex() {
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
        className="flex flex-col bg-opacity-90 cursor-pointer justify-center items-center p-2 text-sm text-discogray-500 transition-all duration-300 ease-out hover:opacity-70"
      >
        <button>
          <Hamburger className="tronfilter w-8 h-8 sm:w-10 sm:h-10 pl-1" />
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
          className={`shadow-xl shadow-discogray bg-discogray top-[8vh] w-full sm:w-80  h-full absolute right-0 duration-300 ease-out transition-all ${
            isSlideoverVisible ? '' : 'translate-x-full'
          }`}
        >
          <div className="px-8 mx-4 flex absolute top-0 pt-2 text-white text-lg font-metrobold1 justify-center">
            Main Menu
          </div>
          <div className="absolute cursor-pointer text-white top-0 w-8 h-8 flex items-center justify-center right-0 mt-2 mr-5">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </div>
          <div className="px-8 mt-12 absolute transform w-full">
            <div className="w-full pb-4">
              {/* Use collectionsall directly */}
              <CollectionsTreemenu collectionsData={{ collectionsall }} />
            </div>
            <div className="w-full">
              <SearchBar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
