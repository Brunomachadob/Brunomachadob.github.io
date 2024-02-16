export function subtractDates(date1: Date, date2: Date): { years: number; months: number } {
  const months =
    (date1.getFullYear() - date2.getFullYear()) * 12 + (date1.getMonth() - date2.getMonth());
  let years = Math.floor(months / 12);
  let remainingMonths = (months % 12) + 1; // + 1 as we count inclusive

  if (remainingMonths == 12) {
    years++;
    remainingMonths = 0;
  }

  return { years, months: remainingMonths };
}
