import { useLoaderData } from '@remix-run/react';
import { getCollections } from '~/providers/collections/collections';
import type { LoaderArgs } from '@remix-run/server-runtime';
import MultiCarousel from '~/utils/MultiCarousel';
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
      <div className="bg-hero">
        {/* Decorative image and overlay */}

        <div className="flex h-[50vh] justify-items-end items-start mr-auto ml-auto w-full">
          <div className="mt-[12vh] mr-auto z-20 relative flex flex-col justify-center w-full">
            <div className="px-8 sm:px-16 flex flex-col text-start justify-between">
              <div className="ml-auto ">
                <div className="text-3xl font-sans text-discogray leading-[160%] ">
                  <span className="text-white"></span>
                  <span className=" shadow-white bg-discoteal bg-opacity-60 backdrop-blur-sm shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]">
                  Life is about the little things!
                  </span>
                  {/* <span className="text-white"></span>
                  <p className="my-7"></p>

                  <span className="text-white"></span>
                  <span className="shadow-white bg-discoteal bg-opacity-60 whitespace-nowrap p-1 backdrop-blur-sm shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]">
                  </span>
                  <span className="text-white"></span> */}
                </div>
                 
                <div className="leading-[140%] font-sans text-md text-discogray my-4">
                  <span className="bg-white p-2 ">
                    Lets find Yours.{' '}
                  </span>
                  {/* <span className="h-6 bg-left-bottom bg-gradient-to-r from-discoteal to-discopink bg-[length:100%_6px] bg-no-repeat">
                    
                  </span>
                  <span className=" "></span>

                  <span className=""></span>
                  <span className="h-6 bg-left-bottom bg-gradient-to-r from-discoteal to-discopink bg-[length:100%_6px] bg-no-repeat">
                    {' '}
                  </span>
                  <span className=" "></span>

                  <span className=""></span>
                  <span className="h-6 bg-left-bottom bg-gradient-to-r from-discoteal to-discopink bg-[length:100%_6px] bg-no-repeat">
                    
                  </span>
                  <span className=""></span> */}
               
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden">
        <a
          href="~/routes/__cart/index#"
          className="block text-sm font-semibold text-primary-600 hover:text-primary-500"
        >
          <span aria-hidden="true"> &rarr;</span>
        </a>
      </div>

      <div
        className="h-[10vh] z-20 flex justify-center items-center mr-auto ml-auto w-full"
        style={{ marginTop: '50vh' }}
      >
        <h2
          id="category-heading"
          className="px-8 mt-4 items-center justify-center flex text-discogray  text-2xl font-header1 leading-10 border-t border-b border-discoteal"
        >
          <span className="">Categories</span>
        </h2>
      </div>

      <div className="relative flex flex-col justify-center items-center ">
        <div className="w-5/6 mx-auto h-full flex flex-row items-center justify-center overflow-hidden">
          <MultiCarousel CollectionsData={{ collections }} />
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
