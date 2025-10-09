import * as React from "react";
import {
  type ColumnDef,
  type ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  type SortingState,
  useReactTable,
  type VisibilityState,
} from "@tanstack/react-table";
import { ArrowUpDown, ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { Data } from "@/utils/types";
import { useSearchStore } from "@/store/search";

interface DataTableDemoProps {
  data: Data[];
}

export function DataTableDemo({ data }: DataTableDemoProps) {
  const setSearchFromQuery = useSearchStore((s) => s.setSearchFromQuery);

  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  // ✅ columns depend on setSearchFromQuery → keep them inside and memoized
  const columns = React.useMemo<ColumnDef<Data>[]>(() => [
    {
      id: "surface",
      accessorFn: (row) => row.word.surface,
      header: "surface",
      enableSorting: false,
      cell: ({ getValue }) => (
        <button
          type="button"
          className="capitalize underline-offset-2 hover:underline"
          onClick={() => setSearchFromQuery(String(getValue()))}
        >
          {String(getValue())}
        </button>
      ),
    },
    {
      id: "pos",
      accessorFn: (row) => row.word.pos,
      header: ({ column }) => (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="gap-1"
        >
          pos
          <ArrowUpDown className="h-4 w-4" />
        </Button>
      ),
      cell: ({ getValue }) => <div className="lowercase">{String(getValue())}</div>,
    },
  ], [setSearchFromQuery]);

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  const uniquePosValues = React.useMemo(() => {
    const all = new Set<string>();
    data.forEach((d) => all.add(d.word.pos));
    return Array.from(all).sort();
  }, [data]);

  const posColumn = table.getColumn("pos");

  return (
    <div className="w-full px-4">
      <div className="flex items-center gap-2 py-4">
        <Input
          placeholder="Filter part of speech..."
          value={(posColumn?.getFilterValue() as string) ?? ""}
          onChange={(e) => posColumn?.setFilterValue(e.target.value)}
          className="max-w-sm"
        />

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Part of speech <ChevronDown className="ml-1 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="max-h-64 overflow-auto">
            {/* Clear option */}
            <DropdownMenuCheckboxItem
              checked={!posColumn?.getFilterValue()}
              onCheckedChange={() => posColumn?.setFilterValue("")}
            >
              All
            </DropdownMenuCheckboxItem>

            {uniquePosValues.map((pos) => (
              <DropdownMenuCheckboxItem
                key={pos}
                className="capitalize"
                checked={posColumn?.getFilterValue() === pos}
                // Behave like a radio: pick this POS, or uncheck to clear
                onCheckedChange={(checked) =>
                  posColumn?.setFilterValue(checked ? pos : "")
                }
              >
                {pos}
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="overflow-hidden rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(header.column.columnDef.header, header.getContext())}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
