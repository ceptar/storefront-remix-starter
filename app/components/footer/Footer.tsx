import type { RootLoaderData } from '~/root';
import { Link } from '@remix-run/react';

const navigation = {
  support: [
    { name: 'Help', href: '#' },
    { name: 'Track order', href: '#' },
    { name: 'Shipping', href: '#' },
    { name: 'Returns', href: '#' },
  ],
  company: [
    { name: 'About', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Corporate responsibility', href: '#' },
    { name: 'Press', href: '#' },
  ],
};

export default function Footer({
  collections,
}: {
  collections: RootLoaderData['collections'];
}) {
  return (
    <footer
      className="border-t bg-discograytwo py-12 mt-auto"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="max-w-7xl px-4">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="grid grid-cols-1 sm:grid sm:grid-cols-2 gap-8 xl:col-span-2">
            <div className="grid grid-cols-1 md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-discogray tracking-[0.25em] uppercase">
                  Shop
                </h3>
                <ul className="my-2">
                  {collections.map((collection) => (
                    <li key={collection.id}>
                      <Link
                        className="text-md font-metrolight1 text-discogray hover:underline"
                        to={'/collections/' + collection.slug}
                        prefetch="intent"
                        key={collection.id}
                      >
                        {collection.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-discogray tracking-[0.25em] uppercase">
                  Support
                </h3>
                <ul className="my-2">
                  {navigation.support.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-md font-metrolight1 text-discogray hover:underline"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-discogray tracking-[0.25em] uppercase">
                  Company
                </h3>
                <ul className="my-2">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-md font-metrolight1 text-discogray hover:underline"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-8 xl:mt-0">
            <h3 className="text-sm font-semibold text-discogray tracking-[0.25em] uppercase">
              Subscribe to our newsletter
            </h3>
            <p className="mt-4 text-md font-metrolight1 text-discogray">
              Be the first to know about exclusive offers & deals.
            </p>
            <form className="mt-4 sm:flex sm:max-w-md">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                type="email"
                name="email-address"
                id="email-address"
                autoComplete="email"
                required
                className="appearance-none min-w-0 w-full bg-white border border-gray-300 py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white focus:border-white focus:placeholder-gray-400"
                placeholder="Enter your email"
              />
              <div className="mt-3 sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                <button
                  type="submit"
                  className="w-full bg-primary-500 border border-transparent py-2 px-4 flex items-center justify-center text-base uppercase tracking-[0.15em] text-discogray hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-primary-500"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
        
      </div>
    </footer>
  );
}
