import React, { useMemo } from "react";
// we need to import three things
// 1️⃣ useTable hook from react table
// 2 API data /json data
// 3 coloumns which we made in second step
import { usePagination, useTable } from "react-table";

import MOCK_DATA from "./MOCK_DATA.json";
import { Column } from "./Column";
const PaginationTable = () => {
  const columns = useMemo(() => Column, []);

  const data = useMemo(() => MOCK_DATA, []);

  // hook is simply function

  const TableInstance = useTable(
    {
      columns,
      data,
    },
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,

    page,
    nextPage,
    previousPage,
    // pagecount
    pageOptions,
    canNextPage,
    canPreviousPage,
    state,
    gotoPage,
    pageCount,
    prepareRow,
  } = TableInstance;

  console.log("table instance ", TableInstance);

  const { pageIndex } = state;

  // ⚠️all the above function that ustable contain,that pass from react table
  // getTableProps->

  return (
    <div>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
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
      </table>
      <div>
        <span>
          page
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>
        </span>

        <span></span>

        <button onClick={() => gotoPage(0)}>{"<<"}</button>
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          Prev
        </button>
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          Next
        </button>
        <button onClick={() => gotoPage(pageCount - 1)}>{">>"}</button>
      </div>
    </div>
  );
};

export default PaginationTable;
