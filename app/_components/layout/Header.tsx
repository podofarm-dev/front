'use client';

// import { useRouter } from 'next/navigation';

// import sessionStore from '@/app/_store/useSession';
// import { Button } from '@/components/ui/button';

const Header = () => {
  // const router = useRouter();
  // const accessToken = sessionStore((state) => state.access_token);
  // const isLoggedIn = Boolean(accessToken);

  return (
    <header className="flex h-28 w-full items-center bg-primary px-6 max-sm:max-h-16">
      <div className="flex w-full items-center justify-between">
        <div>로고</div>
      </div>
    </header>
  );
};

export default Header;
