import React from 'react';
import {MUIDataTableToolbar, TableToolbar} from 'mui-datatables';
import LinearProgress from '@material-ui/core/LinearProgress';
import {useRouteStoreQuery} from 'app/api/queries/RouteStore.generated';

export default function getTableToolbarWithProgress(
  loading: boolean,
): (props: MUIDataTableToolbar) => React.ReactElement {
  if (process.env.NODE_ENV === 'test') {
    // eslint-disable-next-line react/display-name
    return (): React.ReactElement => <div />;
  }
  return function TableToolbarWithProgress(
    props: MUIDataTableToolbar,
  ): React.ReactElement {
    const {data: routeData} = useRouteStoreQuery();
    return (
      <div>
        <TableToolbar {...props} />
        {loading || routeData?.routeStore?.props?.queryLoading ? (
          <LinearProgress />
        ) : (
          <div style={{height: 4}} />
        )}
      </div>
    );
  };
}
