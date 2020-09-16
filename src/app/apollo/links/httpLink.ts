import {HttpLink} from '@apollo/client';
import fetch from 'unfetch';
import {getGraphqlEndpoint} from 'utils/global';

export const httpLink = new HttpLink({
  uri: getGraphqlEndpoint(),
  fetch: fetch,
});
