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
      <div className="bg-hero">

        
      </div>


      <div
        className="h-[10vh] z-20 flex justify-center items-center mr-auto ml-auto w-full"      >
        <h2
          id="category-heading"
          className="px-8 mt-4 items-center justify-center flex text-discogray  text-2xl font-header1 leading-10 border-t border-b border-discoteal"
        >
          <span className="">Categories</span>
        </h2>
      </div>

      <div className=" flex flex-col justify-center items-center ">
        <div className="w-5/6 mx-auto h-full flex flex-row items-center justify-center overflow-hidden">
          <MultiCarousel collections={{ collections }} />
        </div>
      </div>
<div className="h-[5vh]"></div>
      <div className="  bg-discoyellow">
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

      <div></div>
    </>
  );
}
