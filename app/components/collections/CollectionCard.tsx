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
      className="mx-2 shadow-md bg-gray-100 max-w-fit relative flex overflow-hidden  hover:opacity-75 xl:w-auto"
    >
      <div className=" h-fit flex flex-col justify-center shadow-md ">

        <div className="w-full h-fit flex object-cover p-4 pb-12  ">
          <img src={collection.featuredAsset?.preview + '?w=300&h=400'} />
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
