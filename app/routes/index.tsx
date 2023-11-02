import { useLoaderData } from '@remix-run/react';
import { getCollections } from '~/providers/collections/collections';
import { CollectionCard } from '~/components/collections/CollectionCard';
import { BookOpenIcon } from '@heroicons/react/24/solid';
import { LoaderArgs } from '@remix-run/server-runtime';

export async function loader({ request }: LoaderArgs) {
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
      <div
        style={{
          backgroundImage: 'url(/hero122.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'absolute',
          top: '0',
          height: '70vh',
          width: '100vw',
          zIndex: '10',
        }}
      >
        {/* Decorative image and overlay */}
        <div className="mt-[12vh]"></div>
        <div className="h-[58vh] items-center sm:grid-cols-2 lg:grid-cols-4 grid gap-5 row-gap-5">
          <div className="pt-0 pr-12 pb-0 pl-12 justify-center">
            <h1 className="whitespace-nowrap text-xl sm:text-2xl md:text-4xl font-thin text-white">
              <span className="p-2 sm:p-3">Wearable Art.</span>
              <p className="my-8 sm:my-12"></p>
              <p>
                <span className="bg-discoteal-500 p-2 sm:p-3">
                  Every Piece UNIQUE.
                </span>
              </p>
              <p className="my-8 sm:my-12"></p>
              <p>
                <span className="bg-discoteal-500 p-2 sm:p-3">Like You.</span>
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

      <section className="relative pt-24 sm:pt-32 xl:max-w-7xl xl:mx-auto xl:px-8" style={{ marginTop: '70vh' }}>
        <div className="px-4 sm:px-6 lg:px-8 xl:px-0">
          <h2
            id="category-heading"
            className="text-2xl font-light tracking-tight text-gray-900"
          >
            Shop by Category
          </h2>
        </div>

        <div className="mt-4">
          <div className="-my-2">
            <div className="box-content py-2 px-2 overflow-x-auto xl:overflow-visible">
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
    </>
  );
}
