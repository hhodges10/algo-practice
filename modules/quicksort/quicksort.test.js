const qs = require('./quicksort');

test('quicksort should return sorted array', () => {
    expect(qs.quicksort([3, 1, 45, 2, 4, 19, 30, 7])).toEqual([1, 2, 3, 4, 7, 19, 30, 45]);
});

test('quicksort should return array given array of all same number', () => {
    expect(qs.quicksort([3, 3, 3, 3, 3])).toEqual([3, 3, 3, 3, 3]);
});

test('quicksort should return array with one element given array with one element', () => {
    expect(qs.quicksort([1])).toEqual([1]);
});

test('quicksort should return array with zero elements given array with zero elements', () => {
    expect(qs.quicksort([])).toEqual([]);
});
