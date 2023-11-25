import { Link } from '@remix-run/react';

interface Collection {
  id: string;
  name: string;
  parentId?: string;
  
  children?: Collection[];
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
        collection.parentId = parentCollection.id;
      }
    }
  };

  // Normalize the parent information in the collections
  collectionsData.collections.forEach(normalizeParent);

  // Create a function to recursively build the tree structure
  const buildTree = (collections: Collection[], parentId?: string) => {
    const result: JSX.Element[] = [];

    for (const collection of collections) {
      if (collection.parentId === parentId) {
        result.push(
          <div className="" key={collection.id}>
            <Link 
  to={`/collections/${collection.slug}`}
  className={`${collection.parentId ? 'child' : 'parent'} group linkeins`}
>
  <div className="px-4 py-2 linkeinszwo">{collection.name} </div>
</Link>


            {/* Recursively build children for the current collection */}
            {buildTree(collections, collection.id)}
          </div>
        );
      }
    }

    return result.length > 0 ? <div className="" >{result}</div> : null;
  };

  return (
    <div className="">
      {buildTree(collectionsData.collections)}
    </div>
  );
}
