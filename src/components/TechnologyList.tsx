import * as React from 'react';
import { FC } from 'react';

export const TehcnologyList: FC<{
  technologies: string[];
  colored?: boolean;
}> = ({ technologies, colored }) => {
  return (
    <div className="inline-block space-x-2">
      {technologies.map((technology) => (
        <i
          key={technology}
          title={technology}
          className={`text-md devicon-${technology}-plain  ${colored ? 'colored' : ''}`}
        ></i>
      ))}
    </div>
  );
};
