
import { useLoaderData } from '@remix-run/react';
import { getCollections } from '~/providers/collections/collections';
import { CollectionCard } from '~/components/collections/CollectionCard';
import { LoaderArgs } from '@remix-run/server-runtime';
import MultiCarousel from '~/utils/MultiCarousel';


export async function loader({ request }: LoaderArgs) {
  const collections = await getCollections(request, { take: 20 });
  return {
    collections,
  };
}

export default function Index() {

  const { collections } = useLoaderData();
  const headerImage = collections[0]?.featuredAsset?.preview;

  return (
    <>
      <div
        style={{
          backgroundImage: 'url(/hero122.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'absolute',
          alignItems: 'center',
          justifyContent: 'center',
          top: '0',
          height: '60vh',
          width: '100vw',
          zIndex: '10',
        }}
      >
        {/* Decorative image and overlay */}

        <div className="flex h-[60vh] items-center justify-center pr-4 pb-16 pl-4 mr-auto ml-auto  md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20
    w-full">
  <div className="sm:grid-cols-2 lg:grid-cols-4 grid gap-5 row-gap-5">
    <div className="pt-16 pr-12 pb-0 pl-12 sm:px-0">
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



      <section className="relative xl:max-w-7xl xl:mx-auto xl:px-8" style={{ marginTop: '60vh' }}>
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

        <div className="pt-16"><MultiCarousel /></div>

        <div className="pt-16"></div>

      </section>
    </>
  );
}
