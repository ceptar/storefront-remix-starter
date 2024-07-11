import { HomeIcon } from '@heroicons/react/24/solid';
import { Link } from '@remix-run/react';

export function Breadcrumbs({
  items,
}: {
  items: { name: string; slug: string; id: string }[];
}) {
  return (
    <nav className="flex py-2 " aria-label="Breadcrumb">
      <ol role="list" className="flex items-center space-x-1">
        <li>
          <div>
            <Link to="/" className=" text-discogray hover:text-discogray-400">
              <HomeIcon className="flex-shrink-0 h-5 w-5" aria-hidden="true" />
              <span className="sr-only">Home</span>
            </Link>
          </div>
        </li>
        {items
          .filter((item) => item.name !== '__root_collection__')
          .map((item, index) => (
            <li key={item.name}>
              <div className="flex items-center group transition-all duration-300 ease-in-out">
                <svg
                  className="flex-shrink-0 h-5 w-5 text-discogray"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                </svg>
                <Link
                  to={'/collections/' + item.slug}
                  className="text-sm text-discogray hover:text-discogray-400 bg-left-bottom bg-gradient-to-r from-discogray to-discogray bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-300 ease-out "
                >
                  {item.name}
                </Link>
              </div>
            </li>
          ))}
      </ol>
    </nav>
  );
}
