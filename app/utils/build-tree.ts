// utils/build-tree.ts

type TreeItem = (typeof collections)[0] & { children: TreeItem[] };

export default function buildTree(
  array: typeof collections,
  elementKey: keyof (typeof collections)[0],
  parentKey: keyof (typeof collections)[0],
): TreeItem[] {
  let tree = [] as TreeItem[];

  for (let i = 0; i < array.length; i++) {
    if (array[i][parentKey]) {
      let parent = array
        .filter((elem) => elem[elementKey] === array[i][parentKey])
        .pop() as TreeItem;

      if (!parent['children']) {
        parent.children = [];
      }

      parent.children.push(array[i] as TreeItem);
    } else {
      tree.push(array[i] as TreeItem);
    }
  }

  return tree;
}
