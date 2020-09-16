import MUIDataTable, {MUIDataTableOptions} from 'mui-datatables';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import R from 'ramda';
import React from 'react';
import {recordSchema} from './api/jsonSchema/pbsContacts';
import {
  useGetPbsContactsQuery,
  GetPbsContactsQuery,
  GetPbsContactsQueryVariables,
} from './api/queries/UsefulContacts.generated';
import getColumns from 'utils/datatable/getColumns';
import useDatatable from 'utils/datatable/useDatatable';
import getTableToolbarWithProgress from 'utils/datatable/getTableToolbarWithProgress';

const ContactsTable: React.FC = () => {
  const [loading, tableRetData, onTableChange] = useDatatable<
    GetPbsContactsQuery,
    GetPbsContactsQueryVariables
  >({useQuery: useGetPbsContactsQuery, modelName: 'pbsContact'});
  const data = R.defaultTo([], tableRetData?.data) as object[];
  const count = tableRetData?.count;
  const filter = tableRetData?.filter;

  return (
    <MUIDataTable
      title={<Typography variant="h6">Jurisdictional Contacts</Typography>}
      columns={getColumns(recordSchema, data, filter)}
      data={data}
      options={
        {
          serverSide: true,
          confirmFilters: true,
          customFilterDialogFooter: function applyButton(
            _currentFilterList,
            applyNewFilters,
          ): React.ReactNode {
            return (
              <div style={{marginTop: '40px'}}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={(): void => {
                    if (applyNewFilters) applyNewFilters();
                  }}
                >
                  Apply Filters
                </Button>
              </div>
            );
          },
          count: count,
          onTableChange: onTableChange,
          fixedSelectColumn: false,
          print: false,
          elevation: 1,
          search: false,
          selectableRows: 'none',
          tableBodyHeight: '56vh',
          rowsPerPageOptions: [10, 20, 50, 100],
          rowsPerPage: filter ? filter.limit : 10,
        } as MUIDataTableOptions
      }
      components={{
        TableToolbar: getTableToolbarWithProgress(loading),
      }}
    />
  );
};

ContactsTable.displayName = 'Jurisdictional Contacts';

export default ContactsTable;
