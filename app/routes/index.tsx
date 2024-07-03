import { useLoaderData } from '@remix-run/react';
import { sdk } from '../graphqlWrapper';
import { getCollections } from '~/providers/collections/collections';
import type { LoaderArgs } from '@remix-run/server-runtime';
import MultiCarousel from '~/utils/MultiCarouselFeatured';
import '~/styles/app.css';
import heropic1 from '~/../public/heropic1.jpg';
import { fetchCollectionProducts } from "~/providers/products/collectionProducts";

export async function loader({ request }: LoaderArgs<null>) {
  // Fetch general collections with a limit of 20
  const collections = await getCollections(request, { take: 20 });

  // Fetch the products for the "featured-items" collection
  const { products, totalItems } = await fetchCollectionProducts(
    "featured-items",
    0,
    20
  );

  console.log(collections, products, totalItems); // Log to debug
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
        <div className="relative h-[100vh] flex justify-start items-end pb-[16vh]">
          <div className="">
            <div className="px-8 lg:w-[50vw]">
              <div className="filter p-8 bg-opacity-75 mix-blend-lighten border-[1px] border-white backdrop-blur-[4px]">
                <div className="filter p-8 bg-white bg-opacity-100 mix-blend-lighten border-[1px] border-black backdrop-blur-[4px]">
                  <span className=" font-bold tracking-wider uppercase text-2xl sm:text-4xl lg:text-5xl xl:text-7xl">
                    <p>life's too short</p>
                    <p>to wear</p>
                    <p>boring jewelry</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[100vw] h-[100vh]"></div>

      <div className="h-[15vh] z-20 flex justify-center items-center mr-auto ml-auto w-full">
        <h2 id="category-heading" className="px-8 mt-4 items-center justify-center flex leading-10 border-t border-b border-discoteal">
          <span className="text-xl uppercase tracking-[0.25em] font-metrolight1 text-discogray p-2">Categories</span>
        </h2>
      </div>

      <div className="flex flex-col justify-center items-center">
        <div className="w-5/6 mx-auto h-full flex flex-row items-center justify-center overflow-hidden">
          <MultiCarousel featuredProducts={featuredProducts} />
        </div>
      </div>
      <div className="h-[5vh]"></div>
      <div className="bg-discoteal">
        <div className="flex items-center justify-center">
          <div className="h-[50vh] justify-center flex flex-row w-full">
            <div className="flex flex-col pt-0 justify-center items-center w-full">
              <img className="max-w-[400px] max-h-full object-cover" src={heropic1} alt="heropic1" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}