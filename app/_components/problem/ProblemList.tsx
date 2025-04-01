'use client';

import { useState } from 'react';

import { columns } from '@/app/_components/problem/ProblemColumns';
import { ProblemDataTable } from '@/app/_components/problem/ProblemDataTable';
import { useProblemListQuery } from '@/app/_hooks/api/useProblemListQuery';
import DebouncedInput from '@/app/_components/common/DebouncedInput';
import SolvedButton from '@/app/_components/problem/SolvedButton';

interface ProblemListProps {
  studyId: string;
}

const ProblemList = ({ studyId }: ProblemListProps) => {
  const [page, setPage] = useState(0);
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState('');

  const { problemListData } = useProblemListQuery({
    studyId,
    page: page,
    size: 20,
    title: title,
    category: status,
  });

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  const handleTitleFilterChange = (newTitle: string) => {
    setTitle(newTitle);
    setPage(0);
  };

  const handleStatusFilterChange = (newStatus: string) => {
    setStatus(newStatus);
    setPage(0);
  };

  return (
    <div className="container mx-auto py-10">
      <div className="mb-6 flex flex-row items-center justify-between gap-6">
        <div className="flex flex-row items-center gap-6">
          <span className="text-xl font-semibold">
            {problemListData?.pageInfo?.totalElements || 0}문제
          </span>
          <SolvedButton onChange={handleStatusFilterChange} value={status} />
        </div>
        <DebouncedInput
          onChange={handleTitleFilterChange}
          placeholder="문제 제목을 입력해주세요"
          type="text"
          value={title}
          className="w-full max-w-lg"
        />
      </div>
      <ProblemDataTable
        columns={columns}
        data={problemListData?.problem}
        page={page}
        setPage={handlePageChange}
        pageInfo={problemListData?.pageInfo}
      />
    </div>
  );
};

export default ProblemList;
