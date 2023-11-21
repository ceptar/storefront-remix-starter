// components/HeaderMenu.tsx

function HeaderMenu({ tree }: { tree: TreeItem<any>[] }) {
  return (
    <ul>
      {tree.map(item => (
        <li key={item.id}>
          <Link to={item.slug}>
            {item.name}
          </Link>
          <HeaderMenu tree={item.children} /> 
        </li>
      ))}
    </ul>
  );
}