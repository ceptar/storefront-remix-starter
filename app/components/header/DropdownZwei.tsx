import {
  useActionData,
  useLoaderData,
  useNavigate,
  useNavigation,
  useSubmit,
  Link,
} from '@remix-run/react';
import { useRootLoader } from '~/utils/use-root-loader';
import { classNames } from '~/utils/class-names';
import ReactDOM from 'react-dom/client';
import { useEffect, useState } from 'react';
import { Menu, Popover, Transition } from '@headlessui/react';
import { Fragment, useRef } from 'react';
import React from 'react';
import styles from './styles/app.css';

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

function IconOne() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <path
        d="M24 11L35.2583 17.5V30.5L24 37L12.7417 30.5V17.5L24 11Z"
        stroke="#FB923C"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.7417 19.8094V28.1906L24 32.3812L31.2584 28.1906V19.8094L24 15.6188L16.7417 19.8094Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.7417 22.1196V25.882L24 27.7632L27.2584 25.882V22.1196L24 20.2384L20.7417 22.1196Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
    </svg>
  );
}

function IconTwo() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <path
        d="M28.0413 20L23.9998 13L19.9585 20M32.0828 27.0001L36.1242 34H28.0415M19.9585 34H11.8755L15.9171 27"
        stroke="#FB923C"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.804 30H29.1963L24.0001 21L18.804 30Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
    </svg>
  );
}

function IconThree() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <rect x="13" y="32" width="2" height="4" fill="#FDBA74" />
      <rect x="17" y="28" width="2" height="8" fill="#FDBA74" />
      <rect x="21" y="24" width="2" height="12" fill="#FDBA74" />
      <rect x="25" y="20" width="2" height="16" fill="#FDBA74" />
      <rect x="29" y="16" width="2" height="20" fill="#FB923C" />
      <rect x="33" y="12" width="2" height="24" fill="#FB923C" />
    </svg>
  );
}
