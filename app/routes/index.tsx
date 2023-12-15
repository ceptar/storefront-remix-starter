import { useLoaderData } from '@remix-run/react';
import { getCollections } from '~/providers/collections/collections';
import type { LoaderArgs } from '@remix-run/server-runtime';
import MultiCarousel from '~/utils/MultiCarousel';
import '~/styles/app.css';
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
      <div className="bg-hero" aria-label="[hero1]">

<div className="flex text-6xl flex-col w-full h-[50vh]">

<div className="flex flex-row w-full h-full">
<div className="flex flex-col lg:w-1/2 lg:min-w-[600px]"></div>

<div className="flex flex-col lg:w-1/2 h-full justify-end">

<div className="flex flex-grow h-full"></div>

<div className="bg-discogray text-white lg:bg-opacity-0 lg:text-discogray p-4 mb-4 lg:mb-16">

<div className="flex flex-grow h-fit font-metroreg1 text-base lg:text-lg">life's too short</div>

<div className="flex flex-grow h-fit text-2xl lg:text-4xl tracking-[0.2em] font-metroblack1">to wear boring</div>

<div className="flex flex-grow h-fit text-2xl lg:text-4xl tracking-[0.2em] font-metroblack1">jewelry.</div>
</div>
</div>
</div>
</div>
        
      </div>


      <div
        className="h-[15vh] z-20 flex justify-center items-center mr-auto ml-auto w-full"      >
        <h2
          id="category-heading"
          className="px-8 mt-4 items-center justify-center flex  leading-10 border-t border-b border-discoteal"
        >
          <span className="text-xl uppercase tracking-[0.25em] font-metrolight1 text-discogray p-2">Categories</span>
        </h2>
      </div>

      <div className=" flex flex-col justify-center items-center ">
        <div className="w-5/6 mx-auto h-full flex flex-row items-center justify-center overflow-hidden">
          <MultiCarousel collections={{ collections }} />
        </div>
      </div>
<div className="h-[5vh]"></div>
      <div className="  bg-discoteal">
        <div className="flex items-center justify-center">
          <div className="h-[50vh] justify-center flex flex-row w-full">
            <div className="flex flex-col pt-0 justify-center items-center w-full">
              <img
                className="max-w-[400px] max-h-full object-cover"
                src={heropic1}
                alt="heropic1"
              />
            </div>
          </div>
        </div>
      </div>

    </>
  );
}
