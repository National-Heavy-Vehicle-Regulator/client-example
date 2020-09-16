import {MUIDataTableState} from 'mui-datatables';
import {QueryResult} from 'utils/datatable/types';
import R from 'ramda';
import {
  QueryHookOptions,
  QueryResult as AQueryResult,
  OperationVariables,
  useApolloClient,
} from '@apollo/client';
import {ROUTE_STORE_NAME} from 'app/api/queries';
import {RouteStoreDocument} from 'app/api/queries/RouteStore.generated';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type useDatatableProps<TData = any, TVariables = OperationVariables> = {
  useQuery: (
    baseOptions?: QueryHookOptions<TData, TVariables> | undefined,
  ) => AQueryResult<TData, TVariables>;
  /**
   * @TODO ADD MISSING PROP TYPE
   */
};

type useDatatableResults = [
  boolean,
  QueryResult | undefined,
  (action: string, tableState: MUIDataTableState) => void,
];

export default function useDatatable<TData, TVariables>(
  props: useDatatableProps<TData, TVariables>,
): useDatatableResults {
  const client = useApolloClient();
  const STORE_NAME = props.modelName + 'Query';
  const FILTER_NAME = props.modelName + 'Filter';

  const {loading, data, refetch} = props.useQuery({
    variables: {
      [FILTER_NAME]: {},
    } as never,
    // notifyOnNetworkStatusChange: true,
    partialRefetch: false,
    returnPartialData: false,
    errorPolicy: 'all',
  });

  const tableRetData = (data as never)?.[STORE_NAME] as QueryResult;

  const onTableChange = (
    action: string,
    tableState: MUIDataTableState,
  ): void => {
    const variables = {
      [FILTER_NAME]: {
        where: {
          and: R.reduce(
            (accFields, idx) => {
              const column = tableState.columns[idx];
              if (tableState.filterList[idx].length === 1) {
                accFields = R.append(
                  {[column.name]: {like: tableState.filterList[idx][0] + '%'}},
                  accFields,
                );
              }
              if (tableState.filterList[idx].length > 1) {
                accFields = R.append(
                  {
                    [column.name]: {inq: tableState.filterList[idx]},
                  },
                  accFields,
                );
              }
              return accFields;
            },
            [] as object[],
            R.range(0, tableState.columns.length),
          ),
        },
        limit: tableState.rowsPerPage,
        skip: tableState.page * tableState.rowsPerPage,
        fields: R.reduce(
          (accFields, column) => {
            if (column.display === 'true') {
              return R.assoc(column.name, true, accFields);
            }
            return accFields;
          },
          {id: true} as object,
          tableState.columns,
        ),
        order:
          tableState.sortOrder.name &&
          (tableState.sortOrder.direction as 'none') !== 'none'
            ? [tableState.sortOrder.name + ' ' + tableState.sortOrder.direction]
            : [],
      },
    };
    switch (action) {
      case 'sort':
      case 'changePage':
      case 'changeRowsPerPage':
      case 'viewColumnsChange':
      case 'filterChange':
      case 'resetFilters':
        if (!R.isNil(refetch)) {
          refetch(variables as never);
        }
        client.writeQuery({
          query: RouteStoreDocument,
          data: R.assoc(ROUTE_STORE_NAME, {props: {queryLoading: true}}, {}),
        });
        break;
      default:
        client.writeQuery({
          query: RouteStoreDocument,
          data: R.assoc(ROUTE_STORE_NAME, {props: {queryLoading: false}}, {}),
        });
    }
  };

  return [loading, tableRetData, onTableChange];
}
