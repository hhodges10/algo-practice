var bs = require('./binary-search/binary-search')

const inputArr = [1, 2, 3, 5, 7, 9, 11, 43, 80];

const resultIterative = bs.bSearchIterative(inputArr, 12);
const resultRecursive = bs.bSearchRecursive(inputArr, 12, 0, inputArr.length - 1);

console.log(resultIterative);
console.log(resultRecursive);