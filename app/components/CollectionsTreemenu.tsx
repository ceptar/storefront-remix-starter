import { Link } from '@remix-run/react';

interface Collection {
  id: string;
  name: string;
  parentId?: string;
  slug: string; // Make sure 'slug' property is defined
  parent?: {
    id: string;
    name: string;
    slug: string;
  };
}

interface CollectionsData {
  collections: Collection[];
}

export default function CollectionsTreemenu({ collectionsData }: { collectionsData: CollectionsData }) {
  // Helper function to normalize the parent information
  const normalizeParent = (collection: Collection) => {
    if (collection.parent) {
      const parentName = collection.parent.name;
      const parentCollection = collectionsData.collections.find((c) => c.name === parentName);
      if (parentCollection) {
        // Create a new object with the additional property
        collection = { ...collection, parentId: parentCollection.id };
      }
    }
    return collection; // Return the modified or original object
  };

  // Normalize the parent information in the collections
  const normalizedCollections = collectionsData.collections.map(normalizeParent);

  // Create a function to recursively build the tree structure
  const buildTree = (collections: Collection[], parentId?: string) => {
    const result: JSX.Element[] = [];

    for (const collection of collections) {
      if (collection.parentId === parentId) {
        result.push(
          <div className="" key={collection.id}>
            <Link 
              to={`/collections/${collection.slug}`}
              className={`${collection.parentId ? 'child' : 'parent'} group transition-all duration-300 ease-in-out`}
            >
              <div className="px-4 py-2 bg-left-bottom bg-gradient-to-r from-discoteal to-discopink bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-300 ease-out">
                {collection.name}
              </div>
            </Link>

            {/* Recursively build children for the current collection */}
            {buildTree(collections, collection.id)}
          </div>
        );
      }
    }

    return result.length > 0 ? <div className="">{result}</div> : null;
  };

  return (
    <div className="">
      {buildTree(normalizedCollections)}
    </div>
  );
}