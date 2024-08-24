'use client';

import * as LabelPrimitive from '@radix-ui/react-label';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '../../lib/utils';

const labelVariants = cva(
  'text-typography font-medium font-inter leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
  {
    variants: {
      variant: {
        default: 'font-normal text-base',
        input: 'text-slate-400 font-normal text-sm',
        title: 'font-semibold text-xl',
        subtitle: 'font-medium text-lg',
        label: 'font-normal text-sm',
        disclaimer: 'font-normal text-xs',
        legend: 'font-medium text-4xl',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
    VariantProps<typeof labelVariants>
>(({ variant, className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(labelVariants({ variant, className }))}
    {...props}
  />
));
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
