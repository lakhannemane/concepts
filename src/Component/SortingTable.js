import React, { useMemo } from "react";
// we need to import three things
// 1️⃣ useTable hook from react table
// 2 API data /json data
// 3 coloumns which we made in second step
import { useTable, useSortBy } from "react-table";

import MOCK_DATA from "./MOCK_DATA.json";
import { Column, Group_column } from "./Column";
const SortingTable = () => {
  const columns = useMemo(() => Column, []);

  const data = useMemo(() => MOCK_DATA, []);

  // hook is simply function

  const TableInstance = useTable(
    {
      columns,
      data,
    },
    useSortBy
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    footerGroups,
    prepareRow,
  } = TableInstance;

  console.log("table instance ", TableInstance);

  // ⚠️all the above function that ustable contain,that pass from react table
  // getTableProps->

  return (
    <div>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                //🗒️  hew we add inside getHeaderProps pass item.getSortByToggle
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}{" "}
                  <span>
                    {column.isSorted
                      ? column.isSoortedDesc
                        ? "🔽"
                        : "🔼"
                      : ""}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          {footerGroups.map((footerGroup) => (
            <tr {...footerGroup.getFooterGroupProps()}>
              {footerGroup.headers.map((column) => (
                <td {...column.getFooterProps()}>{column.render("Footer")}</td>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
    </div>
  );
};

export default SortingTable;
