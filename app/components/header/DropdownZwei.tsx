import { Link } from '@remix-run/react';
import { useRootLoader } from '~/utils/use-root-loader';
import { useEffect, useState } from 'react';
import { Menu, Popover, Transition } from '@headlessui/react';
import { Fragment, useRef } from 'react';
import React from 'react';
import '~/styles/app.css';

export function DropdownZwei() {
  const [navTextcol, setnavTextcol] = useState('#ffffff');
  const listenScrollEvent = () => {
    window.scrollY > 10
      ? setnavTextcol('rgb(55 65 81)')
      : setnavTextcol('#ffffff');
    // window.scrollY > 10 ? setnavSize("7rem") : setnavSize("7rem");
  };
  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
    return () => {
      window.removeEventListener('scroll', listenScrollEvent);
    };
  }, []);

  const buttonRef = useRef(null);
  const timeoutDuration = 200;
  let timeout;

  const closePopover = () => {
    return buttonRef.current?.dispatchEvent(
      new KeyboardEvent('keydown', {
        key: 'Escape',
        bubbles: true,
        cancelable: true,
      }),
    );
  };

  const onMouseEnter = (open) => {
    clearTimeout(timeout);
    if (open) return;
    return buttonRef.current?.click();
  };

  const onMouseLeave = (open) => {
    if (!open) return;
    timeout = setTimeout(() => closePopover(), timeoutDuration);
  };
  const data = useRootLoader();

  return (
    <div className="flex item-center justify-end">
      <Popover className="relative inline-block text-left">
        {({ open }) => {
          return (
            <>
              <div className="p-4" onMouseLeave={onMouseLeave.bind(null, open)}>
                <Popover.Button
                  ref={buttonRef}
                  className={`
                  ${open ? '' : 'text-opacity-90'}
                  focus:outline-none relative inline-flex w-full justify-center button-wrapper`}
                  onMouseEnter={onMouseEnter.bind(null, open)}
                  onMouseLeave={onMouseLeave.bind(null, open)}
                >
                  <span
                    style={{
                      color: navTextcol,

                      // HIER WAR HÖHE DES HEADERS

                      // HIER IST HÖHE DES HEADERS
                      transition: 'all 1s',
                    }}
                  >
                    MENU
                  </span>
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
                  <Popover.Panel className="">
                    <div
                      className=" focus:outline-none bg-gray-700/80 text-white absolute right-0 mt-5 h-[50vh] w-[50vw] origin-top-right"
                      onMouseEnter={onMouseEnter.bind(null, open)}
                      onMouseLeave={onMouseLeave.bind(null, open)}
                    >
                      <div className="">
                        <h1 className="whitespace-nowrap text-3xl sm:text-4xl md:text-5xl font-thin text-white">
                          <a className="">
                            <div className="m-4">
                              {data.collections.map((collection) => (
                                <Link
                                  key={collection.id}
                                  className="p-4 font-thin capitalize transition-colors duration-300 transform  hover:bg-gray-100"
                                  to={`/collections/${collection.slug}`}
                                >
                                  {collection.name}
                                </Link>
                              ))}

                              <p className="p-4 text-4xl font-thin ">MENU</p>
                            </div>
                            <div className="m-4">
                              <p className="p-4 text-4xl font-thin ">ITEMS</p>
                              <p className="p-4 text-4xl font-thin ">HIER</p>
                            </div>
                          </a>
                        </h1>
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </div>
            </>
          );
        }}
      </Popover>
    </div>
  );
}
