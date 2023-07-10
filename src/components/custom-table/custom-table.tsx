import React from 'react';
import { getCEClassName } from 'react-content-elements';

type TableTemplateProps = any;

export const CustomTable = ({
  className,
  headerCellModifiers,
  cellHeaders,
  rowsData,
  ...otherProps
}: TableTemplateProps) => {
  const baseClassName = getCEClassName('custom-table');
  const trHeaderClassName = getCEClassName('custom-table-header');
  const thClassName = getCEClassName('custom-table-cell', headerCellModifiers);

  const trClassName = getCEClassName('custom-table-row');
  const tdClassName = getCEClassName('custom-table-cell');

  const TableRow = ({ rowData }: any) => (
    <tr className={trClassName}>
      {rowData.map((rowValue: string, rowID: string) => (
        <td key={rowID} className={tdClassName}>
          {rowValue}
        </td>
      ))}
    </tr>
  );

  return (
    <table className={[className, baseClassName].filter(Boolean).join(' ')}>
      <thead>
        <tr className={trHeaderClassName}>
          {cellHeaders.map((header: string, headID: string) => (
            <th key={headID} className={thClassName}>
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rowsData.map((rowData: string, rowID: string) => (
          <TableRow rowData={rowData} key={rowID} />
        ))}
      </tbody>
    </table>
  );
};
