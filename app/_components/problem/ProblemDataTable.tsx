'use client';

import { useEffect, useState } from 'react';
import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
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

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ProblemListQueryString } from '@/app/_types/problem';

interface ProblemDataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data?: TData[];
  page: number;
  setPage: (value: number) => void;
  pageInfo?: ProblemListQueryString;
}

export function ProblemDataTable<TData, TValue>({
  columns,
  data = [],
  page,
  setPage,
  pageInfo = { totalElements: 0, totalPages: 0, currentPage: 0, size: 0 },
}: ProblemDataTableProps<TData, TValue>) {
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnSizing, setColumnSizing] = useState({});

  const table = useReactTable({
    data,
    columns,
    state: {
      columnFilters,
      columnSizing,
      pagination: {
        pageIndex: page,
        pageSize: pageInfo.size,
      },
    },
    manualPagination: true,
    pageCount: pageInfo.totalPages,
    onColumnFiltersChange: setColumnFilters,
    onColumnSizingChange: setColumnSizing,
    getFilteredRowModel: getFilteredRowModel(),
    getCoreRowModel: getCoreRowModel(),
  });

  useEffect(() => {
    const { pageIndex } = table.getState().pagination;
    if (pageIndex !== page) {
      setPage(pageIndex);
    }
  }, [table.getState().pagination.pageIndex, page, setPage]);

  return (
    <div>
      <div>
        <Table>
          <TableHeader className="border border-bolder">
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
      <div className="my-10 flex items-center justify-center gap-6">
        <button className="cursor-pointer" onClick={() => setPage(page - 1)} disabled={page === 0}>
          <ChevronLeft />
        </button>
        {Array.from({ length: pageInfo.totalPages }, (_, i) => i + 1).map((pageIndex) => {
          return (
            <button
              key={pageIndex}
              className={`text-md ${
                pageIndex - 1 === page ? 'drop-shadow-[0_0_5px_rgba(255,255,255,0.6)]' : ''
              }`}
              onClick={() => setPage(pageIndex - 1)}
            >
              {pageIndex}
            </button>
          );
        })}
        <button
          className="cursor-pointer"
          onClick={() => setPage(page + 1)}
          disabled={page === pageInfo.totalPages - 1}
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}
