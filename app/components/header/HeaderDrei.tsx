import { Fragment, useRef, useState, useEffect } from 'react';
import { Link } from '@remix-run/react';
import { Popover, Transition } from '@headlessui/react';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import CollectionsTreemenu from '~/components/CollectionsTreemenu';
import '~/styles/app.css';

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

export default function HeaderDrei() {

  const { loading, error, data } = useQuery(COLLECTIONS_QUERY);

  const collections = data?.collections?.items || [];

    return (
      <div className="absolute z-40 top-4 right-4 flex flex-row-reverse justify-center items-center origin-top-right">
        <Popover className="flex flex-col">
          {({ open }) => (
            <>
              <Popover.Button
                className={`
                  ${open ? 'text-white' : 'text-white/90'}
                  origin-top-right buttoneins hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75`}
              >
                <span>MENU</span>
              </Popover.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="inline-block right-0 h-full w-full max-w-[33.33vw] overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5">
                  <div className="flex flex-col-reverse overflow-hidden">
                    <div>
                      <CollectionsTreemenu collectionsData={{ collections }} />
                    </div>
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center">
                      <div className="ml-4">
                        {/* You can add any additional elements or components here */}
                      </div>
                    </div>
                    <div className="bg-gray-50 p-4">
                      <a
                        href="##"
                        className="flow-root rounded-md px-2 py-2 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500/50"
                      >
                        <span className="flex items-center">
                          <span className="text-sm font-medium text-gray-900">
                            Documentation
                          </span>
                        </span>
                        <span className="block text-sm text-gray-500">
                          Start integrating products and tools
                        </span>
                      </a>
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
      </div>
    );
  }