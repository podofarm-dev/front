'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';

import Home from '@/app/_svg/home.svg';
import Algo from '@/app/_svg/algo.svg';
import Setting from '@/app/_svg/setting.svg';
import Solved from '@/app/_svg/solved.svg';
import { PATH } from '@/app/_constants/path';
import { useUserInfoQuery } from '@/app/_hooks/api/useUserInfoQuery';

const navigationItem = [
  { icon: <Home />, href: PATH.STUDY_DASHBOARD, title: '대시보드' },
  { icon: <Algo />, href: PATH.STUDY_PROBLEM_LIST, title: '알고리즘 테스트' },
  { icon: <Solved />, href: PATH.STUDY_SOLVED, title: '푼 문제 보기' },
  { icon: <Setting />, href: PATH.SETTING, title: '관리' },
];

const Navigation = () => {
  const { studyId } = useParams();
  const { userInfoData } = useUserInfoQuery();

  return (
    <nav className="flex h-12 items-center gap-4 border-b border-bolder bg-primary px-8">
      {navigationItem.map((item, index) => (
        <Link
          key={index}
          className="flex cursor-pointer flex-row items-center gap-2"
          href={item.href(String(studyId), String(userInfoData?.memberId))}
        >
          <div>{item.icon}</div>
          <div>{item.title}</div>
        </Link>
      ))}
    </nav>
  );
};

export default Navigation;
