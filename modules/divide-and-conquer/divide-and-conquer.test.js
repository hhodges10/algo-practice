const dc = require('./divide-and-conquer');

describe('sumRecursive()', () => {
    test('should return 6 given [1, 2, 3]', () => {
        expect(dc.sum([1, 2, 3])).toEqual(6);
    });
    
    test('should return 0 given []', () => {
        expect(dc.sum([])).toEqual(0);
    });
    
    test('should return 7 given [7]', () => {
        expect(dc.sum([7])).toEqual(7);
    });
});

describe('count()', () => {
    test('should return 5 given [1, 2, 3, 4, 5]', () => {
        expect(dc.count([1, 2, 3, 4, 5])).toEqual(5);
    });
    
    test('should return 0 given []', () => {
        expect(dc.count([])).toEqual(0);
    });
    
    test('should return 1 given [3]', () => {
        expect(dc.count([3])).toEqual(1);
    });
});

describe('maxNum()', () => {
    test('should return 10 given [1, 3, 4, 2, 10]', () => {
        expect(dc.maxNum([1, 3, 4, 2, 10])).toEqual(10);
    });
    
    test('should return 5 given [5, 2]', () => {
        expect(dc.maxNum([5, 2])).toEqual(5);
    });
});
