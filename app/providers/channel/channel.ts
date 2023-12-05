import gql from 'graphql-tag';
import type { QueryOptions} from '~/graphqlWrapper';
import { sdk } from '~/graphqlWrapper';

export function activeChannel(options: QueryOptions) {
  return sdk
    .activeChannel(undefined, options)
    .then(({ activeChannel }) => activeChannel);
}

gql`
  query activeChannel {
    activeChannel {
      id
      currencyCode
    }
  }
`;
