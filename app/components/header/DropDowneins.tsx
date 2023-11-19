import { Link } from '@remix-run/react';
import { useRootLoader } from '~/utils/use-root-loader';
import { Popover, Transition } from '@headlessui/react';
import { Fragment, useRef, useState, useEffect } from 'react';
import { classNames } from '~/utils/class-names';
import { useLoaderData } from '@remix-run/react';
import { getCollections } from '~/providers/collections/collections';

import '~/styles/app.css';

export default function DropDowneins() {

  const { collections } = useLoaderData();
 
  const timeoutDuration = 0.3
let timeout: NodeJS.Timeout

  const buttonRef = useRef(null) // useRef<HTMLButtonElement>(null)
  const [openState, setOpenState] = useState(false)

  const toggleMenu = (open) => {
    // log the current open state in React (toggle open state)
    setOpenState((openState) => !openState)
    // toggle the menu by clicking on buttonRef
    buttonRef?.current?.click() // eslint-disable-line
  }

  // Open the menu after a delay of timeoutDuration
  const onHover = (open, action) => {
    // if the modal is currently closed, we need to open it
    // OR
    // if the modal is currently open, we need to close it
    if (
      (!open && !openState && action === "onMouseEnter") ||
      (open && openState && action === "onMouseLeave")
    ) {
      // clear the old timeout, if any
      clearTimeout(timeout)
      // open the modal after a timeout
      timeout = setTimeout(() => toggleMenu(open), timeoutDuration)
    }
    // else: don't click! 😁
  }

  const handleClick = (open) => {
    setOpenState(!open) // toggle open state in React state
    clearTimeout(timeout) // stop the hover timer if it's running
  }
    const handleClickOutside = (event) => {
    if (buttonRef.current && !buttonRef.current.contains(event.target)) {
      event.stopPropagation()
    }
  }
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  })
return (


    <div className="flex item-center justify-end">
      <Popover className="relative flex flex-col text-left">

        {({ open }) => {
                    return (
                      <>
           <div

           className="flex flex-col w-full h-full"
         >
          
              <Popover.Button
            ref={buttonRef}
                  className={`
                  ${open ? "" : "text-opacity-90"}
                  z-10 buttoneins rounded-full onClick={() => handleClick(open)}`}
                  onMouseEnter={() => onHover(open, "onMouseEnter")}
                  onMouseLeave={() => onHover(open, "onMouseLeave")}
  >


                 <div
>
<svg className="h-[12px] w-[12px] sm:h-[16px] sm:w-[16px]" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.42969 8H42.5726" />
<path d="M5.42969 24H42.5726" />
<path d="M5.42969 40H42.5726" />
</svg>


</div>
             
                </Popover.Button>
                <Transition
                  show={open}
                  as={Fragment}
                  enter="transition ease-out duration-150"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-500"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                 <Popover.Panel className="bg-gray-800 bg-opacity-95  text-white absolute z-10 left-0 mt-[8vh] w-[50vw] sm:w-[30vw] lg:w-[20vw] origin-top-right h-[92vh]"
                                   onMouseEnter={() => onHover(open, "onMouseEnter")}
                                   onMouseLeave={() => onHover(open, "onMouseLeave")}>
                    <div

  >
                                   {collections.map((collection) => (

  <div key={collection.id}>

  <Link to={`/collections/${collection.slug}`} onClick={() => setOpenState(false)}
>                      
<div className="p-4 font-thin capitalize transition-colors duration-300 transform  hover:text-gray-700 hover:bg-gray-100"
>
  {collection.name}
</div>
</Link>

</div>
                            ))}
                    </div>
                    
                  </Popover.Panel>
                </Transition>
              </div>
              </> 
                    )
        }}
       
      </Popover>
    </div>
        
    )
  }
