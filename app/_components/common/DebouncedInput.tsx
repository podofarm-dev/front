import { cn } from '@/lib/utils';
import { Search } from 'lucide-react';
import { useEffect, useState } from 'react';

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
    <div className="flex w-full max-w-xl flex-row items-center justify-between rounded border border-secondary-foreground bg-transparent p-2 focus-within:border-accent-foreground focus-within:ring-1 focus-within:ring-ring">
      <input
        {...props}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={cn(
          `font-lg border-block cn rounded border-0 bg-transparent shadow focus:outline-none`,
          className,
        )}
      />
      <Search className="cursor-pointer" />
    </div>
  );
};

export default DebouncedInput;
