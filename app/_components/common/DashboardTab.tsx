import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const DashboardTab = ({ isActive }: { isActive: boolean }) => {
  return (
    <>
      <Button
        className={cn(
          'hover:bg-accent-foreground hover:text-primary-foreground',
          isActive ? 'bg-accent-foreground text-primary-foreground' : 'bg-tertiary text-bolder',
        )}
      >
        1
      </Button>
      <Button
        className={cn(
          'hover:bg-accent-foreground hover:text-primary-foreground',
          isActive ? 'bg-accent-foreground text-primary-foreground' : 'bg-tertiary text-bolder',
        )}
      >
        2
      </Button>
    </>
  );
};

export default DashboardTab;
