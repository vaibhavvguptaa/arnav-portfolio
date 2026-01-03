import React from 'react';
import { cn } from '../../lib/utils';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  containerClassName?: string;
}

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, containerClassName, children, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn('w-full py-16 md:py-24', className)}
        {...props}
      >
        <div className={cn('container mx-auto px-4 md:px-6 max-w-7xl', containerClassName)}>
          {children}
        </div>
      </section>
    );
  }
);

Section.displayName = 'Section';
