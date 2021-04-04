import { Sorter } from '../src/Sorter';

describe('Sorting tests', () => {
  it('Sort an array of numbers in ascedent order', () => {
    const sorter = new Sorter([10, 2, -4, 0]);

    sorter.sort();

    expect(sorter.collection).toStrictEqual([-4, 0, 2, 10]);
  });
});
