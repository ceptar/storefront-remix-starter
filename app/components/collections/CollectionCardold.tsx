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
      className="mx-2 justify-center items-center shadow-md bg-discoteal-100 flex flex-col relative overflow-hidden hover:opacity-75"
    >
      <div className="mx-auto flex flex-col max-h-[200px] max-w-full">
        <div className=" px-4 flex flex-col h-fit max-w-full md:max-w-[1/2] lg:max-w-[1/3] xl:max-w-[1/4] aspect-[7/10] pt-4 mb-12 overflow-hidden ">
          <img
            src={collection.featuredAsset?.preview + '?w=1200&h=1200'}
            className=" object-cover object-center justify-center w-full h-full flex flex-row"
          />
        

        <span
          aria-hidden="true"
          className=" bg-discoteal-100 w-full font-light text-discogray flex flex-row"
        >
          {collection.name}
        </span>
        </div>
      </div>
    </Link>
  );
}
