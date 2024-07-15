import FacetFilterControls from '~/components/facet-filter/FacetFilterControls';
import { ProductCard } from '~/components/products/ProductCard';
import {
  translatePaginationFrom,
  translatePaginationTo,
} from '~/utils/pagination';
import { Pagination } from '~/components/Pagination';
import { NoResultsHint } from '~/components/products/NoResultsHint';
import { useRef } from 'react';
import { FacetFilterTracker } from '~/components/facet-filter/facet-filter-tracker';
import type { filteredSearchLoaderFromPagination } from '~/utils/filtered-search-loader';

export function FilterableProductGrid({
  result,
  resultWithoutFacetValueFilters,
  facetValueIds,
  appliedPaginationPage,
  appliedPaginationLimit,
  allowedPaginationLimits,
  mobileFiltersOpen,
  setMobileFiltersOpen,
}: Awaited<
  ReturnType<
    ReturnType<
      typeof filteredSearchLoaderFromPagination
    >['filteredSearchLoader']
  >
> & {
  allowedPaginationLimits: Set<number>;
  mobileFiltersOpen: boolean;
  setMobileFiltersOpen: (arg0: boolean) => void;
}) {
  const facetValuesTracker = useRef(new FacetFilterTracker());
  facetValuesTracker.current.update(
    result,
    resultWithoutFacetValueFilters,
    facetValueIds,
  );

  return (
    <div className="">
      {mobileFiltersOpen && (
        <FacetFilterControls
          facetFilterTracker={facetValuesTracker.current}
          mobileFiltersOpen={mobileFiltersOpen}
          setMobileFiltersOpen={setMobileFiltersOpen}
        />
      )}
      {result.items.length > 0 ? (
        <div className="col-span-5 lg:col-span-4 space-y-4">
          <div className="grid grid-cols-1 gap-y-4 gap-x-4 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-6 ">
            {result.items.map((item) => (
              <ProductCard key={item.productId} {...item} />
            ))}
          </div>

          <div className="px-4 pt-[5rem] flex flex-row justify-between items-center gap-4">
            <span className="self-start text-gray-500 text-sm mt-2">
              Showing products{' '}
              {translatePaginationFrom(
                appliedPaginationPage,
                appliedPaginationLimit,
              )}{' '}
              to{' '}
              {translatePaginationTo(
                appliedPaginationPage,
                appliedPaginationLimit,
                result.items.length,
              )}
            </span>
            <Pagination
              appliedPaginationLimit={appliedPaginationLimit}
              allowedPaginationLimits={allowedPaginationLimits}
              totalItems={result.totalItems}
              appliedPaginationPage={appliedPaginationPage}
            />
          </div>
        </div>
      ) : (
        <NoResultsHint
          facetFilterTracker={facetValuesTracker.current}
          className={'col-span-4 p-4'}
        />
      )}
    </div>
  );
}
