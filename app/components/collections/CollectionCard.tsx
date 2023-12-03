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
      className="mx-2 w-fit justify-center items-center shadow-md bg-discoteal-100 flex flex-col relative overflow-hidden hover:opacity-75"
    >
    <div className="inline-flex flex-col items-start gap-5 p-4 bg-[#ccfff9]">
      <div className="flex flex-col justify-center items-center w-[7rem] h-[10rem] bg-[#83a9ac]">
      <img
            src={collection.featuredAsset?.preview + '?w=1200&h=1200'}
            className="object-cover object-center justify-center w-full h-full"
          />
      </div>
      <div className="flex flex-col items-start gap-2 earrings text-discogray font-metrobold1 text-sm leading-[140%]">
      {collection.name}
      </div>
    </div>
    </Link>
  );
}
