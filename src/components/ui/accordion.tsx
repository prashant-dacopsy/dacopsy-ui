import { useState } from 'react';
import { cn } from '../../lib/utils';
import { Label } from './label';

interface AccordionProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
}

function Accordion({
  title,
  children,
  icon,
  className,
  subtitle,
}: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={cn('border border-gray-200 bg-white rounded-lg', className)}
    >
      <div
        className="flex items-center gap-2 p-4 cursor-pointer bg-white hover:bg-zinc-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        {icon}
        <div className="flex flex-col">
          <Label
            variant={'subtitle'}
            className={isOpen ? 'text-primary' : 'text-typography'}
          >
            {title}
          </Label>
          <Label variant={'input'} className="text-xs">
            {subtitle}
          </Label>
        </div>
      </div>
      {isOpen && <>{children}</>}
    </div>
  );
}

export default Accordion;
