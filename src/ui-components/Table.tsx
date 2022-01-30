import classNames from "classnames";
import React from "react";
import { useTable } from "react-table";
import { IProperties } from "../components/types";
import css from "./Table.module.scss";

interface ITableProps {
  data: IProperties[];
  selectedTrip?: number;
  setSelectedTrip?(val: number): void;
  columns:any;
}

export function Table(props:ITableProps) {
  const { columns, data, selectedTrip, setSelectedTrip } = props;
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data
    });

  return (
    <table {...getTableProps()} className={css.root}>
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
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr
              {...row.getRowProps()}
              onClick={() => {
                setSelectedTrip && setSelectedTrip((row.original as IProperties).ID);
              }}
              className={classNames(css.cursor, {
                [css.highlighted]:
                  (row.original as IProperties).ID === selectedTrip
              })}
            >
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
