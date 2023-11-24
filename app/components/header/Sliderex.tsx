import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import CollectionsTreemenu from '~/components/CollectionsTreemenu';
import '~/styles/app.css';
import { Link } from 'remix';
import React, { useState } from 'react';

const COLLECTIONS_QUERY = gql`
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
  const { loading, error, data } = useQuery(COLLECTIONS_QUERY);
  const collections = data?.collections?.items || [];
  const [isSlideoverVisible, setSlideoverVisible] = useState(false);

  const toggleSlideover = () => {
    setSlideoverVisible(!isSlideoverVisible);
  };

  return (
    <div className="flex items-center justify-end">
      <div
        onClick={toggleSlideover}
        className="bg-white bg-opacity-90 shadow-md shadow-gray-500 cursor-pointer justify-center rounded-full items-center p-2 sm:p-4 text-sm border text-gray-500 transition-all duration-300 ease-out hover:bg-gray-100 hover:opacity-70 hover:shadow-none "
      >
         <button
  className="flex flex-row justify-center items-center"
>
  <div className="flex flex-col items-center justify-between w-6 h-6 sm:h-6 ">
    <span
      className="px-2 sm:px-4 h-1 w-6  text-white bg-gradient-to-r from-discoteal to-discopink  transform transition duration-500 ease-in-out group-focus:rotate-[42deg] group-focus:translate-y-[10px]"

    ></span>
    <span
    className="px-2 sm:px-4 h-1 w-6  text-white bg-gradient-to-r from-discoteal to-discopink transform transition duration-500 ease-in-out group-focus:opacity-0"

    ></span>
    <span
    className="px-2 sm:px-4 h-1 w-6  text-white bg-gradient-to-r from-discoteal to-discopink transform transition duration-500 ease-in-out group-focus:-rotate-[42deg] group-focus:-translate-y-[10px]"
    ></span>
  </div>
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
          className="w-full h-full duration-500 ease-out transition-all inset-0 absolute bg-gray-900 opacity-0"
        ></div>
        <div
          onClick={toggleSlideover}
          id="slideover"
          className={`shadow-xl shadow-discogray w-full sm:w-80 bg-white h-full absolute right-0 duration-300 ease-out transition-all ${
            isSlideoverVisible ? '' : 'translate-x-full'
          }`}
        ><div className="flex absolute text-gray-600 top-0 mt-5 ml-4 text-xl font-metroblack1 justify-center">MAIN MENU</div>
          <div className="absolute cursor-pointer text-gray-600 top-0 w-8 h-8 flex items-center justify-center right-0 mt-4 mr-5">
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
          <div className="mt-16 absolute transform w-full">
            <div className="py-4 border-t border-gray-200 w-full">
              <CollectionsTreemenu collectionsData={{ collections }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}







 /*  function Uncontrolled() {
    const { loading, error, data } = useQuery(COLLECTIONS_QUERY);
  const collections = data?.collections?.items || [];
  const [open, setOpen] = useState(false);


    return (
      <div>
        <h1></h1>
        <Popover>
          <PopoverTrigger className="justify-center items-center "
      onClick={() => setOpen(!open)}>
          
           
         
         
            </PopoverTrigger>
          <PopoverContent className="Popover pt-6 w-[75vw] sm:w-[50vw] xl:w-[25vw]">
            <PopoverHeading></PopoverHeading>
            <PopoverClose className="px-4 flex items-center justify-between w-full">
            <div className="flex items-center w-full justify-between">
                  <h2 className="text-lg font-medium text-gray-900">MAIN MENU</h2>
                  <button
                    type="button"
                    className="-mr-2 w-10 h-10  p-2 rounded-md flex items-start justify-start text-gray-400"
                  >
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
              </PopoverClose>
            <PopoverDescription><div className="py-4 mt-4 border-t border-gray-200">
        <CollectionsTreemenu collectionsData={{ collections }} />
        </div></PopoverDescription>
            
          </PopoverContent>
        </Popover>
      </div>
    );
  }
  
  function Controlled() {
    const { loading, error, data } = useQuery(COLLECTIONS_QUERY);
  const collections = data?.collections?.items || [];
    const [open, setOpen] = useState(false);
    return (
      <div>

        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger onClick={() => setOpen((v) => !v)}>
        </PopoverTrigger>
          <PopoverContent>
            <PopoverHeading></PopoverHeading>
            <PopoverDescription>
            </PopoverDescription>
            <PopoverClose>Close</PopoverClose>
          </PopoverContent>
        </Popover>
      </div>
    );
  }


  export default function Sliderex() {
    return <Uncontrolled />;
  }
 */