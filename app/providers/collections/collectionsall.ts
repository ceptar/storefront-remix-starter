import gql from 'graphql-tag';
import { sdk } from '../../graphqlWrapper';
import { listedProductFragment } from '../products/products';
import type { CollectionListOptions } from '~/generated/graphql';

export function getallCollections(request: Request) {
  return sdk
    .collections({}, { request })
    .then((result) => result.collections?.items);
}

gql`
  query getAllCollections {
    collections {
      items {
        id
        name
        slug
        parent {
          id
          name
          slug
        }
      }
    }
  }
`;
