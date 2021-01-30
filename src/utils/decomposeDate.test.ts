import { decomposeFRDate } from './decomposeDate';

test('Decomposition of french date format (jj/mm/yyyy) into array of number [day, month, year]', () => {
  expect(decomposeFRDate('30/01/2021')).toEqual([30, 1, 2021]);
  expect(decomposeFRDate('04/11/1984')).toEqual([4, 11, 1984]);
});