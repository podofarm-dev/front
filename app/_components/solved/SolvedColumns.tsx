'use client';

import { ColumnDef } from '@tanstack/react-table';

import { SolvedData } from '@/app/_types/solved';
import convertSolvedDate from '@/app/_utils/convertSolvedDate';
import Link from 'next/link';
import { PATH } from '@/app/_constants/path';

export const getColumns = (studyId: string, memberId: string): ColumnDef<SolvedData>[] => [
  {
    accessorKey: 'problemNo',
    header: () => <div className="my-6 text-center text-secondary-foreground">번호</div>,
    cell: ({ row }) => {
      const problemNo = row.getValue('problemNo') as number;
      return <div className="text-center text-secondary-foreground">{problemNo}</div>;
    },
    size: 100,
  },
  {
    accessorKey: 'problemTitle',
    header: () => <div className="my-6 text-center text-secondary-foreground">제목</div>,
    cell: ({ row }) => {
      const problemTitle = row.getValue('problemTitle') as string;
      const problemId = row.original.problemId;

      return (
        <div className="text-left">
          <Link
            href={PATH.STUDY_SOLVED_DETAIL(studyId, problemId, memberId)}
            className="hover:underline"
          >
            {problemTitle}
          </Link>
        </div>
      );
    },
    size: 300,
  },
  {
    accessorKey: 'problemType',
    header: () => <div className="my-6 text-center text-secondary-foreground">유형</div>,
    cell: ({ row }) => {
      const problemType = row.getValue('problemType') as string;
      return <div className="text-center">{problemType}</div>;
    },
    size: 100,
  },
  {
    accessorKey: 'problemLevel',
    header: () => <div className="my-6 text-center text-secondary-foreground">난이도</div>,
    cell: ({ row }) => {
      const problemLevel = row.getValue('problemLevel') as string;
      return <div className="text-center">{problemLevel}</div>;
    },
    size: 100,
  },
  {
    accessorKey: 'codeTime',
    header: () => <div className="my-6 text-center text-secondary-foreground">소요 시간</div>,
    cell: ({ row }) => {
      const codeTime = row.getValue('codeTime') as string;
      return <div className="text-center text-secondary-foreground">{codeTime}</div>;
    },
    size: 100,
  },
  {
    accessorKey: 'codeSolvedDate',
    header: () => <div className="my-6 text-center text-secondary-foreground">푼 날짜</div>,
    cell: ({ row }) => {
      const codeSolvedDate = row.getValue('codeSolvedDate') as string;
      return (
        <div className="text-center text-secondary-foreground">
          {convertSolvedDate(codeSolvedDate)}
        </div>
      );
    },
    size: 100,
  },
];
