import * as React from 'react';
import { FC, PropsWithChildren } from 'react';
import { subtractDates } from '../utils/subtractDates';
import { TehcnologyList } from './TechnologyList';
import { Divider } from './Divider';

export const Experience: FC<
  PropsWithChildren<{
    position: string;
    company: string;
    location: string;
    startDate: Date;
    endDate?: Date;
    technologies?: string[];
  }>
> = ({ position, company, location, startDate, endDate, technologies, children }) => {
  const todaysDate = new Date();
  const { years, months } = subtractDates(
    endDate || new Date(todaysDate.getFullYear(), todaysDate.getMonth(), 1),
    startDate,
  );

  const dateFormatOpts = { month: 'short' as const, year: 'numeric' as const };
  const formattedStartDate = startDate.toLocaleString('en-US', dateFormatOpts);
  const formattedEndDate =
    (endDate && endDate.toLocaleString('en-US', dateFormatOpts)) || 'Present';
  const formattedPeriod =
    `${years > 0 ? `${years} yrs` : ''} ${months > 0 ? `${months} mos` : ''}`.trim();

  return (
    <div>
      <p className="primary-accent-text text-lg">{`${position} @ ${company}`}</p>
      <div className="space-x-2">
        <span className="text-sm opacity-90">{`${formattedStartDate} - ${formattedEndDate} · ${formattedPeriod} | ${location}`}</span>
        {technologies && (
          <>
            <span className="text-xl">|</span>
            <TehcnologyList technologies={technologies} />
          </>
        )}
      </div>
      <div className="mt-4">{children}</div>
      <Divider />
    </div>
  );
};
