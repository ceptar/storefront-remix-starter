import { Collection } from '~/types'; // Replace with the correct path to your types

type CollectionTreeProps = {
  collection: Collection;
};

export function CollectionTree({ collection }: CollectionTreeProps) {
  return (
    <ul>
      <li>
        <a href={collection.slug}>{collection.name}</a>
        {collection.children && collection.children.length > 0 && (
          <ul>
            {collection.children.map((child) => (
              <li key={child.id}>
                <a href={child.slug}>{child.name}</a>
                <CollectionTree collection={child} />
              </li>
            ))}
          </ul>
        )}
      </li>
    </ul>
  );
}