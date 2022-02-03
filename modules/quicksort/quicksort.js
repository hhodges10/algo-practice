function quicksort(arr) {
    if(arr.length <= 1) {
        return arr;
    } else {
        let pivotIndx = Math.floor(arr.length / 2);
        let left = [], right = [];
        for(let i = 0; i < arr.length; i++) {
            if(i === pivotIndx) {
                continue;
            } else if(arr[i] < arr[pivotIndx]) {
                left.push(arr[i]);
            } else {
                right.push(arr[i]);
            }
        }
        return [...quicksort(left), arr[pivotIndx], ...quicksort(right)];
    }
}

module.exports.quicksort = quicksort;
