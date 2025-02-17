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
import SolvedButton from '@/app/_components/problem/SolvedButton';
import { SOLVED_STATUS } from '@/app/_constants/status';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ProblemDataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function ProblemDataTable<TData, TValue>({
  columns,
  data,
}: ProblemDataTableProps<TData, TValue>) {
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnSizing, setColumnSizing] = useState({});
  const [titleFilter, setTitleFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');

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

  const handleStatusFilterChange = (value: string) => {
    setStatusFilter(value);
    setColumnFilters((prev) => [
      ...prev.filter((filter) => filter.id !== 'status'),
      ...(value === SOLVED_STATUS.COMPLETE
        ? [{ id: 'status', value: true }]
        : value === SOLVED_STATUS.INCOMPLETE
          ? [{ id: 'status', value: false }]
          : []),
    ]);
  };

  return (
    <div>
      <div className="mb-6 flex flex-row items-center justify-between gap-6">
        <div className="flex flex-row items-center gap-6">
          <span className="text-xl font-semibold">{data.length}문제</span>
          <SolvedButton onChange={handleStatusFilterChange} value={statusFilter} />
        </div>
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
      <div className="my-10 flex items-center justify-center gap-6">
        <button
          className="cursor-pointer"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          <ChevronLeft />
        </button>
        {Array.from({ length: table.getPageCount() }, (_, i) => i + 1).map((page) => {
          const { pageIndex } = table.getState().pagination;
          const isPageInRange = page >= pageIndex - 3 && page <= pageIndex + 6;
          return (
            <button
              key={page}
              className={`text-md ${
                pageIndex + 1 === page ? 'drop-shadow-[0_0_5px_rgba(255,255,255,0.6)]' : ''
              } ${isPageInRange ? '' : 'hidden'}`}
              onClick={() => table.setPageIndex(page - 1)}
            >
              {page}
            </button>
          );
        })}
        <button
          className="cursor-pointer"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}
