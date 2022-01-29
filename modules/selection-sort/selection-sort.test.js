const sSort = require('./selection-sort');

test('selectionSort() should return sorted array', () => {
    let inputArr = [3, 2, 10, 4, 19, 1];
    let expected = [1, 2, 3, 4, 10, 19];

    expect(sSort.selectionSort(inputArr)).toEqual(expected);
});
