const bs = require('./binary-search');

const inputArr = [1, 2, 3, 5, 7, 9, 11, 43, 80];
const upper = inputArr.length - 1;

describe('bSearchIterative', () => {
    test('should return string with index of target if it exists in the array', () => {
        expect(bs.bSearchIterative(inputArr, 5)).toEqual('Target (5) found at index 3 - binarySearchIterative');
    });
    
    test('should return string saying target was not found if it does not exist in the array', () => {
        expect(bs.bSearchIterative(inputArr, 12)).toEqual('Target (12) not found - binarySearchIterative');
    });
});

describe('bSearchRecursive', () => {
    test('should return string with index of target if it exists in the array', () => {
        expect(bs.bSearchRecursive(inputArr, 5, 0, upper)).toEqual('Target (5) found at index 3 - binarySearchRecursive');
    });
    
    test('should return string saying target was not found if it does not exist in the array', () => {
        expect(bs.bSearchRecursive(inputArr, 12, 0, upper)).toEqual('Target (12) not found - binarySearchRecursive');
    });
});
