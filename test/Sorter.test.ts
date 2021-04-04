import { CharactersCollection } from '../src/CharactersCollection';
import { NumbersCollection } from '../src/NumbersCollection';
import { LinkedList } from '../src/LinkedList';
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

  it('Sort a linked list of numbers in ascedent order', () => {
    const linkedList = new LinkedList();
    linkedList.add(-4);
    linkedList.add(6);
    linkedList.add(1);
    linkedList.add(9);
    const sorter = new Sorter(linkedList);

    sorter.sort();

    expect(linkedList.print()).toStrictEqual('-4,1,6,9');
  });
});
