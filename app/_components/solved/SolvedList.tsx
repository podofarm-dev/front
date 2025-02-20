'use client';

import { Suspense, useState } from 'react';

import { getColumns } from '@/app/_components/solved/SolvedColumns';
import { SolvedDataTable } from '@/app/_components/solved/SolvedDataTable';
import { useSolvedListQuery } from '@/app/_hooks/api/useSolvedListQuery';
import DebouncedInput from '@/app/_components/common/DebouncedInput';
import Loader from '@/app/_components/common/Loader';

interface SolvedListProps {
  memberId: string;
  studyId: string;
}

const SolvedList = ({ memberId, studyId }: SolvedListProps) => {
  const [title, setTitle] = useState('');
  const { allSolvedListData, pageInfo, isFetchingNextPage, hasNextPage, fetchNextPage } =
    useSolvedListQuery({ memberId, size: 20, title });

  const handleTitleFilterChange = (newTitle: string) => {
    setTitle(newTitle);
  };

  return (
    <div className="container mx-auto py-10">
      <div className="mb-6 flex flex-row items-center justify-between gap-6">
        <span className="text-xl font-semibold">{pageInfo?.totalElements}문제</span>
        <DebouncedInput
          onChange={handleTitleFilterChange}
          placeholder="문제 제목을 입력해주세요"
          type="text"
          value={title}
        />
      </div>
      <Suspense fallback={<Loader />}>
        <SolvedDataTable
          columns={getColumns(studyId, memberId)}
          data={allSolvedListData}
          pageInfo={pageInfo}
          isFetchingNextPage={isFetchingNextPage}
          hasNextPage={hasNextPage}
          fetchNextPage={fetchNextPage}
        />
      </Suspense>
    </div>
  );
};

export default SolvedList;
