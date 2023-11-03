import { useRootLoader } from '~/utils/use-root-loader';
import { getCollections } from '~/providers/collections/collections';
import { ArraytoTree, HasParent, TreeNode } from './ArraytoTree';
import { LoaderArgs } from '@remix-run/server-runtime';

import '~/styles/app.css';


export function CollectionTree() {
  const { data, loading, error } = useRootLoader();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  return <CollectionList collection={ArraytoTree(data.collections.items)} />;
}

function CollectionList(props: { collection: TreeNode<any> }) {
  return (
    <ul>
      {props.collection.children.map((child, i) => (
        <li>
          <a href={child.slug}>{child.name}</a>
          <CollectionList collection={child} />
        </li>
      ))}
    </ul>
  );
}
