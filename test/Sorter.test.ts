import { CharactersCollection } from '../src/CharactersCollection';
import { NumbersCollection } from '../src/NumbersCollection';
import { Sorter } from '../src/Sorter';

describe('Sorting tests', () => {
  it('Sort an array of numbers in ascedent order', () => {
    const numbersCollection = new NumbersCollection([10, 2, -4, 0]);
    const sorter = new Sorter(numbersCollection);

    sorter.sort();

    expect(numbersCollection.data).toStrictEqual([-4, 0, 2, 10]);
  });

  it('Sort a string in ascedent order', () => {
    const charactersCollection = new CharactersCollection('zrXadB');
    const sorter = new Sorter(charactersCollection);

    sorter.sort();

    expect(charactersCollection.data).toStrictEqual('aBdrXz');
  });
});
