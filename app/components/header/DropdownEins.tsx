import { useRootLoader } from '~/utils/use-root-loader';
import { classNames } from '~/utils/class-names';
import { Link, useLoaderData } from '@remix-run/react';
import { Menu } from '@headlessui/react'
import '~/styles/app.css';



export function DropdownEins() {
 return (
   <Menu>
     {({ open }) => (
       <>
         <Menu.Button className="p-4 button-wrapper w-inline-block"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>
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



