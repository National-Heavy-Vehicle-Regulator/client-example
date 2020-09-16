export interface QueryResult {
  data: object[];
  count: number;
  filter: QueryFilter;
}

export interface QueryFilter {
  limit: number;
  skip: number;
  fields: {[key: string]: boolean};
  order: string[];
  where: object;
}
