exports.bSearchIterative = function bSearchIterative(arr, target) {
    let lower = 0;
    let upper = arr.length - 1;
    while(lower <= upper) {
        let middleIndx = Math.floor(upper + lower / 2);

        if(arr[middleIndx] === target) {
            return `Target (${target}) found at index ${middleIndx} - binarySearchIterative`;
        } else if(arr[middleIndx] > target) {
            upper = middleIndx - 1;
        } else if(arr[middleIndx] < target) {
            lower = middleIndx + 1;
        }
    }
    return `Target (${target}) not found - binarySearchIterative`;
}

exports.bSearchRecursive = function bSearchRecursive(arr, target, lower, upper) {
    if(upper < lower) {
        return `Target (${target}) not found - binarySearchRecursive`;
    }

    let mid = Math.floor(upper + lower / 2);
    if(arr[mid] === target) {
        return `Target (${target}) found at index ${mid} - binarySearchRecursive`;
    } else if(arr[mid] > target) {
        upper = mid - 1;
        return bSearchRecursive(arr, target, lower, upper);
    } else if(arr[mid] < target) {
        lower = mid + 1;
        return bSearchRecursive(arr, target, lower, upper);
    }
}