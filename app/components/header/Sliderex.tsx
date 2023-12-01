import React, { useState, useEffect } from 'react';
import Hamburger from '~/components/svgs/Hamburger';
import CollectionsTreemenu from '~/components/CollectionsTreemenu';
import '~/styles/app.css';

const COLLECTIONS_QUERY = `
  query Collections {
    collections {
      items {
        id
        name
        slug
        parent {
          id
          name
          slug
        }
      }
    }
  }
`;

export default function Sliderex() {
  const [collections, setCollections] = useState([]);
  const [isSlideoverVisible, setSlideoverVisible] = useState(false);

  const toggleSlideover = () => {
    setSlideoverVisible(!isSlideoverVisible);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://nonotheresnolimit.xyz/shop-api', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            query: COLLECTIONS_QUERY,
          }),
        });

        const result = await response.json();
        setCollections(result.data.collections.items);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // empty dependency array to fetch data once on component mount

  return (
    <div className="flex items-center justify-center">
      <div
        onClick={toggleSlideover}
        className="flex flex-col bg-opacity-90 cursor-pointer justify-center rounded-full items-center p-2  text-sm text-discogray-500 transition-all duration-300 ease-out hover:opacity-70"
      >
        <button>
          <Hamburger className="tronfilter w-8 h-8 sm:w-10 sm:h-10" />
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
          <div className="px-8 flex absolute top-0 pt-4 ml-4 text-white text-lg font-sans justify-center">
            Main Menu
          </div>
          <div className="absolute cursor-pointer text-white top-0 w-8 h-8 flex items-center justify-center right-0 mt-4 mr-5">
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
          <div className="mx-4 mt-8 absolute transform w-full">
            <div className="border-t border-gray-200 w-full">
              <CollectionsTreemenu collectionsData={{ collections }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
