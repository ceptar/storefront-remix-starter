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
      className="items-center justify-center shadow-md  max-w-[300px] relative overflow-hidden hover:opacity-75 xl:w-auto"
    >
      <div className="bg-gray-100 shadow-md p-4 pb-12 flex w-fit ">

        <div className="w-full h-full flex object-cover">
          <img src={collection.featuredAsset?.preview + '?w=300&h=400'} />
        </div>

      <span
        aria-hidden="true"
        className=" absolute w-full bottom-x-0 bottom-0 h-4/5"
      />
      <span className=" absolute w-full bottom-[2vh] 0 mt-auto text-discopurple">
        {collection.name}
      </span>
      </div>
    </Link>
  );
}
