import * as React from 'react';
import { FC, PropsWithChildren } from 'react';

export const Link: FC<
  PropsWithChildren<{
    title: string;
    href: string;
    target?: string;
    includeLinkIcon?: boolean;
    className?: string;
  }>
> = ({ title, href, target, includeLinkIcon = true, className, children }) => {
  return (
    <a
      title={title}
      href={href}
      target={target || 'blank'}
      className={`font-mono primary-accent-text hover:brightness-150 ${className}`}
    >
      {children}
      {includeLinkIcon && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={10}
          className="inline-block pb-2"
          viewBox="0 0 24 24"
          fill="none"
        >
          <defs>
            <linearGradient id="gradient" y1="0" y2="1">
              <stop stopColor="#6366f1" offset="0" />
              <stop stopColor="#3b82f6" offset="1" />
            </linearGradient>
          </defs>
          <g id="Interface / External_Link">
            <path
              id="Vector"
              stroke="url(#gradient)"
              d="M10.0002 5H8.2002C7.08009 5 6.51962 5 6.0918 5.21799C5.71547 5.40973 5.40973 5.71547 5.21799 6.0918C5 6.51962 5 7.08009 5 8.2002V15.8002C5 16.9203 5 17.4801 5.21799 17.9079C5.40973 18.2842 5.71547 18.5905 6.0918 18.7822C6.5192 19 7.07899 19 8.19691 19H15.8031C16.921 19 17.48 19 17.9074 18.7822C18.2837 18.5905 18.5905 18.2839 18.7822 17.9076C19 17.4802 19 16.921 19 15.8031V14M20 9V4M20 4H15M20 4L13 11"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      )}
    </a>
  );
};
