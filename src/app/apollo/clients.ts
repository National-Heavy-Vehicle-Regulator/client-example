import {ApolloClient, ApolloLink} from '@apollo/client';
import cache from './cache';
import {httpLink} from './links/httpLink';
import {retryLink} from './links/retryLink';
import {errorLink} from './links/errorLink';
import typeDefs from 'typeDefs/clientSchema';

const link = ApolloLink.from([errorLink, retryLink, httpLink]);

export const client = new ApolloClient({
  cache: cache,
  link: link,
  typeDefs: typeDefs,
});
