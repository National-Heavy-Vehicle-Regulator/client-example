import {onError} from '@apollo/client/link/error';

//@TODO log errors to application insights
export const errorLink = onError(({graphQLErrors, networkError}) => {
  if (graphQLErrors) {
    // graphQLErrors.forEach(({message, path}) =>
    //   console.log(`[GraphQL error]: Message: ${message}, Path: ${path}`),
    // );
  }

  if (networkError) {
    // console.log(
    //   `[Network error ${operation.operationName}]: ${networkError.message}`,
    // );
  }
});
