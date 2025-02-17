import Link from 'next/link';
import { InfoIcon } from 'lucide-react';

import StudyButton from '@/app/_components/study/StudyButton';
import { EXTENSION_PATH } from '@/app/_constants/path';

export default async function DashboardPage() {
  return (
    <div className="relative my-auto flex h-dvh flex-col">
      <div className="mr-8 mt-16 text-end">
        <StudyButton />
      </div>
      <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-2">
        <div className="flex flex-row items-center gap-2">
          <span className="text-xl font-medium leading-7 text-primary-foreground">
            아직 생성된 스터디가 없습니다
          </span>
          <InfoIcon />
        </div>
        <div className="flex gap-1">
          <span className="text-base font-normal leading-snug">
            <Link
              href={EXTENSION_PATH}
              className="text-accent-foreground underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              포도팜 확장 프로그램
            </Link>
            을 설치 후 스터디 생성 혹은 참여해 주세요
          </span>
        </div>
      </div>
    </div>
  );
}
