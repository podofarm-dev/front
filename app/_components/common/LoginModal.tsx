import Link from 'next/link';

import { PATH } from '@/app/_constants/path';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import Logo from '@/app/_components/common/Logo';
import Google from '@/app/_svg/google.svg';

interface LoginModalProps {
  onClose: () => void;
}

const LoginModal = ({ onClose }: LoginModalProps) => {
  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="!rounded-[20px]">
        <div className="flex flex-col items-center gap-4 py-8">
          <Logo />
          <span className="text-[28px] font-bold">로그인</span>
          <span className="text-base font-normal text-secondary-foreground">
            🧑‍💻 지금 로그인 하시고 알고리즘 스터디 진행해 보세요.
          </span>
          <Link href={PATH.LOGIN}>
            <Button className="my-5 h-12 w-[400px] rounded-[50px] bg-[#3c4043]">
              <Google className="!h-6 !w-6" />
              <span className="text-lg">Google 계정으로 로그인</span>
            </Button>
          </Link>
          <span className="text-center text-xs text-secondary-foreground">
            로그인은 개인 정보 보호 정책 및 서비스 약관에 동의하는 것을 의미하며, <br /> 서비스
            이용을 위해 이메일과 이름, 프로필 이미지를 수집합니다.
          </span>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;
