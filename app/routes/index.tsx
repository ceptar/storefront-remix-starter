import { useLoaderData } from '@remix-run/react';
import { getCollections } from '~/providers/collections/collections';
import { CollectionCard } from '~/components/collections/CollectionCard';

import { LoaderFunctionArgs } from '@remix-run/server-runtime';
import '~/styles/app.css';
import hero122 from '~/../public/hero122.webp';

export async function loader({ request }: LoaderFunctionArgs) {
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
        className="top-0 z-10 w-full h-[70vh] min-h-[70vh] justify-center"
        style={{
          backgroundImage: 'url(/hero122.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Decorative image and overlay */}

        <div className="h-[10vw]"></div>
        <div className="z-50 h-[60vw] items-center rlative sm:grid-cols-2 lg:grid-cols-4 grid gap-5 row-gap-5">
          <div className="pt-0 pr-12 pb-0 pl-12 justify-center">
            <h1 className="whitespace-nowrap text-3xl sm:text-4xl md:text-5xl font-thin text-white">
              <span className="p-2 sm:p-3">Wearable Art.</span>
              <p className="my-8 sm:my-12"></p>
              <p>
                <span className="bg-discoteal-500 p-2 sm:p-3 ">
                  Every Piece UNIQUE.
                </span>
              </p>
              <p className="my-8 sm:my-12"></p>
              <p>
                <span className="bg-discoteal-500 p-2 sm:p-3 ">Like You.</span>
                <span className="p-7 font-bold bg-discopink-500 m-2 text-white">
                  Get Yours.
                </span>
              </p>
            </h1>
          </div>
          <div className="pt-0 pr-12 pb-0 pl-12 sm:px-0">
            <div className="  "></div>
          </div>
          <div className="pt-0 pr-12 pb-0 pl-12 text-center sm:px-0"></div>
          <div className="pt-0 pr-12 pb-0 pl-12 text-center sm:px-0"></div>
        </div>
      </div>

      <div className="absolute h-72"></div>

      <section
        aria-labelledby="category-heading"
        className="pt-24 sm:pt-32 xl:max-w-7xl xl:mx-auto xl:px-8"
      >
        <div className="px-4 sm:px-6 lg:px-8 xl:px-0">
          <h2
            id="category-heading"
            className="text-2xl font-light tracking-tight text-gray-900"
          >
            Shop by Category
          </h2>
        </div>

        <div className="mt-4 flow-root">
          <div className="-my-2">
            <div className="box-content py-2 px-2 relative overflow-x-auto xl:overflow-visible">
              <div className="grid justify-items-center grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-8 sm:px-6 lg:px-8 xl:relative xl:px-0 xl:space-x-0 xl:gap-x-8">
                {collections.map((collection) => (
                  <CollectionCard key={collection.id} collection={collection} />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 px-4 sm:hidden">
          <a
            href="~/routes/__cart/index#"
            className="block text-sm font-semibold text-primary-600 hover:text-primary-500"
          >
            Browse all categories
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>
      </section>
      <section>
        <div className=" grid-cols-3 flex  justify-between">
          <div className="flex-col justify-items-start">aaa</div>
          <div className="flex-col justify-items-center">bbb</div>
          <div className="flex-col justify-items-end">ccc</div>
        </div>
      </section>
    </>
  );
}
