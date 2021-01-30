import { daysBeforeMonth, isLeapYear, getMonthsInfo } from './birthdayUtils';

describe('isLeapYear', () => {
  test('Determine if the year is a leap year', () => {
    expect(isLeapYear(2021)).toBe(false);
    expect(isLeapYear(2008)).toBe(true);
    expect(isLeapYear(1900)).toBe(false);
    expect(isLeapYear(2000)).toBe(true);
  });
});

describe('getMonthsInfo', () => {
  test('return the number of days of a specific month (not leap year)', () => {
    expect(getMonthsInfo(2021)[0].days).toBe(31);
    expect(getMonthsInfo(2021)[1].days).toBe(28);
    expect(getMonthsInfo(2021)[2].days).toBe(31);
    expect(getMonthsInfo(2021)[3].days).toBe(30);
    expect(getMonthsInfo(2021)[4].days).toBe(31);
    expect(getMonthsInfo(2021)[5].days).toBe(30);
    expect(getMonthsInfo(2021)[6].days).toBe(31);
    expect(getMonthsInfo(2021)[7].days).toBe(31);
    expect(getMonthsInfo(2021)[8].days).toBe(30);
    expect(getMonthsInfo(2021)[9].days).toBe(31);
    expect(getMonthsInfo(2021)[10].days).toBe(30);
    expect(getMonthsInfo(2021)[11].days).toBe(31);
  });

  test('return the label of a specific month', () => {
    expect(getMonthsInfo(2021)[0].label).toBe('janvier');
    expect(getMonthsInfo(2021)[1].label).toBe('février');
    expect(getMonthsInfo(2021)[2].label).toBe('mars');
    expect(getMonthsInfo(2021)[3].label).toBe('avril');
    expect(getMonthsInfo(2021)[4].label).toBe('mai');
    expect(getMonthsInfo(2021)[5].label).toBe('juin');
    expect(getMonthsInfo(2021)[6].label).toBe('juillet');
    expect(getMonthsInfo(2021)[7].label).toBe('août');
    expect(getMonthsInfo(2021)[8].label).toBe('septembre');
    expect(getMonthsInfo(2021)[9].label).toBe('octobre');
    expect(getMonthsInfo(2021)[10].label).toBe('novembre');
    expect(getMonthsInfo(2021)[11].label).toBe('décembre');
  });

  test('return the number of days of a specific month (leap year)', () => {
    expect(getMonthsInfo(2008)[1].days).toBe(29);
  });
});

describe('daysBeforeMonth', () => {
  test('Return number of days from the 1st of the month and the 1st january (not leap year)', () => {
    expect(daysBeforeMonth(1, 2021)).toBe(0);
    expect(daysBeforeMonth(2, 2021)).toBe(31);
    expect(daysBeforeMonth(3, 2021)).toBe(59);
    expect(daysBeforeMonth(4, 2021)).toBe(90);
    expect(daysBeforeMonth(5, 2021)).toBe(120);
    expect(daysBeforeMonth(6, 2021)).toBe(151);
    expect(daysBeforeMonth(7, 2021)).toBe(181);
    expect(daysBeforeMonth(8, 2021)).toBe(212);
    expect(daysBeforeMonth(9, 2021)).toBe(243);
    expect(daysBeforeMonth(10, 2021)).toBe(273);
    expect(daysBeforeMonth(11, 2021)).toBe(304);
    expect(daysBeforeMonth(12, 2021)).toBe(334);
  });

  test('Return number of days from the 1st of the month and the 1st january (leap year)', () => {
    expect(daysBeforeMonth(1, 2020)).toBe(0);
    expect(daysBeforeMonth(2, 2020)).toBe(31);
    expect(daysBeforeMonth(3, 2020)).toBe(60);
    expect(daysBeforeMonth(4, 2020)).toBe(91);
    expect(daysBeforeMonth(5, 2020)).toBe(121);
    expect(daysBeforeMonth(6, 2020)).toBe(152);
    expect(daysBeforeMonth(7, 2020)).toBe(182);
    expect(daysBeforeMonth(8, 2020)).toBe(213);
    expect(daysBeforeMonth(9, 2020)).toBe(244);
    expect(daysBeforeMonth(10, 2020)).toBe(274);
    expect(daysBeforeMonth(11, 2020)).toBe(305);
    expect(daysBeforeMonth(12, 2020)).toBe(335);
  });
});