import {gql} from '@apollo/client';

/**
 * Despite the docs referencing a setTypeDefs, this has been removed.
 * This means we can't set local schema on store load, and need to define
 * all here.
 */
const typeDefs = gql`
  scalar JSONObject

  extend type Query {
    routeStore: RouteStore
  }

  type RouteStore {
    routes: JSONObject
    props: RouteProps
  }

  type RouteProps {
    queryLoading: Boolean
  }
`;

export default typeDefs;
