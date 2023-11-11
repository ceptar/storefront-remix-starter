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
      className=" items-center justify-center shadow-md  max-w-[300px] relative overflow-hidden hover:opacity-75 xl:w-auto"
    >
      <div className="bg-gray-100 shadow-md ml-4 p-4 pb-12 flex w-fit ">

        <div className=" w-full h-full flex object-cover">
          <img src={collection.featuredAsset?.preview + '?w=300&h=400'} />
        </div>

      <span
        aria-hidden="true"
        className=" absolute w-full bottom-0 h-12 text-semibold text-discopink flex items-center"
      >

        {collection.name}
        </span>

      </div>
    </Link>
  );
}
