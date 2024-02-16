import * as React from 'react';
import { FC, PropsWithChildren } from 'react';

export const SectionTitle: FC<
  PropsWithChildren<{
    className?: string;
  }>
> = (props) => {
  return (
    <h1 className={`primary-accent-text text-4xl m-2 ml-0 ${props.className}`}>{props.children}</h1>
  );
};

export const SectionSubTitle: FC<
  PropsWithChildren<{
    className?: string;
  }>
> = ({ className, children }) => {
  return <h1 className={`text-sm opacity-50 m-2 ml-0 ${className}`}>{children}</h1>;
};
