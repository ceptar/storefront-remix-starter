import { useLoaderData } from '@remix-run/react';
import { getCollections } from '~/providers/collections/collections';
import { CollectionCard } from '~/components/collections/CollectionCard';
import { LoaderArgs } from '@remix-run/server-runtime';
import MultiCarousel from '~/utils/MultiCarousel';
import CollectionsTreemenu from '~/components/CollectionsTreemenu';
import styles from './styles/app.css';

import heropic1 from '~/../public/heropic1.jpg';

export async function loader({ request }: LoaderArgs<null>) {
  const collections = await getCollections(request, { take: 20 });
  return {
    collections,
  };
}

export default function Index() {

  const { collections } = useLoaderData<typeof loader>();
  

  return (
    <>
      <div
        style={{
          backgroundImage: 'url(/hero1.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'absolute',
          alignItems: 'center',
          justifyContent: 'center',
          top: '0',
          height: '70vh',
          width: '100%',
          zIndex: '10',
          objectFit: 'cover',
        }}
      >
        {/* Decorative image and overlay */}

        <div className="flex h-[70vh] justify-items-end items-center mr-auto ml-auto md:max-w-full lg:max-w-screen-xl w-full">
          <div className="mx-auto z-20 relative flex flex-col justify-center md:max-w-full lg:max-w-screen-xl w-full">
           
            <div className=" text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-header1
            text-discogray pt-0  pb-0 text-start sm:px-0 justify-between">
<div className=" whitespace-nowrap ml-auto px-8">
                <span className="text-white ">Wearable</span> <span className="shadow-white bg-discoteal bg-opacity-60 whitespace-nowrap p-2  backdrop-blur-sm shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] ">ART.</span>
                <p className="my-12 "></p>
               
                <span className="text-white ">Every Piece</span> <span className="shadow-white bg-discoteal bg-opacity-60 whitespace-nowrap p-2  backdrop-blur-sm shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] ">UNIQUE.</span>
                <p className="my-12 "></p>
                
                <span className="text-white ">Like</span> <span className="shadow-white bg-discoteal bg-opacity-60 whitespace-nowrap p-2  backdrop-blur-sm shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] ">YOU.</span>
                <p className="my-12 "></p>
             
                <span className="text-white ">Get</span> <span className="shadow-white bg-discoteal bg-opacity-60 whitespace-nowrap p-2  backdrop-blur-sm shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] text-discopink">YOURS.</span>
                <p className="my-12 "></p>
              
              </div>
            </div>
            
            
          </div>
        </div>

      </div>

<div>
<div className="h-[10vh] z-20 flex justify-items-end items-center mr-auto ml-auto md:max-w-full lg:max-w-screen-xl w-full" style={{ marginTop: '70vh' }}>
          <h2
            id="category-heading"
            className="px-10 items-center justify-start flex text-2xl font-header1 text-discopink"
          ><span className="">
            Shop by Category
          </span>
            </h2>
        </div>

      <div className="relative w-full  flex justify-center items-center" >
      <div className="mx-auto z-20 relative h-full flex justify-center md:max-w-full lg:max-w-screen-xl w-full">
        

        <div className=" h-full ml-auto mr-auto flex items-center justify-center overflow-hidden">
          <MultiCarousel CollectionsData={{ collections }} /></div>
        </div>
        </div>
<div className="h-[6vh]"></div>

     <div className="  bg-discoyellow">
<div className="flex items-center justify-center">
<div className="h-[50vh] justify-center flex flex-row md:max-w-full lg:max-w-screen-xl w-full">

            
            <div className="flex flex-col pt-0 justify-center items-center w-full">
            <img className="max-w-[400px] max-h-full object-cover" src={heropic1} alt="heropic1"/>
            </div>
                        
          </div>
          </div>
          </div>

<div>


</div>
          </div>
          </>
  );
}