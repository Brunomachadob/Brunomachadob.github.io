import * as React from 'react';
import { FC } from 'react';
import { useScrollPosition } from '../hooks/useScrollPosition';

export const ScrollTopButton: FC<Record<string, never>> = () => {
  const scrollY = useScrollPosition();
  const isVisible = scrollY > 200;

  return (
    <a
      className={`fixed scroll-to-top-btn primary-accent-color rounded-full transition-opacity ease-in duration-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      href="#about"
    >
      <span className="scroll-to-top-btn-arrow"></span>
    </a>
  );
};
