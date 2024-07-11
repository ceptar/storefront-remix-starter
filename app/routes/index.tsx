import { useLoaderData } from '@remix-run/react';
import { sdk } from '../graphqlWrapper';
import { getCollections } from '~/providers/collections/collections';
import type { LoaderArgs } from '@remix-run/server-runtime';

import SuggestedCarousel from '../components/Carousel'
import '~/styles/app.css';
import special from '~/../public/special.webp';
import { fetchCollectionProducts } from "~/providers/products/collectionProducts";
import DiscoLightningAni from "~/components/animated/DiscoLightningAni";

export async function loader({ request }) {
    const options = {
      filter: {
        parentId: {
          eq: "18"  // Assuming "18" is the ID of the parent you want to filter by
        }
      },
      take: 20  // Limits the number of results
    };
  
  const collections = await getCollections(request, options); // Now passing filter options

  const { products, totalItems } = await fetchCollectionProducts(
    "featured-items",
    0,
    20
  );

  return {
    collections,
    featuredProducts: products,
    totalItems,
  };
}

export default function Index() {
  const { collections, featuredProducts, totalItems } = useLoaderData<typeof loader>();

  return (
    <>
      <div className="bg-hero" aria-label="[hero1]">
        <div className="relative h-[100vh] flex justify-end sm:justify-start items-end ">
          <div className="mb-32 ml-auto sm:ml-[] sm:w-full ">

            <div className="p-[1.6rem] w-[calc(50vw-0.8rem)] sm:w-full lg:w-[calc(50vw-0.8rem)]">

              <div className="filter p-[.8rem] bg-opacity-75 mix-blend-lighten border-[1px] border-white backdrop-blur-[4px]">
                <div className="filter p-[1.6rem] bg-white bg-opacity-100 mix-blend-lighten border-[1px] border-black backdrop-blur-[4px]">
                  <span className="font-fw300 tracking-wider uppercase text-2xl sm:text-4xl lg:text-5xl xl:text-7xl">
                    <p>life's too short</p>
                    <p>to wear</p>
                    <p>boring jewelry</p>
                  </span>
                  <DiscoLightningAni className="pl-2 ml-auto"/>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="w-[100vw] h-[calc(100vh-5rem)] relative"></div>
<div className="h-[2rem] border-t border-discogray"></div>
      <div className="relative h-[5rem] z-20 flex justify-center items-center mr-auto ml-auto w-full">
        <h2 id="category-heading" className="px-8 items-center justify-center flex leading-10 border-t border-b border-discogray">
          <span className="text-xl uppercase tracking-[0.25em] font-fw300 text-discogray p-2"
          >Featured Items</span>
        </h2>
      </div>
      <div className="h-[calc(2rem-41px)] "></div>
{/* <div className="uppercase font-fw200 tracking-[0.25em] px-4 py-8 text-3xl border-b border-t border-discogray">
        <div>
          <h2 className="text-center ">Featured Items</h2>
        </div>
      </div> */}

      <div className="w-[100vw] mx-auto">


<SuggestedCarousel featuredProducts={featuredProducts} />
      </div>

      <div className="flex relative h-[5rem]"></div>
      <div className="bg-discogray overflow-clip">
        <div className="flex items-center justify-center">
          <div className="justify-center flex flex-row w-full">
            <div className="flex flex-col pt-0 justify-center items-center w-[50%]">
             </div>
          </div>
        </div>
      </div>


    </>
  );
}