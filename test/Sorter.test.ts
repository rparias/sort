import { NumbersCollection } from '../src/NumbersCollection';
import { Sorter } from '../src/Sorter';

describe('Sorting tests', () => {
  it('Sort an array of numbers in ascedent order', () => {
    const numbersCollection = new NumbersCollection([10, 2, -4, 0]);
    const sorter = new Sorter(numbersCollection);

    sorter.sort();

    expect(sorter.collection.data).toStrictEqual([-4, 0, 2, 10]);
  });
});
