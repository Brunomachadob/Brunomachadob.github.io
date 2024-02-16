import * as React from 'react';
import { FC, PropsWithChildren } from 'react';
import { Link } from './Link';
import { Divider } from './Divider';
import { TehcnologyList } from './TechnologyList';

export const Project: FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <div className="space-y-2">
      {children}
      <Divider />
    </div>
  );
};

export const ProjectTitle: FC<
  PropsWithChildren<{
    href: string;
    technologies?: string[];
    className?: string;
  }>
> = ({ href, technologies, className, children }) => {
  return (
    <div className="space-x-2">
      <Link title={children as string} href={href} className={`text-lg ${className}`}>
        {children}
      </Link>
      {technologies && (
        <>
          <span className="text-xl">|</span>
          <TehcnologyList technologies={technologies} />
        </>
      )}
    </div>
  );
};

export const ProjectBody: React.FC<
  React.PropsWithChildren<{
    className?: string;
  }>
> = ({ className, children }) => {
  return <div className={className}>{children}</div>;
};
