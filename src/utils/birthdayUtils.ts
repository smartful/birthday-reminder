import { decomposeTodayDate, decomposeFRDate } from './decomposeDate';

export const isLeapYear = (year: number): boolean => {
  if (year % 4 === 0 && year % 100 !== 0) {
    return true;
  }

  if (year % 400 === 0) {
    return true;
  }

  return false;
}

export const getMonthsInfo = (year: number) => ([
  {
    label: 'janvier',
    days: 31,
  },
  {
    label: 'février',
    days: isLeapYear(year) ? 29 : 28,
  },
  {
    label: 'mars',
    days: 31,
  },
  {
    label: 'avril',
    days: 30,
  },
  {
    label: 'mai',
    days: 31,
  },
  {
    label: 'juin',
    days: 30,
  },
  {
    label: 'juillet',
    days: 31,
  },
  {
    label: 'août',
    days: 31,
  },
  {
    label: 'septembre',
    days: 30,
  },
  {
    label: 'octobre',
    days: 31,
  },
  {
    label: 'novembre',
    days: 30,
  },
  {
    label: 'décembre',
    days: 31,
  },
]);

export const daysBeforeMonth = (month: number, year: number): number => {
  const monthIndex = month -1;
  let daysBefore = 0;
  for (let i = 0; i < monthIndex; i += 1) {
    daysBefore += getMonthsInfo(year)[i].days;
  }

  return daysBefore;
}

export const daysBeforeBirthday = (birthdayFRDate: string): number => {
  const [todayDay, todayMonth, todayYear] = decomposeTodayDate();
  const [birthdayDay, birthdayMonth, birthdayYear] = decomposeFRDate(birthdayFRDate);
  const daysBeforeBirthdayMonth = daysBeforeMonth(birthdayMonth, birthdayYear);
  const daysBeforeTodayMonth = daysBeforeMonth(todayMonth, todayYear);
  const daysBeforeBirthdayFromStartYear = daysBeforeBirthdayMonth + birthdayDay;
  const daysBeforeTodayFromStartYear = daysBeforeTodayMonth + todayDay;
  const daysBefore = daysBeforeBirthdayFromStartYear - daysBeforeTodayFromStartYear;
  console.log("daysBeforeBirthday : ", daysBefore);
  return daysBefore;
}

export const isBirthdayHappened = (birthdayFRDate: string): boolean => {
  const daysBefore = daysBeforeBirthday(birthdayFRDate);
  if (daysBefore < 0) {
    return true;
  }

  return false;
}