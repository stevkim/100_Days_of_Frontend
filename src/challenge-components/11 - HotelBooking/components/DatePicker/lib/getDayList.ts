export const getDayList = (
  first: number,
  total: number,
  dates: { year: number; month: number },
) => {
  const DAYLIST = [];

  // Empty day spots
  for (let i = 0; i < first; i++) {
    DAYLIST.push("empty" + i);
  }

  // Days
  for (let j = 0; j < total; j++) {
    const tempDate = new Date(dates.year, dates.month, j + 1);

    DAYLIST.push(tempDate);
  }

  return DAYLIST;
};
