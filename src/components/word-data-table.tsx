import * as React from "react";
import {
  type ColumnDef,
  type ColumnFiltersState,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
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
import type { Data } from "@/utils/types";
import { useSearchStore } from "@/store/search";
import { DataTable } from "./data-table";

interface WordDataTableProps {
  data: Data[];
}

export function WordDataTable({ data }: WordDataTableProps) {
  const setSearchFromQuery = useSearchStore((s) => s.setSearchFromQuery);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);

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
      accessorFn: (row) => row.word.pos_trans,
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
      cell: ({ getValue }) => <div className="uppercase">{String(getValue())}</div>,
    },
  ], [setSearchFromQuery]);

  const table = useReactTable({
    data,
    columns,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      columnFilters,
    },
  });

  const uniquePosValues = React.useMemo(() => {
    const all = new Set<string>();
    data.forEach((d) => all.add(d.word.pos_trans));
    return Array.from(all).sort();
  }, [data]);

  const posColumn = table.getColumn("pos");

  return (
    <DataTable columns={columns} data={data} columnFilters={columnFilters} onColumnFiltersChange={setColumnFilters}>
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
              onCheckedChange={(checked) =>
                posColumn?.setFilterValue(checked ? pos : "")
              }
            >
              {pos}
            </DropdownMenuCheckboxItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </DataTable>
  );
}