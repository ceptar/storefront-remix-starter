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
      className="mx-2 justify-center items-center shadow-md bg-discoteal-200 flex flex-col mr-auto relative overflow-hidden hover:opacity-75"
    >
      <div className="flex flex-col max-h-[200px] ">
        <div className="flex flex-col h-fit w-full max-w-[5/6] md:max-w-[1/2] lg:max-w-[1/3] xl:max-[w-1/4] aspect-[7/10] pt-4 mb-12 overflow-hidden ">
          <img
            src={collection.featuredAsset?.preview + '?w=1200&h=1200'}
            className=" object-cover object-center justify-center w-full h-full px-4"
          />
        </div>

        <span
          aria-hidden="true"
          className="text-center bg-discoteal-200 absolute px-4 w-full bottom-0 h-12 font-light text-discogray flex items-center justify-center"
        >
          {collection.name}
        </span>
      </div>
    </Link>
  );
}
