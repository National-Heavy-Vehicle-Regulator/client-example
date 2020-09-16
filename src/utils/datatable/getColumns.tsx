import R from 'ramda';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import {JSONSchema} from '@regulatory-platform/common-utils';
import {
  Where,
  Condition,
  AnyObject,
  AndClause,
  OrClause,
  KeyOf,
  PredicateComparison,
} from '@regulatory-platform/common-utils/dist/query/types';
import {
  MUIDataTableColumnDef,
  MUIDataTableFilterOptions,
  MUIDataTableColumnOptions,
} from 'mui-datatables';
import {QueryFilter} from './types';

const DEFAULT_EXCLUDED_COLUMNS = [
  'id',
  'created',
  'createdBy',
  'modified',
  'modifiedBy',
  'modifiedOffline',
  'ip',
  'operationsAccountId',
  'providerAccountId',
  'customerAccountId',
  'partnerAccountId',
  'userModelId',
  'contactUserId',
  '',
];

function parseFilterForColumnDisplay(
  columnName: string,
  filter: QueryFilter,
): boolean {
  return filter.fields?.[columnName] === true;
}

function parseConditionsForColumnFilterOptions<MT extends object>(
  columnName: KeyOf<MT>,
  conditions: Condition<MT>[],
): string[] {
  const foundCondition = R.find(
    condition => !R.isNil(condition[columnName]),
    conditions,
  ) as {[key: string]: PredicateComparison<MT[KeyOf<MT>]>};
  if (R.isNil(foundCondition)) {
    return [];
  }
  if (!R.isNil(foundCondition[columnName].inq)) {
    return (foundCondition[columnName].inq as unknown) as string[];
  }
  if (!R.isNil(foundCondition[columnName].like)) {
    return [
      ((foundCondition[columnName].like as unknown) as string).replace('%', ''),
    ];
  }
  return [];
}

function parseFilterForColumnFilterOptions<MT extends object = AnyObject>(
  columnName: KeyOf<MT>,
  filter: QueryFilter,
): string[] {
  const where = filter.where as Where<MT>;
  const andClause = (where as AndClause<MT>)?.and as Condition<MT>[];
  const orClause = (where as OrClause<MT>)?.or as Condition<MT>[];
  if (!R.isNil(andClause) && andClause.length > 0) {
    return parseConditionsForColumnFilterOptions<MT>(columnName, andClause);
  }
  if (!R.isNil(orClause) && orClause.length > 0) {
    return parseConditionsForColumnFilterOptions<MT>(columnName, orClause);
  }
  return [];
}

export default function getColumns<TM>(
  schema: JSONSchema,
  data: object[],
  filter?: QueryFilter,
): MUIDataTableColumnDef[] {
  //only look at 1st level properties
  const schemaProperties = schema.properties as {
    [key: string]: JSONSchema;
  };
  const dataColumnList = R.keys(data.length > 0 ? data[0] : {});
  const fullColumnList = R.keys(schemaProperties);
  const columnList = R.without(DEFAULT_EXCLUDED_COLUMNS, fullColumnList);
  //filter out columns
  return R.map((columnName): MUIDataTableColumnDef => {
    const columnSchema = schemaProperties[columnName];
    let display = R.contains(columnName, dataColumnList);
    if (!R.isNil(filter) && !R.isNil(filter.fields)) {
      display = parseFilterForColumnDisplay(columnName, filter);
    }
    let filterList = [] as string[];
    if (!R.isNil(filter) && !R.isNil(filter.where)) {
      filterList = parseFilterForColumnFilterOptions(columnName, filter);
    }
    let filterType = 'textField' as
      | 'dropdown'
      | 'checkbox'
      | 'multiselect'
      | 'textField'
      | 'custom';
    let filterOptions: MUIDataTableFilterOptions = {};
    if (columnSchema.enum) {
      filterType = 'multiselect';
      filterOptions = {names: columnSchema.enum as string[]};
    }
    return {
      name: columnName,
      label: columnSchema.title,
      options: {
        display,
        filter: display,
        filterType,
        filterOptions,
        filterList,
        sortThirdClickReset: true,
        customBodyRenderLite: function noWrap(dataIndex): React.ReactNode {
          return (
            <Typography
              component={'div'}
              noWrap={true}
              style={{minWidth: 100, maxWidth: 300, lineHeight: 2}}
            >
              {(data[dataIndex] as {[key: string]: string})[columnName]}
            </Typography>
          );
        },
        customFilterListOptions: {
          render: (v): React.ReactNode => columnSchema.title + ': ' + v,
        },
      } as MUIDataTableColumnOptions,
    };
  }, columnList as string[]);
}
