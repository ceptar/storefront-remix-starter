
import { useLoaderData } from '@remix-run/react';
import { getCollections } from '~/providers/collections/collections';
import { CollectionCard } from '~/components/collections/CollectionCard';
import { LoaderArgs } from '@remix-run/server-runtime';
import MultiCarousel from '~/utils/MultiCarousel';
import CollectionsTreeMenu from '~/components/CollectionsTreeMenu';

import heropic1 from '~/../public/heropic1.jpg';

export async function loader({ request }: LoaderArgs<null>) {
  const collections = await getCollections(request, { take: 20 });
  return {
    collections,
  };
}

export default function Index() {

  const { collections } = useLoaderData<typeof loader>();
  const headerImage = collections[0]?.featuredAsset?.preview;

  return (
    <>
      <div className="mix-blend-multiply"
        style={{
          backgroundImage: 'url(/hero122.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'absolute',
          alignItems: 'center',
          justifyContent: 'center',
          top: '0',
          height: '70vh',
          width: '100vw',
          zIndex: '10',
          objectFit: 'cover',
        }}
      >
        {/* Decorative image and overlay */}

        <div className="flex h-[50vh] items-end justify-items-end pb-16 mr-auto ml-auto md:max-w-full lg:max-w-screen-xl px-24 w-full">
          <div className="sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 row-gap-5 ml-auto">
           
            <div className="pt-0  pb-0 text-start sm:px-0 justify-between">

            </div>
            <div className="pt-[10vh] min-w-[1/2] ml-auto pr-2 pb-0 sm:px-0 ">

            <h1 className="whitespace-nowrap text-2xl sm:text-4xl font-thin text-white test-start">
                <span className="p-2 sm:p-3">Wearable Art.</span>
                <p className="my-6 sm:my-10"></p>
                <p>
                  <span className="bg-discoteal-500 p-2 sm:p-3">
                    Every Piece UNIQUE.
                  </span>
                </p>
                <p className="my-6 sm:my-10"></p>
                <p>
                  <span className="bg-discoteal-500 p-2 sm:p-3">Like You.</span>
                  <span className="p-7 font-bold bg-discopink-500 m-1 text-white">
                    Get Yours.
                  </span>
                </p>
              </h1>

            </div>
            
          </div>
        </div>

      </div>



      <section className="w-full h-full flex flex-col justify-center">
      <div className="mx-auto z-20 relative flex flex-col justify-center md:max-w-full lg:max-w-screen-xl px-4" style={{ marginTop: '70vh' }}>
        <div className="h-[8vh] flex flex-col justify-center whitespace-nowrap">
          <h2
            id="category-heading"
            className="items-center justify-start flex text-3xl font-light tracking-tight text-gray-900"
          >
            Shop by Category
          </h2>
        </div>

        <div className="flex items-start justify-center"><MultiCarousel CollectionsData={{ collections }} /></div>
        </div>
       
<div className="h-[4vh]"></div>

     <div className="  bg-discoyellow">
<div className="w-full flex items-center">
<div className="h-[50vh] justify-center flex flex-row sm:grid-cols-2 lg:grid-cols-4 gap-5 row-gap-5 mr-auto ml-auto max-w-6xl md:max-w-full lg:max-w-screen-xl px-8">

            <div className="flex flex-col pt-16  pb-0 ">
              
            </div>
            <div className="flex flex-col pt-0  text-center ">
            <img className="max-w-[400px] max-h-full object-cover" src={heropic1} alt="heropic1"/>
            </div>
            <div className="flex flex-col pt-0  text-center ">
            
            </div>
            <div className="flex flex-col pt-0 text-center ">

            </div>
          </div>
          </div>
          </div>

          {/* <div>    <CollectionsTreeMenu
                      collectionsData={{ collections }}
                    /></div> */}

          </section>


    </>
  );
}


