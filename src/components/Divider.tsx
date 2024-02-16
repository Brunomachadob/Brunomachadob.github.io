import * as React from 'react';
import { FC, PropsWithChildren } from 'react';

export const Divider: FC<PropsWithChildren<Record<string, never>>> = () => (
  <div className="border-b w-1/2 dark:opacity-5 blur-xs"></div>
);
