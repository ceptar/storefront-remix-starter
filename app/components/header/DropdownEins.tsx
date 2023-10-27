import { useRootLoader } from '~/utils/use-root-loader';
import { classNames } from '~/utils/class-names';
import { Link, useLoaderData } from '@remix-run/react';
import { Menu } from '@headlessui/react'
import bars3 from '~/../public/bars3.svg';
import '~/styles/app.css';



export function DropdownEins() {
 return (
   <Menu>
     {({ open }) => (
       <>
         <Menu.Button className="p-4 button-wrapper w-inline-block">
         {bars3 && (
            <img
              className="w-6 h-6"
              src={bars3}
              alt="icon bars 3"
            />
          )}
         </Menu.Button>
         {open && (
           <div>
             <Menu.Items static>
               <Menu.Item>
                 {({ active }) => (
                   <a
                     className={`${active
                       ? 'bg-discoteal-200 text-gray-900'
                       : 'text-gray-700'
                       }  block px-6 py-8 text-lg`}
                     href="/account-settings"
                   >
                     Account settings
                   </a>
                 )}
               </Menu.Item>
               <Menu.Item>
                 {({ active }) => (
                   <a
                     className={`${active
                      ? 'bg-discoteal-200 text-gray-900'
                      : 'text-gray-700'
                      }  block px-6 py-8 text-lg`}
                     href="/documentation"
                   >
                     Documentation
                   </a>
                 )}
               </Menu.Item>
               <Menu.Item disabled>
                 <span className=" block px-6 py-8 text-lg text-gray-400">
                   Invite a friend (coming soon!)
                 </span>
               </Menu.Item>
             </Menu.Items>
           </div>
         )}
       </>
     )}
   </Menu>

 );
}



