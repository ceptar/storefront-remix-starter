import { Link } from '@remix-run/react';
import { CollectionsQuery } from '~/generated/graphql';

export function CollectionCard({
  collection,
}: {
  collection: CollectionsQuery['collections']['items'][number];
}) {
  return (
    <Link
      to={'/collections/' + collection.slug}
      prefetch="intent"
      key={collection.id}
      className="mx-2 shadow-md bg-gray-100 flex-grow relative flex overflow-hidden hover:opacity-75"
    >
      <div className="">

        <div className="max-w-full h-fit md:max-w-1/2 lg:max-w-1/3 xl:max-w-1/4 aspect-[7/10] px-4 pt-4 mb-12 overflow-hidden ">
          <img src={collection.featuredAsset?.preview + '?w=1200&h=1200' } className=" object-cover min-w-full min-h-full"/>
        </div>

      <span
        aria-hidden="true"
        className="absolute px-4 w-full bottom-0 h-12 font-semibold text-discopink flex items-center mr-8"   >

        {collection.name}
        </span>

      </div>
    </Link>
  );
}
