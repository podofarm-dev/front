'use client';

import { ColumnDef } from '@tanstack/react-table';

import Check from '@/app/_svg/check.svg';

export type Problem = {
  id: string;
  number: number;
  status: boolean;
  title: string;
  difficulty: string;
  solved: string[];
};

export const columns: ColumnDef<Problem>[] = [
  {
    accessorKey: 'status',
    header: () => <div className="text-center">상태</div>,
    cell: ({ row }) => {
      const status = row.getValue('status') as boolean;

      // 일단 임시로 아이콘 설정
      return <div className="flex justify-center">{status ? <Check /> : '❌'}</div>;
    },
    meta: {
      filterVariant: 'select',
    },
    size: 80,
  },
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
    accessorKey: 'difficulty',
    header: () => <div className="text-center">난이도</div>,
    cell: ({ row }) => {
      const difficulty = row.getValue('difficulty') as string;
      return <div className="text-center">{difficulty}</div>;
    },
    size: 100,
  },
  {
    accessorKey: 'solved',
    header: () => <div className="text-center">푼 사람</div>,
    cell: ({ row }) => {
      const solved = row.getValue('solved') as string[];
      return <div className="text-center">{solved.join(', ')}</div>;
    },
    size: 150,
  },
];
