import Link from 'next/link';
import Image from 'next/image';

import { Button } from '@/components/ui/button';
import { PATH } from '@/app/_constants/path';
import Download from '@/app/_svg/downlaod.svg';
import Password from '@/app/_svg/password.svg';
import Users from '@/app/_svg/users.svg';

export default function LandingPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#0F111D] to-[#262B3E] px-20 pb-56 pt-5 text-white">
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `radial-gradient(
        circle at center,
        rgba(94, 44, 231, 0.25) 20%,
        rgba(15, 11, 28, 0) 80%
      )`,
          height: '100vh',
          pointerEvents: 'none',
        }}
      />
      <div className="min-h-screen bg-[url('/star.png')] bg-top bg-no-repeat">
        {/* 헤더 */}
        <header className="flex justify-between p-6">
          <h1 className="text-2xl font-bold">PodoFarm</h1>
          <button className="text-gray-300 hover:text-white">
            <Link href={PATH.LOGIN}>Sign In</Link>
          </button>
        </header>

        {/* Hero Section */}
        <section className="py-16 text-center">
          <h2 className="bg-gradient-to-b from-primary-foreground to-secondary-foreground bg-clip-text text-6xl font-bold text-transparent">
            Welcome to Podo Farm
          </h2>
          <p className="mt-4 text-lg font-normal">
            프로그래머스 코딩테스트 기반의 포도팜에서 <br /> 스터디 관리 서비스를 이용해보세요!
          </p>
          <div className="mt-6 flex justify-center space-x-4">
            <Button className="rounded-lg bg-accent-foreground px-4 py-5">
              Download Extension
            </Button>
          </div>
        </section>

        <div className="relative z-10">
          <div className="flex flex-col gap-56">
            {/* 대시보드 UI */}
            <section className="relative flex justify-center">
              <Image src={'/landing-demo.png'} width={1200} height={800} alt="데모 사진" />
            </section>

            {/* How to Use */}
            <section className="flex flex-col gap-32 py-16 text-center">
              <div className="flex flex-col gap-4">
                <h3 className="text-4xl font-bold">How to use</h3>
                <p className="text-base text-secondary-foreground">
                  스터디 관리를 위한 기본 환경 세팅입니다
                </p>
              </div>
              <div className="flex justify-center gap-6">
                <div className="relative w-80 rounded-2xl bg-gradient-to-tr from-[#A55EFF] to-[#7BE1FF] p-[1px]">
                  <div className="h-full rounded-2xl bg-gradient-to-tr from-[#1d213a] from-20% to-[#4F525E] px-5 pb-32 pt-14">
                    <div className="flex flex-col items-start gap-3">
                      <Download className="h-8 w-8 text-white/70" />
                      <h3 className="text-lg font-bold">Download Chrome Extension</h3>
                      <p className="text-start text-lg font-normal leading-7 text-secondary-foreground">
                        크롬 확장 프로그램 밀도를 설치하세요
                        <br />
                        프로그래머스의 코딩테스트
                        <br />
                        연습 결과를 밀도로 가져옵니다
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative w-80 rounded-2xl bg-gradient-to-tr from-[#A55EFF] to-[#7BE1FF] p-[1px]">
                  <div className="h-full rounded-2xl bg-gradient-to-tr from-[#1d213a] from-20% to-[#4F525E] px-5 pb-32 pt-14">
                    <div className="flex flex-col items-start gap-3">
                      <Password className="h-8 w-8 text-white/70" />
                      <h3 className="text-lg font-bold">Social Login</h3>
                      <p className="text-start text-lg font-normal leading-7 text-secondary-foreground">
                        프로그래머스와 동일한
                        <br />
                        구글 계정으로 로그인하세요
                        <br />
                        빠르게 소셜 로그인이 가능합니다
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative w-80 rounded-2xl bg-gradient-to-tr from-[#A55EFF] to-[#7BE1FF] p-[1px]">
                  <div className="h-full rounded-2xl bg-gradient-to-tr from-[#1d213a] from-20% to-[#4F525E] px-5 pb-32 pt-14">
                    <div className="flex flex-col items-start gap-3">
                      <Users className="h-8 w-8 text-white/70" />
                      <h3 className="text-lg font-bold">Make Study group</h3>
                      <p className="text-start text-lg font-normal leading-7 text-secondary-foreground">
                        새 스터디를 생성하거나
                        <br />
                        기존 스터디를 검색하여
                        <br />
                        스터디에 참여할 수 있습니다
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Why Podo Farm? */}
            <section className="flex flex-col gap-32 py-16 text-center">
              <div className="flex flex-col gap-4">
                <h3 className="text-4xl font-bold">Why Podo Farm?</h3>
                <p className="text-base text-secondary-foreground">
                  알고리즘 스터디를 포도팜에서 해야 하는 이유
                </p>
              </div>
              <div className="p-8">
                <div className="mx-auto grid max-w-4xl grid-cols-2">
                  {/* 195 문제 섹션 */}
                  <div className="border-b-2 border-r-2 border-main-3 p-8">
                    <h2 className="mb-4 text-4xl font-semibold text-main-1">
                      195 <span className="text-2xl">문제</span>
                    </h2>
                    <p className="mb-1 text-lg text-purple-100">알고리즘 코테를 위한 문제 선정</p>
                    <p className="text-sm text-secondary-foreground">
                      * 프로그래머스 Lv1, Lv2 문제 제공
                    </p>
                  </div>

                  {/* 연동 서비스 섹션 */}
                  <div className="border-b-2 border-main-3 p-8">
                    <h2 className="mb-4 text-4xl font-semibold text-main-1">연동 서비스</h2>
                    <p className="mb-1 text-lg text-purple-100">연습 문제 관리 시스템 제공</p>
                    <p className="text-sm text-secondary-foreground">
                      * 구글 회원 프로그램 설치 필요
                    </p>
                  </div>

                  {/* 스터디 관리 시스템 섹션 */}
                  <div className="border-r-2 border-main-3 p-8">
                    <h2 className="mb-4 text-4xl font-semibold text-main-1">스터디 관리 시스템</h2>
                    <p className="mb-1 text-lg text-purple-100">스터디 관리 및 운영의 자동화</p>
                    <p className="text-sm text-secondary-foreground">* 스터디 생성시 자동 제공</p>
                  </div>

                  {/* 풀이 공유 섹션 */}
                  <div className="p-8">
                    <h2 className="mb-4 text-4xl font-bold text-main-1">풀이 공유</h2>
                    <p className="mb-1 text-lg text-purple-100">팀원들과 문제 공유 가능</p>
                    <p className="text-sm text-secondary-foreground">&nbsp;</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="flex flex-col gap-32 text-center">
              <div className="flex flex-col gap-4">
                <h3 className="text-4xl font-bold">Introduction of our brand</h3>
                <p className="text-base text-secondary-foreground">Let me introduce our product</p>
              </div>
              <div className="flex items-center justify-center gap-8">
                <p className="max-w-2xl">
                  포도팜은 취업을 준비하는 JAVA 국비지원생들을 위한 알고리즘 스터디 플랫폼입니다.
                  포도팜은 취업을 준비하는 JAVA 국비지원생들을 위한 알고리즘 스터디 플랫폼입니다.
                  포도팜은 취업을 준비하는 JAVA 국비지원생들을 위한 알고리즘 스터디 플랫폼입니다.
                  포도팜은 취업을 준비하는 JAVA 국비지원생들을 위한 알고리즘 스터디 플랫폼입니다.
                  포도팜은 취업을 준비하는 JAVA 국비지원생들을 위한 알고리즘 스터디 플랫폼입니다.
                </p>
                <div>로고</div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
