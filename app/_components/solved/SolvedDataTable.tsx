'use client';

import { useState } from 'react';
import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
  getFilteredRowModel,
} from '@tanstack/react-table';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import DebouncedInput from '@/app/_components/common/DebouncedInput';

interface SolvedDataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function SolvedDataTable<TData, TValue>({
  columns,
  data,
}: SolvedDataTableProps<TData, TValue>) {
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnSizing, setColumnSizing] = useState({});
  const [titleFilter, setTitleFilter] = useState('');

  const table = useReactTable({
    data,
    columns,
    state: {
      columnFilters,
      columnSizing,
    },
    initialState: {
      pagination: {
        pageSize: 20,
      },
    },
    onColumnFiltersChange: setColumnFilters,
    onColumnSizingChange: setColumnSizing,
    getFilteredRowModel: getFilteredRowModel(),
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  const handleTitleFilterChange = (value: string) => {
    setTitleFilter(value);
    setColumnFilters((prev) => [
      ...prev.filter((filter) => filter.id !== 'title'),
      ...(value ? [{ id: 'title', value }] : []),
    ]);
  };

  return (
    <div>
      <div className="mb-6 flex flex-row items-center justify-between gap-6">
        <span className="text-xl font-semibold">{data.length}문제</span>
        <DebouncedInput
          onChange={handleTitleFilterChange}
          placeholder="문제 제목을 입력해주세요"
          type="text"
          value={titleFilter}
          className="w-full max-w-lg"
        />
      </div>
      <div>
        <Table>
          <TableHeader className="rounded bg-tertiary text-secondary-foreground">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} className="border-none hover:bg-transparent">
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead
                      key={header.id}
                      style={{
                        width: header.getSize(),
                        maxWidth: header.getSize(),
                      }}
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(header.column.columnDef.header, header.getContext())}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                  className="border-none hover:bg-transparent"
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell
                      key={cell.id}
                      style={{
                        width: cell.column.getSize(),
                        maxWidth: cell.column.getSize(),
                      }}
                      className="py-6"
                    >
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center text-secondary-foreground hover:bg-transparent"
                >
                  <span>
                    Sorry, We have no results.
                    <br />
                    Please try different keyword
                  </span>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-center gap-2">
        <button
          className="rounded border p-1"
          onClick={() => table.setPageIndex(0)}
          disabled={!table.getCanPreviousPage()}
        >
          {'<<'}
        </button>
        <button
          className="rounded border p-1"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          {'<'}
        </button>
        {Array.from({ length: table.getPageCount() }, (_, i) => i + 1).map((page) => {
          const { pageIndex } = table.getState().pagination;
          const isPageInRange = page >= pageIndex - 3 && page <= pageIndex + 6;
          return (
            <button
              key={page}
              className={`rounded border p-1 ${
                pageIndex + 1 === page ? 'border-none' : ''
              } ${isPageInRange ? '' : 'hidden'}`}
              onClick={() => table.setPageIndex(page - 1)}
            >
              {page}
            </button>
          );
        })}
        <button
          className="rounded border p-1"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          {'>'}
        </button>
        <button
          className="rounded border p-1"
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          disabled={!table.getCanNextPage()}
        >
          {'>>'}
        </button>
      </div>
    </div>
  );
}
