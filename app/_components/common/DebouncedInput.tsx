import { cn } from '@/lib/utils';
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
    <input
      {...props}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className={cn(
        `font-lg border-block cn rounded border border-secondary-foreground bg-transparent p-2 shadow`,
        className,
      )}
    />
  );
};

export default DebouncedInput;
