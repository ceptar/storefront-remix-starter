
import { Link, useLoaderData } from '@remix-run/react';
import { useRootLoader } from '~/utils/use-root-loader';

export default function MenuOverlay ({ navbarOpen, setNavbarOpen })  {
  const data = useRootLoader();
  return (
    <menu
      className={`fixed flex  top-0 left-0 w-full p-10 z-20 h-[70vh] pt-24 bg-gray-900 text-white bg-opacity-100 transform delay-100 transition-all duration-300 ${
        navbarOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"
      }`}
    >
      
      <div className="sm:w-1/3 flex flex-col "></div>
      <div className="flex flex-col pl-16 w-full sm:w-2/3">

      <div className="w-full flex flex-col mt-16">

        {data.collections.map((collection) => (
                   
           <Link


              to={'/collections/' + collection.slug}
              prefetch="intent"
              key={collection.id}

            >
              <div className="button-wrapper text-2xl w-full hover:text-discoteal-300 nav-li p-8 bg-gray-300"               onClick={(e) => {
                e.preventDefault();
                setNavbarOpen(false);
              }}>
    
              {collection.name}
              
              </div>
            </Link>

          ))}
 
 
      </div>
      </div>
    </menu>


  );
}
