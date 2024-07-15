import { LoaderArgs } from '@remix-run/server-runtime';
import { gql } from '@apollo/client';

const VENDURE_API_URL = 'https://nonotheresnolimit.xyz/shop-api'; // Replace with your Vendure API URL

const GET_COLLECTION_PRODUCTS = /*GraphQL*/ `
query GetCollectionProducts($slug: String!, $skip: Int!, $take: Int!) {
  collection(slug: $slug) {
    id
    name
    description
    featuredAsset {
      id
      preview
    }
  }
  search(
    input: {
      collectionSlug: $slug,
      groupByProduct: true,
      skip: $skip,
      take: $take }
  ) {
    totalItems
    items {
      productName
      slug
      productAsset {
        id
        preview
      }
      priceWithTax {
        ... on SinglePrice {
          value
        }
        ... on PriceRange {
          min
          max
        }
      }
      currencyCode
    }
  }
}
`;

export async function fetchCollectionProducts(
  slug: string,
  skip: number,
  take: number,
) {
  try {
    const response = await fetch(VENDURE_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: GET_COLLECTION_PRODUCTS,
        variables: { slug, skip, take },
      }),
    });

    const { data, errors } = await response.json();

    if (errors) {
      console.error('GraphQL Errors:', errors);
      throw new Error('GraphQL query failed');
    }

    if (!data || !data.search) {
      console.error('Unexpected GraphQL response:', data);
      throw new Error('Unexpected GraphQL response');
    }

    return {
      products: data.search.items,
      totalItems: data.search.totalItems,
    };
  } catch (error) {
    console.error('Error fetching collection products:', error);
    throw error;
  }
}
