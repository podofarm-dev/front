'use client';

import { useState } from 'react';

import { Badge } from '@/components/ui/badge';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';
import SolvedDescription from '@/app/_components/solved/SolvedDescription';
import SolvedCode from '@/app/_components/solved/SolvedCode';
import { Pencil } from 'lucide-react';
import { useUpdateCodeMutation } from '@/app/_hooks/api/useUpdateCodeMutation';

interface SolvedDetailMainProps {
  problemId: string;
  memberId: string;
  title: string;
  name?: string;
  description: string;
  codeTime: string;
  codeSolvedDate: string;
  codeSource: string;
  problemType: string;
  codePerformance: string;
  codeStatus: boolean;
  isUser: boolean;
}

const SolvedDetailMain = ({
  problemId,
  memberId,
  title,
  name,
  description,
  codeTime,
  codeSolvedDate,
  codeSource,
  problemType,
  codePerformance,
  codeStatus,
  isUser,
}: SolvedDetailMainProps) => {
  const [solvedCode, setSolvedCode] = useState(codeSource);
  const updateCodeMutation = useUpdateCodeMutation();

  const handleCode = () => {
    if (solvedCode !== codeSource) {
      updateCodeMutation.mutate({ codeData: { memberId, problemId, code: solvedCode } });
    }
  };

  return (
    <>
      <div className="flex flex-row justify-between">
        <div className="flex flex-row gap-4">
          <div className="text-2xl font-semibold underline">{title}</div>
          {name && <Badge className="rounded-2xl bg-accent text-sm font-normal">{name}</Badge>}
        </div>
        <div className="flex flex-row items-center gap-4">
          <div className="text-lg">걸린시간 : {codeTime}</div>
          {/* <Pencil className="cursor-pointer" /> */}
        </div>
      </div>
      <div className="grid grid-cols-4 gap-16 rounded-lg border border-bolder px-4 py-8">
        <div className="flex flex-col items-center">
          <div>성능요약</div>
          <div>{codePerformance}</div>
        </div>
        <div className="flex flex-col items-center">
          <div>구분</div>
          <div>{problemType}</div>
        </div>
        <div className="flex flex-col items-center">
          <div>채점결과</div>
          <div>{codeStatus}</div>
        </div>
        <div className="flex flex-col items-center">
          <div>제출 일자</div>
          <div>{codeSolvedDate}</div>
        </div>
      </div>
      <div className="relative h-[668px] rounded-lg border border-bolder bg-tertiary p-6">
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel defaultSize={35}>
            <div>문제</div>
            <hr className="my-6 border-bolder" />
            <div className="custom-scrollbar h-full max-h-[540px] overflow-y-auto">
              <SolvedDescription description={description} />
            </div>
          </ResizablePanel>
          <ResizableHandle className="mx-6 bg-bolder" withHandle />
          <ResizablePanel defaultSize={65}>
            <div className="flex justify-between">
              <div>Solution.java</div>
              {isUser && <Pencil className="cursor-pointer" onClick={handleCode} />}
            </div>
            <hr className="my-6 border-bolder" />
            <div className="custom-scrollbar h-full max-h-[540px] overflow-y-auto">
              <SolvedCode solvedCode={solvedCode} setSolvedCode={setSolvedCode} />
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </>
  );
};

export default SolvedDetailMain;
