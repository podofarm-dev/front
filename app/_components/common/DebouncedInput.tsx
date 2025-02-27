import { useEffect, useState } from 'react';

import { cn } from '@/lib/utils';
import { Search } from 'lucide-react';
import CircleX from '@/app/_svg/circleX.svg';

const DebouncedInput = ({
  value: initialValue,
  onChange,
  debounce = 500,
  className,
  ...props
}: {
  value: string;
  onChange: (value: string) => void;
  debounce?: number;
  className?: string;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'>) => {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  useEffect(() => {
    const timeout = setTimeout(() => onChange(value), debounce);

    return () => clearTimeout(timeout);
  }, [value]);

  return (
    <div className="flex w-full max-w-xl flex-row items-center justify-between rounded border border-bolder bg-transparent p-2 focus-within:border-accent-foreground focus-within:ring-1 focus-within:ring-ring">
      <input
        {...props}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={cn(
          `font-lg border-block cn w-full rounded border-0 bg-transparent shadow focus:outline-none`,
          className,
        )}
      />
      <div className="flex flex-row items-center gap-2">
        {value && <CircleX className="cursor-pointer" onClick={() => setValue('')} />}
        <Search className="cursor-pointer text-secondary-foreground" />
      </div>
    </div>
  );
};

export default DebouncedInput;
