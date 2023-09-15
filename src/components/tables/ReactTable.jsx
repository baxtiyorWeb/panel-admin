import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getPaginationRowModel,
} from "@tanstack/react-table";
import { useMemo } from "react";
import { enqueryList } from "../progress/data";

const Tables = () => {
  /**@type  import(@tanstack.react-table).ColumnDef<any>*/
  const data = useMemo(() => enqueryList, []);

  const columns = [
    {
      header: "ID",
      accessorKey: "id",
    },
    {
      header: "names",
      accessorKey: "names",
    },
    {
      header: "Email",
      accessorKey: "Email",
    },
    {
      header: "Mobile",
      accessorKey: "Mobile",
    },
    {
      header: "CNIC",
      accessorKey: "CNIC",
    },
    {
      header: "PrefTime",
      accessorKey: "PrefTime",
    },
    {
      header: "EmailStatus",
      accessorKey: "EmailStatus",
    },
    {
      header: "FourCourse",
      accessorKey: "FourCourse",
    },
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });
  return (
    <>
      <table >
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getCoreRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={() => table.setPageIndex(0)}>{"<<"}</button>
      {"_________________"}
      <button onClick={() => table.setPageIndex(table.getPageCount() - 1)}>
        {">>"}
      </button>
    </>
  );
};
export default Tables;
