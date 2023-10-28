import { useRootLoader } from '~/utils/use-root-loader';
import { classNames } from '~/utils/class-names';
import { Link, useLoaderData } from '@remix-run/react';
import { Menu } from '@headlessui/react';
import bars3 from '~/../public/bars3.svg';
import '~/styles/app.css';

export function DropdownEins() {
  return (
    <div className="relative">
      <Menu inline-flex items-center>
        {({ open }) => (
          <>
            <div className="button-wrapper flex justify-center">
              <Menu.Button>
                <img
                  className="min-w-[36px] max-w-[36px]"
                  src={bars3}
                  alt="icon bars 3"
                />
              </Menu.Button>
            </div>
            {open && (
              <div className="absolute z-10 flex w-screen max-w-max translate-x-16 px-4">
                <div className="text-2xl p-4 w-2/3 max-w-full flex-auto overflow-hidden font-thin">
                  <Menu.Items static>
                    <div className="button-wrapper">
                      <Menu.Item text-left px-24 py-24>
                        {({ active }) => (
                          <a
                            className={`${
                              active ? 'text-gray-900' : 'text-gray-700'
                            }  `}
                            href="/account-settings"
                          >
                            Account settings
                          </a>
                        )}
                      </Menu.Item>
                    </div>
                    <Menu.Item text-left h-16 button-wrapper px-24 py-24>
                      {({ active }) => (
                        <a
                          className={`${
                            active ? 'text-gray-900' : 'text-gray-700'
                          }  `}
                          href="/documentation"
                        >
                          Documentation
                        </a>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </div>
              </div>
            )}
          </>
        )}
      </Menu>
    </div>
  );
}
