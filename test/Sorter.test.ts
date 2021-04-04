import { CharactersCollection } from '../src/CharactersCollection';
import { NumbersCollection } from '../src/NumbersCollection';
import { LinkedList } from '../src/LinkedList';

describe('Sorting tests', () => {
  it('Sort an array of numbers in ascedent order', () => {
    const numbersCollection = new NumbersCollection([10, 2, -4, 0]);

    numbersCollection.sort();

    expect(numbersCollection.data).toStrictEqual([-4, 0, 2, 10]);
  });

  it('Sort a string in ascedent order', () => {
    const charactersCollection = new CharactersCollection('zrXadB');

    charactersCollection.sort();

    expect(charactersCollection.data).toStrictEqual('aBdrXz');
  });

  it('Sort a linked list of numbers in ascedent order', () => {
    const linkedList = new LinkedList();
    linkedList.add(-4);
    linkedList.add(6);
    linkedList.add(1);
    linkedList.add(9);

    linkedList.sort();

    expect(linkedList.print()).toStrictEqual('-4,1,6,9');
  });
});
