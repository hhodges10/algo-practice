// exercise 4.1 in Grokking Algorithms
function sumRecursive(arr) {
    if(arr.length === 0) {
        return 0;
    } else if(arr.length === 1) {
        return arr[0];
    } else {
        let tmp = arr[0];
        arr.shift();
        return tmp + sumRecursive(arr);
    }
}

// exercise 4.2 in Grokking Algorithms
function countListItems(arr) {
    if(arr.length === 0) {
        return 0;
    } else if(arr.length === 1) {
        return 1;
    } else {
        arr.pop();
        return 1 + countListItems(arr);
    }
}

// exercise 4.3 in Grokking Algorithms
function maxNum(arr) {
    if(arr.length === 2) {
        return arr[0] > arr[1] ? arr[0] : arr[1];
    } else {
        arr.shift();
        let max = maxNum(arr);
        return arr[0] > max ? arr[0] : max;
    }
}

module.exports.sum = sumRecursive;
module.exports.count = countListItems;
module.exports.maxNum = maxNum;
