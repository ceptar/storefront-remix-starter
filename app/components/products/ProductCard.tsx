import type { SearchQuery } from '~/generated/graphql';
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
    <Link className=" p-4" prefetch="intent" to={`/products/${slug}`}>
      <img
        className=" object-cover"
        alt=""
        src={productAsset?.preview + '?preset=full'}
      />
      <div className="h-2" />
      <div className="text-sm text-discogray font-fw500 whitespace-nowrap overflow-hidden">
        {productName}
      </div>
      <div className="text-sm font-medium text-gray-900">
        <Price priceWithTax={priceWithTax} currencyCode={currencyCode} />
      </div>
    </Link>
  );
}
