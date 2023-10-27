import { useRootLoader } from '~/utils/use-root-loader';
import { classNames } from '~/utils/class-names';
import { Link, useLoaderData } from '@remix-run/react';
import { Menu } from '@headlessui/react';
import bars3 from '~/../public/bars3.svg';
import '~/styles/app.css';

export function DropdownEins() {
  return (
    <Menu>
      {({ open }) => (
        <>
          <Menu.Button className="p-4 button-wrapper">
            <img className="w-6 h-6" src={bars3} alt="icon bars 3" />
          </Menu.Button>
          {open && (
            <div>
              <Menu.Items static>
                <Menu.Item className="block button-wrapper mt-4 px-12 py-4 bg-discoteal-500">
                  {({ active }) => (
                    <a
                      className={`${
                        active
                          ? 'bg-discoteal-200 text-gray-900'
                          : 'text-gray-700'
                      }  block button-wrapper px-24`}
                      href="/account-settings"
                    >
                      Account settings
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item className="block button-wrapper mt-4 px-12 py-4 bg-discoteal-500">
                  {({ active }) => (
                    <a
                      className={`${
                        active
                          ? 'bg-discoteal-200 text-gray-900'
                          : 'text-gray-700'
                      }  block button-wrapper px-24`}
                      href="/documentation"
                    >
                      Documentation
                    </a>
                  )}
                </Menu.Item>
              </Menu.Items>
            </div>
          )}
        </>
      )}
    </Menu>
  );
}
