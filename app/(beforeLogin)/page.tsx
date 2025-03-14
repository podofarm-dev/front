import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import { Button } from '@/components/ui/button';
import LandingHeader from '@/app/_components/layout/LandingHeader';
import { EXTENSION_PATH } from '@/app/_constants/path';
import GetStartedButton from '@/app/_components/common/GetStartedButton';

export default function LandingPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#0F111D] to-[#262B3E] px-8 pb-56 pt-12 text-primary-foreground sm:px-16 lg:px-32">
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `radial-gradient(
        circle at center,
        rgba(94, 44, 231, 0.25) 20%,
        rgba(15, 11, 28, 0) 80%
      )`,
          height: '100dvh',
          pointerEvents: 'none',
        }}
      />
      <div className="mx-auto flex min-h-screen max-w-[1200px] flex-col gap-48 bg-[url('/star.png')] bg-top bg-no-repeat">
        {/* 헤더 */}
        <LandingHeader />

        <section className="z-10 w-full py-16 text-center">
          <div className="flex flex-col gap-16 lg:flex-row">
            <div className="flex flex-col justify-center lg:min-w-[510px]">
              <h2 className="text-start text-5xl font-bold leading-[67.20px] text-primary-foreground">
                Podofarm for <br />
                Coding Test Study
              </h2>
              <p className="mt-4 text-start text-lg font-semibold leading-7">
                프로그래머스 기반의 코딩테스트 문제 풀고 <br /> 더 나은 풀이 방식을 고민하며,
                스터디원들과 함께 성장을 도모해 보세요!
              </p>
              <div className="mt-6 flex flex-col items-start justify-start gap-4 sm:flex-row">
                <Link href={EXTENSION_PATH} target="_blank" rel="noopener noreferrer">
                  <Button className="rounded-lg bg-accent-foreground px-4 py-5">
                    Download Extension
                  </Button>
                </Link>
                <GetStartedButton />
              </div>
            </div>
            <Image
              src={'/landing-demo.png'}
              width={780}
              height={572}
              alt="데모 사진"
              className="animate-fade-in opacity-0"
            />
          </div>
        </section>

        <section className="flex flex-col gap-7 py-16 text-start">
          <p>SERVICE</p>
          <div className="flex flex-col gap-20 lg:flex-row">
            <p className="text-[32px] font-bold">
              혼자서 막막한 코딩 테스트 준비, <br />
              함께, 다양한 시각으로 풀며 실력을 키워요!
            </p>
            <p className="text-lg font-semibold">
              꼭 해야 하지만 띄엄띄엄 준비 하게 되는 코딩 테스트, <br />
              같은 목표를 갖는 팀원들과 함께 <br />
              포도팜에서 프로그래머스 기반의 코딩 테스트 문제를 풀고 실력을 쌓아 보세요!
            </p>
          </div>
        </section>

        <section className="relative flex flex-col gap-[100px] py-16 text-start lg:flex-row">
          <Image
            src={'/landing-1.png'}
            width={900}
            height={572}
            alt="데모 사진"
            className="animate-fade-in opacity-0 lg:w-1/2"
          />
          <div className="flex flex-col gap-4 lg:w-1/2">
            <h3 className="text-[40px] font-bold">
              자체 확장 프로그램으로 <br />
              간편한 코드 공유
            </h3>
            <p className="text-base font-medium leading-normal">
              포도팜 확장프로그램을 설치한 후 프로그래머스에서 문제를 풀면 <br />
              자동으로 문제와 코드가 저장되어 스터디원들과 쉽게 공유할 수 있습니다. <br />
              별도의 복사·붙여넣기 없이 효율적인 코드 공유와 학습을 경험해 보세요!
            </p>
            <div className="mt-4 flex flex-row justify-start space-x-4">
              <Link href={EXTENSION_PATH} target="_blank" rel="noopener noreferrer">
                <Button className="h-10 rounded-[50px] border border-bolder bg-accent px-4 py-5">
                  확장 프로그램 설치하기 <ArrowRight />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="relative flex flex-col gap-[100px] text-start lg:flex-row">
          <Image
            src={'/landing-2.png'}
            width={900}
            height={572}
            alt="데모 사진"
            className="order-1 animate-fade-in opacity-0 lg:order-2 lg:w-1/2"
          />
          <div className="order-2 flex flex-col gap-4 lg:order-1 lg:w-1/2">
            <h3 className="text-[40px] font-bold">
              한눈에 확인 가능한 <br />
              스터디 진행 과정
            </h3>
            <p className="text-base font-medium leading-normal">
              포도심기와 최근 현황을 통해 스터디원들의 진행 상황을 실시간으로 공유하고 <br />
              학습 추이를 한눈에 파악할 수 있습니다. <br />
              함께 성장하는 과정을 실시간으로 공유하세요!
            </p>
          </div>
        </section>

        <section className="relative flex flex-col gap-[100px] text-start lg:flex-row">
          <Image
            src={'/landing-3.png'}
            width={900}
            height={572}
            alt="데모 사진"
            className="animate-fade-in opacity-0 lg:w-1/2"
          />
          <div className="flex flex-col gap-4 lg:w-1/2">
            <h3 className="text-[40px] font-bold">
              가독성 높은 코드를 위한 <br />
              자동 줄 맞춤 및 하이라이트 적용
            </h3>
            <p className="text-base font-medium leading-normal">
              코드 하이라이트 기능으로 가독성을 높이고 <br />
              Open AI API를 활용한 자동 줄 맞춤으로 깔끔한 코드 정리를 지원합니다. <br />
              문제와 정답을 보기 좋게 정렬하여 더욱 효율적인 학습 환경을 제공합니다.
            </p>
          </div>
        </section>

        <section className="relative flex flex-col gap-[100px] text-start lg:flex-row">
          <Image
            src={'/landing-4.png'}
            width={900}
            height={572}
            alt="데모 사진"
            className="order-1 animate-fade-in opacity-0 lg:order-2 lg:w-1/2"
          />
          <div className="order-2 flex flex-col gap-4 lg:order-1 lg:w-1/2">
            <h3 className="text-[40px] font-bold">
              다양한 접근을 돕는 <br />
              해설 및 심화질문 주석 제공
            </h3>
            <p className="text-base font-medium leading-normal">
              프로그래머스 문제를 유형별로 분류하고, <br />
              정답 제출 시 문제 해설과 심화 질문을 주석으로 추가합니다. <br />
              단순 풀이를 넘어 개념을 확장하고, 다양한 접근법을 고민할 수 있도록 도와줍니다.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
