import { SearchQuery } from '~/generated/graphql';
import { Link } from '@remix-run/react';
import { Price } from './Price';

export type ProductCardProps = SearchQuery['search']['items'][number];
export function ProductCard({
  productAsset,
  productName,
  slug,
  priceWithTax,
  currencyCode,
}: ProductCardProps) {
  return (
    <Link
      className="flex flex-col bg-gray-100 shadow-md p-4"
      prefetch="intent"
      to={`/products/${slug}`}
    >
      <img
        className="flex-grow border-1 border-gray-300 object-cover aspect-[7/8]"
        alt=""
        src={productAsset?.preview + '?w=1200&h=1200'}
      />
      <div className="h-2" />
      <div className="text-sm text-gray-700 whitespace-nowrap overflow-hidden">
        {productName}
      </div>
      <div className="text-sm font-medium text-gray-900">
        <Price priceWithTax={priceWithTax} currencyCode={currencyCode} />
      </div>
    </Link>
  );
}
