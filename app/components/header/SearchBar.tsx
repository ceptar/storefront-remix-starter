import { Form } from '@remix-run/react';

export function SearchBar() {
  let initialQuery = '';
  if (typeof window === 'undefined') {
    // running in a server environment
  } else {
    // running in a browser environment
    initialQuery = new URL(window.location.href).searchParams.get('q') ?? '';
  }

  const handleClick = (event) => {
    event.stopPropagation();
  };

  return (
    <Form method="get" action="/search" key={initialQuery} onClick={handleClick}>
      <input
        type="search"
        name="q"
        defaultValue={initialQuery}
        placeholder="Search"
        className="focus:ring-discopink focus:border-discopink block text-sm uppercase tracking-[0.15] text-white bg-discogray border-white w-full"
      />
    </Form>
  );
}
