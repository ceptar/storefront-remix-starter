import type { DataFunctionArgs } from '@remix-run/server-runtime';
import type { MetaFunction } from '@remix-run/react';
import { useLoaderData, useSubmit } from '@remix-run/react';
import { sdk } from '../../graphqlWrapper';
import { CollectionCard } from '~/components/collections/CollectionCard';
import { Breadcrumbs } from '~/components/Breadcrumbs';
import { APP_META_TITLE } from '~/constants';
import { filteredSearchLoaderFromPagination } from '~/utils/filtered-search-loader';
import { useRef, useState } from 'react';
import { FacetFilterTracker } from '~/components/facet-filter/facet-filter-tracker';
import { FiltersButton } from '~/components/FiltersButton';
import { ValidatedForm } from 'remix-validated-form';
import { withZod } from '@remix-validated-form/with-zod';
import { FilterableProductGrid } from '~/components/products/FilterableProductGrid';

export const meta: MetaFunction = ({ data }: { data: any }) => {
  return [
    {
      title: data?.collection
        ? `${data.collection?.name} - ${APP_META_TITLE}`
        : APP_META_TITLE,
    },
  ];
};

const paginationLimitMinimumDefault = 25;
const allowedPaginationLimits = new Set<number>([
  paginationLimitMinimumDefault,
  50,
  100,
]);
const { validator, filteredSearchLoader } = filteredSearchLoaderFromPagination(
  allowedPaginationLimits,
  paginationLimitMinimumDefault,
);

export async function loader({ params, request, context }: DataFunctionArgs) {
  const {
    result,
    resultWithoutFacetValueFilters,
    facetValueIds,
    appliedPaginationLimit,
    appliedPaginationPage,
    term,
  } = await filteredSearchLoader({
    params,
    request,
    context,
  });
  const collection = (await sdk.collection({ slug: params.slug })).collection;
  if (!collection?.id || !collection?.name) {
    throw new Response('Not Found', {
      status: 404,
    });
  }

  return {
    term,
    collection,
    result,
    resultWithoutFacetValueFilters,
    facetValueIds,
    appliedPaginationLimit,
    appliedPaginationPage,
  };
}

export default function CollectionSlug() {
  const loaderData = useLoaderData<typeof loader>();
  const { collection, result, resultWithoutFacetValueFilters, facetValueIds } =
    loaderData;
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const facetValuesTracker = useRef(new FacetFilterTracker());
  facetValuesTracker.current.update(
    result,
    resultWithoutFacetValueFilters,
    facetValueIds,
  );
  const submit = useSubmit();
  return (
    <div className="w-full">
      <div
        className="absolut overflow-hidden top-0 w-full flex flex-col items-center z-10"
      >      </div>
      <div className="px-4 bg-gray-100 flex flex-row border-b border-discogray">
          <div className=" w-full flex flex-col items-start justify-center ">
            <Breadcrumbs items={collection.breadcrumbs}></Breadcrumbs>
          </div>

          <div className="flex flex-col">
            <FiltersButton
              filterCount={facetValueIds.length}
              onClick={() => setMobileFiltersOpen(true)}
            />
          </div>
        </div>
      {/* <div className="relative w-full">
        <div className="uppercase font-fw200 tracking-[0.25em] px-4 py-8 text-3xl border-b border-t border-discogray">
          <h2 className="text-center">
            {collection.name}
          </h2>
        </div>
      </div> */}

<div className="flex h-[2rem] relative"></div>
        <div className="relative h-[5rem] z-20 flex justify-center items-center mr-auto ml-auto w-full">
          <h2
            id="category-heading"
            className="px-8 items-center justify-center flex leading-10 border-t border-b border-discogray"
          >
            <span className="text-xl uppercase tracking-[0.25em] font-fw300 text-discogray p-2">
            {collection.name}
            </span>
          </h2>
        </div>
        <div className="flex h-[2rem] relative"></div>


      <div className="mx-auto ">


        {collection.children?.length ? (
          <div className="">
            <div className="">
              {collection.children.map((child) => (
                <CollectionCard
                  key={child.id}
                  collection={child}
                ></CollectionCard>
              ))}
            </div>
          </div>
        ) : (
          ''
        )}

        <ValidatedForm
          validator={withZod(validator)}
          method="get"
          onChange={(e) =>
            submit(e.currentTarget, { preventScrollReset: true })
          }
        >
          <FilterableProductGrid
            allowedPaginationLimits={allowedPaginationLimits}
            mobileFiltersOpen={mobileFiltersOpen}
            setMobileFiltersOpen={setMobileFiltersOpen}
            {...loaderData}
          />
        </ValidatedForm>
      </div>
      <div className="h-8"></div>
    </div>

  );
}

export function CatchBoundary() {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-gray-900 my-8">
        Collection not found!
      </h2>
      <div className="mt-6 grid sm:grid-cols-5 gap-x-4">
        <div className="space-y-6">
          <div className="h-2 bg-slate-200 col-span-1"></div>
          <div className="h-2 bg-slate-200 col-span-1"></div>
          <div className="h-2 bg-slate-200 col-span-1"></div>
        </div>
        <div className="sm:col-span-5 lg:col-span-4">
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            <div className="h-64 bg-slate-200 "></div>
            <div className="h-64 bg-slate-200 "></div>
            <div className="h-64 bg-slate-200 "></div>
            <div className="h-64 bg-slate-200 runded"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
