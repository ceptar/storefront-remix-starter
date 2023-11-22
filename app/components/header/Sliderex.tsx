import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import CollectionsTreemenu from '~/components/CollectionsTreemenu';
import '~/styles/app.css';
import { useState } from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverDescription,
  PopoverHeading,
  PopoverClose
} from "./Popover";
import { Button } from '../Button';
import { XMarkIcon } from '@heroicons/react/24/outline';


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

  function Uncontrolled() {
    const { loading, error, data } = useQuery(COLLECTIONS_QUERY);
  const collections = data?.collections?.items || [];
    return (
      <div>
        <h1></h1>
        <Popover>
          <PopoverTrigger ><a className="group linkeins"><span className="buttoneins">MENU</span></a></PopoverTrigger>
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
            <span className="buttoneins">MENU</span>
          </PopoverTrigger>
          <PopoverContent className="Popover">
            <PopoverHeading></PopoverHeading>
            <PopoverDescription><div>
        <CollectionsTreemenu collectionsData={{ collections }} />
        </div></PopoverDescription>
            <PopoverClose>Close</PopoverClose>
          </PopoverContent>
        </Popover>
      </div>
    );
  }


  export default function Sliderex() {
    return <Uncontrolled />;
  }
