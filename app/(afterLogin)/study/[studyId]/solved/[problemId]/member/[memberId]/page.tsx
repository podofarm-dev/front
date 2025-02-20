import { Badge } from '@/components/ui/badge';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';
import SolvedDescription from '@/app/_components/solved/SolvedDescription';
import SolvedCode from '@/app/_components/solved/SolvedCode';
import CommentContent from '@/app/_components/comment/CommentContent';
import { Pencil } from 'lucide-react';

interface ProblemPageProps {
  params: {
    studyId: string;
    problemId: string;
    memberId: string;
  };
}

export default function ProblemPage({ params }: ProblemPageProps) {
  const { studyId, problemId, memberId } = params;

  const codeDetail =
    '# [level 1] 크기가 작은 부분문자열 - 147355 \n\n[문제 링크](https://programmers.co.kr/) \n\n### 성능 요약\n\n메모리: 74 MB, 시간: 0.12 ms\n\n### 구분\n\n코딩테스트 연습 > 연습문제\n\n### 채점결과\n\n정확성: 100.0<br/>합계: 100.0 / 100.0\n\n### 제출 일자\n\n2024-12-16 12:42:01\n\n### 문제 설명\n\n<p>숫자로 이루어진 문자열 <code>t</code>와 <code>p</code>가 주어질 때, <code>t</code>에서 <code>p</code>와 길이가 같은 부분문자열 중에서, 이 부분문자열이 나타내는 수가 <code>p</code>가 나타내는 수보다 작거나 같은 것이 나오는 횟수를 return하는 함수 solution을 완성하세요.</p>\n\n<p>예를 들어, <code>t</code>="3141592"이고 <code>p</code>="271" 인 경우, <code>t</code>의 길이가 3인 부분 문자열은 314, 141, 415, 159, 592입니다. 이 문자열이 나타내는 수 중 271보다 작거나 같은 수는 141, 159 2개 입니다.</p>\n\n<hr>\n\n<h5>제한사항</h5>\n\n<ul>\n<li>1 ≤ <code>p</code>의 길이 ≤ 18</li>\n<li><code>p</code>의 길이 ≤ <code>t</code>의 길이 ≤ 10,000</li>\n<li><code>t</code>와 <code>p</code>는 숫자로만 이루어진 문자열이며, 0으로 시작하지 않습니다.</li>\n</ul>\n\n<hr>\n\n<h5>입출력 예</h5>\n<table class="table">\n        <thead><tr>\n<th>t</th>\n<th>p</th>\n<th>result</th>\n</tr>\n</thead>\n        <tbody><tr>\n<td>"3141592"</td>\n<td>"271"</td>\n<td>2</td>\n</tr>\n<tr>\n<td>"500220839878"</td>\n<td>"7"</td>\n<td>8</td>\n</tr>\n<tr>\n<td>"10203"</td>\n<td>"15"</td>\n<td>3</td>\n</tr>\n</tbody>\n      </table>\n<hr>\n\n<h5>입출력 예 설명</h5>\n\n<p>입출력 예 #1<br>\n본문과 같습니다.</p>\n\n<p>입출력 예 #2<br>\n<code>p</code>의 길이가 1이므로 <code>t</code>의 부분문자열은 "5", "0", 0", "2", "2", "0", "8", "3", "9", "8", "7", "8"이며 이중 7보다 작거나 같은 숫자는 "5", "0", "0", "2", "2", "0", "3", "7" 이렇게 8개가 있습니다.</p>\n\n<p>입출력 예 #3<br>\n<code>p</code>의 길이가 2이므로 <code>t</code>의 부분문자열은 "10", "02", "20", "03"이며, 이중 15보다 작거나 같은 숫자는 "10", "02", "03" 이렇게 3개입니다. "02"와 "03"은 각각 2, 3에 해당한다는 점에 주의하세요</p>\n\n\n> 출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges';
  const code =
    'class Solution {\n    public long solution(int a, int b) {\n        int min = Math.min(a, b);\n        int max = Math.max(a, b);\n        long sum = 0;\n        for (int i = min; i <= max; i++) {\n            sum += i;\n        }\n        return sum;\n    }\n}';

  return (
    <div className="flex flex-col gap-8 py-8">
      <div className="flex flex-row justify-between">
        <div className="flex flex-row gap-4">
          <div className="text-2xl font-semibold underline">[Level 1] 1차 다트게임 - 17688</div>
          <Badge className="rounded-2xl bg-accent text-sm font-normal">홍길동</Badge>
        </div>
        <div className="flex flex-row items-center gap-4">
          <div className="text-lg">걸린시간 : 2H 30M</div>
          <Pencil className="cursor-pointer" />
        </div>
      </div>
      <div className="grid grid-cols-4 gap-16 rounded-lg border border-bolder px-4 py-8">
        <div className="flex flex-col items-center">
          <div>성능요약</div>
          <div>텍스트자리입니다</div>
        </div>
        <div className="flex flex-col items-center">
          <div>구분</div>
          <div>텍스트자리입니다</div>
        </div>
        <div className="flex flex-col items-center">
          <div>채점결과</div>
          <div>텍스트자리입니다</div>
        </div>
        <div className="flex flex-col items-center">
          <div>제출 일자</div>
          <div>텍스트자리입니다</div>
        </div>
      </div>
      <div className="relative h-[668px] rounded-lg border border-bolder bg-accent p-6">
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel defaultSize={35}>
            <div>문제</div>
            <hr className="my-6 border-bolder" />
            <div className="custom-scrollbar h-full max-h-[540px] overflow-y-auto">
              <SolvedDescription description={codeDetail} />
            </div>
          </ResizablePanel>
          <ResizableHandle className="mx-6" />
          <ResizablePanel defaultSize={65}>
            <div className="flex justify-between">
              <div>Solution.java</div>
              <Pencil className="cursor-pointer" />
            </div>
            <hr className="my-6 border-bolder" />
            <div className="custom-scrollbar h-full max-h-[540px] overflow-y-auto">
              <SolvedCode code={code} />
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
      <CommentContent />
    </div>
  );
}
