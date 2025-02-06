'use client';

import { ColumnDef } from '@tanstack/react-table';

export type Solved = {
  id: string;
  number: number;
  title: string;
  category: string;
  difficulty: string;
  time: string;
  date: string;
};

export const columns: ColumnDef<Solved>[] = [
  {
    accessorKey: 'number',
    header: () => <div className="text-center">번호</div>,
    cell: ({ row }) => {
      const number = row.getValue('number') as number;
      return <div className="text-center text-secondary-foreground">No.{number}</div>;
    },
    size: 100,
  },
  {
    accessorKey: 'title',
    header: () => <div className="text-center">제목</div>,
    cell: ({ row }) => {
      const title = row.getValue('title') as string;
      return <div className="text-center">{title}</div>;
    },
    size: 300,
  },
  {
    accessorKey: 'category',
    header: () => <div className="text-center">유형</div>,
    cell: ({ row }) => {
      const category = row.getValue('category') as string;
      return <div className="text-center">{category}</div>;
    },
    size: 100,
  },
  {
    accessorKey: 'difficulty',
    header: () => <div className="text-center">난이도</div>,
    cell: ({ row }) => {
      const difficulty = row.getValue('difficulty') as string;
      return <div className="text-center">{difficulty}</div>;
    },
    size: 100,
  },
  {
    accessorKey: 'time',
    header: () => <div className="text-center">소요 시간</div>,
    cell: ({ row }) => {
      const time = row.getValue('time') as string;
      return <div className="text-center">{time}</div>;
    },
    size: 100,
  },
  {
    accessorKey: 'date',
    header: () => <div className="text-center">푼 날짜</div>,
    cell: ({ row }) => {
      const date = row.getValue('date') as string;
      return <div className="text-center">{date}</div>;
    },
    size: 100,
  },
];
