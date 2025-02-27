import LogoIcon from '@/app/_svg/logo.svg';

interface LogoProps {
  className?: string;
}

const Logo = ({ className }: LogoProps) => {
  return <LogoIcon width="25" height="25" viewBox="0 0 1000 1000" className={className} />;
};

export default Logo;
