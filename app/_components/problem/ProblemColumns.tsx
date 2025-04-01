'use client';

import Link from 'next/link';
import { ColumnDef } from '@tanstack/react-table';

import Check from '@/app/_svg/check.svg';
import { ProblemListData, ProblemListImgData } from '@/app/_types/problem';
import { X } from 'lucide-react';
import ProfileIcon from '@/app/_components/common/ProfileIcon';

export const columns: ColumnDef<ProblemListData>[] = [
  {
    accessorKey: 'status',
    header: () => <div className="my-6 text-center text-secondary-foreground">상태</div>,
    cell: ({ row }) => {
      const status = row.getValue('status') as boolean;

      if (status === null) return <div className="flex justify-center" />;

      return (
        <div className="flex justify-center">
          {status ? <Check /> : <X className="text-red-600" />}
        </div>
      );
    },
    meta: {
      filterVariant: 'select',
    },
    size: 10,
    minSize: 50,
    maxSize: 100,
  },
  {
    accessorKey: 'problemNo',
    header: () => <div className="my-6 text-center text-secondary-foreground">번호</div>,
    cell: ({ row }) => {
      const problemNo = row.getValue('problemNo') as number;
      return <div className="text-center text-secondary-foreground">{problemNo}</div>;
    },
    size: 10,
    minSize: 50,
    maxSize: 100,
  },
  {
    accessorKey: 'problemTitle',
    header: () => <div className="my-6 text-center text-secondary-foreground">제목</div>,
    cell: ({ row }) => {
      const problemTitle = row.getValue('problemTitle') as string;
      const problemLink = row.original.problemLink as string;

      return (
        <Link
          href={problemLink}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          {problemTitle}
        </Link>
      );
    },
    size: 50,
    minSize: 200,
    maxSize: 500,
  },
  {
    accessorKey: 'problemLevel',
    header: () => <div className="my-6 text-center text-secondary-foreground">난이도</div>,
    cell: ({ row }) => {
      const problemLevel = row.getValue('problemLevel') as string;
      return <div className="text-center">Lv.{problemLevel}</div>;
    },
    size: 10,
    minSize: 50,
    maxSize: 100,
  },
  {
    accessorKey: 'img',
    header: () => <div className="my-6 text-center text-secondary-foreground">푼 사람</div>,
    cell: ({ row }) => {
      const img = row.getValue('img') as ProblemListImgData[];

      return (
        <div className="flex flex-row gap-2">
          {img.map((item, index) => (
            <ProfileIcon
              key={item.name + String(index)}
              name={item.name}
              imgUrl={item.imgUrl}
              className="h-7 w-7"
            />
          ))}
        </div>
      );
    },
    size: 20,
    minSize: 100,
    maxSize: 200,
  },
];
