function selectionSort(arr) {     // ex: arr = [4, 2, 9, 39, 1]
    let sortedArr = [];
    let arrSize = arr.length;
    for(let i = 0; i < arrSize; i++) {
        // find the smallest value
        let index = findSmallest(arr);
        // add it to the sorted array
        sortedArr.push(arr[index]);
        // remove it from the original array
        arr.splice(index, 1);
    }
    return sortedArr;
}

const findSmallest = (arr) => {
    let smallest = arr[0];
    let smallestIndx = 0;
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] < smallest) {
            smallest = arr[i];
            smallestIndx = i;
        }
    }
    return smallestIndx;
}

module.exports.selectionSort = selectionSort;
