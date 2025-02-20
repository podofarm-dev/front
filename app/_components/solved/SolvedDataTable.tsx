'use client';

import { AxiosError } from 'axios';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import {
  FetchNextPageOptions,
  InfiniteData,
  InfiniteQueryObserverResult,
} from '@tanstack/react-query';
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
import { ProblemListQueryString } from '@/app/_types/problem';
import { SolvedListData } from '@/app/_types/solved';
import Loader from '@/app/_components/common/Loader';
import { Ellipsis } from 'lucide-react';

interface SolvedDataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data?: TData[];
  pageInfo?: ProblemListQueryString;
  isFetchingNextPage: boolean;
  hasNextPage: boolean;
  fetchNextPage: (
    options?: FetchNextPageOptions | undefined,
  ) => Promise<
    InfiniteQueryObserverResult<InfiniteData<SolvedListData, unknown>, AxiosError<unknown, any>>
  >;
}

export function SolvedDataTable<TData, TValue>({
  columns,
  data = [],
  pageInfo = { totalElements: 0, totalPages: 0, currentPage: 0, size: 0 },
  isFetchingNextPage,
  hasNextPage,
  fetchNextPage,
}: SolvedDataTableProps<TData, TValue>) {
  const { ref, inView } = useInView();
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnSizing, setColumnSizing] = useState({});

  const table = useReactTable({
    data,
    columns,
    state: {
      columnFilters,
      columnSizing,
      pagination: {
        pageIndex: 0,
        pageSize: pageInfo.size,
      },
    },
    manualPagination: true,
    pageCount: pageInfo.totalPages,
    onColumnFiltersChange: setColumnFilters,
    onColumnSizingChange: setColumnSizing,
    getFilteredRowModel: getFilteredRowModel(),
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

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
      <div className="flex flex-row justify-center" ref={ref}>
        {isFetchingNextPage ? <Loader /> : hasNextPage ? <Ellipsis /> : <div />}
      </div>
    </div>
  );
}
