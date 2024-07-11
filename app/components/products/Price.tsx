import type { CurrencyCode } from '~/generated/graphql';
import type { ProductCardProps } from './ProductCard';

export function Price({
  priceWithTax,
  currencyCode,
}: {
  priceWithTax?: number | ProductCardProps['priceWithTax'];
  currencyCode?: ProductCardProps['currencyCode'];
}) {
  if (priceWithTax == null || !currencyCode) {
    return <></>;
  }
  if (typeof priceWithTax === 'number') {
    return <>{formatPrice(priceWithTax, currencyCode)}</>;
  }
  if ('value' in priceWithTax) {
    return <>{formatPrice(priceWithTax.value, currencyCode)}</>;
  }
  if (priceWithTax.min === priceWithTax.max) {
    return <>{formatPrice(priceWithTax.min, currencyCode)}</>;
  }
  return (
    <>
      {formatPrice(priceWithTax.min, currencyCode)} -{' '}
      {formatPrice(priceWithTax.max, currencyCode)}
    </>
  );
}

export function formatPrice(value: number, currency: CurrencyCode) {
  const formatted = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
  }).format(value / 100);

  // Ensure one space between currency symbol and number
  return formatted.replace(/(\D+)(\d)/, '$1 $2');
}