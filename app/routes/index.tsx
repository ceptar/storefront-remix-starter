
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

        <div className="flex h-[50vh] items-center justify-center pb-16 mr-auto ml-auto md:max-w-full lg:max-w-screen-xl px-24 w-full">
          <div className="sm:grid-cols-2 lg:grid-cols-4 grid gap-5 row-gap-5">
            <div className="pt-[25vh] pr-12 pb-0 pl-12 sm:px-0">
              <h1 className="whitespace-nowrap text-2xl sm:text-4xl font-thin text-white">
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
            <div className="pt-0 pr-12 pb-0 pl-12 text-center sm:px-0">

            </div>
            <div className="pt-0 pr-12 pb-0 pl-12 text-center sm:px-0">

            </div>
            <div className="pt-0 pr-12 pb-0 pl-12 text-center sm:px-0">

            </div>
          </div>
        </div>

      </div>



      <section className="w-full h-full">
      <div className="z-20 relative  mr-auto ml-auto  md:max-w-full lg:max-w-screen-xl px-8" style={{ marginTop: '70vh' }}>
        <div className="h-[8vh] flex whitespace-nowrap items-end jutifify-start">
          <h2
            id="category-heading"
            className="text-2xl font-light tracking-tight text-gray-900"
          >
            Shop by Category
          </h2>
        </div>

        <div className=""><MultiCarousel CollectionsData={{ collections }} /></div>
        </div>
       
<div className="h-[8vh]"></div>

     <div className=" w-full flex bg-discoyellow">
<div className="w-full flex items-center  ">
<div className="h-[40vh] flex flex-row sm:grid-cols-2 lg:grid-cols-4 gap-5 row-gap-5 mr-auto ml-auto max-w-6xl md:max-w-full lg:max-w-screen-xl px-8 w-full justify-between ">

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


