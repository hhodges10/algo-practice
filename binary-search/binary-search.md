## Binary Search

*Time Complexity:* O(log n)

*Implementation:*

1. Given a **sorted** array
2. Find `middle` index of the array `Math.floor((lower + upper) / 2);`
3. Check if `target === arr[middle]` -> if so, return with success
4. Else if `target < arr[middle]` -> move upper to `middle - 1` and repeat
5. Else if `target > arr[middle]` -> move lower to `middle + 1` and repeat
6. Continue until `lower > upper` -> return with failure if no success

*Important Notes:*

- Starting array **MUST** be sorted
- Can be implemented either iteratively or recursively
