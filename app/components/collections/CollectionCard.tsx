import { Link } from '@remix-run/react';
import type { CollectionsQuery } from '~/generated/graphql';

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
      className="mx-2 w-fit justify-center items-center flex flex-col relative overflow-hidden shadow-md shadow-gray-300 hover:opacity-75"
    >
    <div className="inline-flex flex-col items-start gap-2 p-4 bg-discoteal-100 mx-auto">
      <div className="flex flex-col justify-center items-center w-[7rem] h-[10rem] bg-[#83a9ac]">
      <img
            src={collection.featuredAsset?.preview + '?w=1200&h=1200'}
            className="object-cover object-center justify-center w-full h-full"
          />
      </div>
      <div className="h-[2rem] w-[7rem] uppercase flex flex-col items-start justify-start text-sm text-discogray font-metrolight1 leading-[140%] whitespace-normal">
      {collection.name}
      </div>
    </div>
    </Link>
  );
}
