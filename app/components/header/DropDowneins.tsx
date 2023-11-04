import { Link } from '@remix-run/react';
import { useRootLoader } from '~/utils/use-root-loader';
import { Popover, Transition } from '@headlessui/react';
import { Fragment, useRef } from 'react';

import '~/styles/app.css';

export default function DropDowneins() {
 

  const buttonRef = useRef(null)
  const timeoutDuration = 0.2
let timeout: NodeJS.Timeout


const closePopover = () => {
if (!buttonRef.current) {
return;
}

buttonRef.current.dispatchEvent(
new KeyboardEvent("keydown", {
key: "Escape",
bubbles: true,
cancelable: true
})
)
}



const onMouseEnter = (open: boolean) => {
clearTimeout(timeout)
if (open) return
return buttonRef.current?.click()
}


  const onMouseLeave = (open: boolean) => {
    if (!open) return
    timeout = setTimeout(() => closePopover(), timeoutDuration)
  }

  const data = useRootLoader();

  return (
    <div className="flex item-center justify-end">
      <Popover className="relative flex flex-col text-left">
        {({ open }) => {
          return (
            <>
              <div className="w-full -h-full" onMouseLeave={onMouseLeave.bind(null, open)}>
                <Popover.Button
                  ref={buttonRef}
                  className={`
                  ${open ? "" : "text-opacity-90"}
                  focus:outline-none `}
                  onMouseEnter={onMouseEnter.bind(null, open)}
                  onMouseLeave={onMouseLeave.bind(null, open)}
                >
                 <button className="button-wrapper h-[36px] w-[36px] sm:h-[48px] sm:w-[48px] p-2"
>
<svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.42969 8H42.5726" />
<path d="M5.42969 24H42.5726" />
<path d="M5.42969 40H42.5726" />
</svg>

</button>
             
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
                  <Popover.Panel className="absolute z-10 right-8 mt-8 h-[50vh] w-[50vw] sm:h-[30vh] sm:w-[30vw] lg:h-[20vh] lg:w-[20vw] origin-top-right">
                    <div
                      className="overflow-hidden w-full bg-gray-700/80 text-white "
                      onMouseEnter={onMouseEnter.bind(null, open)}
                      onMouseLeave={onMouseLeave.bind(null, open)}
                    >

                        <h1 className="text-xl sm:text-2xl font-thin text-white">
                         
                           
                            
                              {data.collections.map((collection) => (

                                <Link
                                  key={collection.id}

                                  to={`/collections/${collection.slug}`}
                                >                      
                                <div className="p-4 font-thin capitalize transition-colors duration-300 transform  hover:bg-gray-100">
                                  {collection.name}
                                </div>
                                </Link>
                           

                              ))}
                              </h1>


                      


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