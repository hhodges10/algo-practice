## Quicksort

*Time Complexity*: 
- Average Case: `O(n log n)`
- Worst Case: `O(n^2)`
- *Quicksort hits the average case **much** more frequently than it hits worst case*

*Quicksort vs. Merge Sort*:
- Both algorithms have an (average) time complexity of `O(n log n)`
- In BigO, there is a constant `c` that must be factored into the equation -> how long a single cycle of the algorithm takes to run
- BigO is really c * n -> constant times the amount of objects
- Normally, c is negligible when discussing algorithms, but in the case of Quicksort vs. Merge Sort, Merge Sort has a larger `c` value, so Quicksort generally performs better

*Implementation*:
1. Given an array
2. Choose a pivot value -> should always pivot on middle value to amount of recursive calls
3. Partition array into 2 subarrays -> elements less than pivot and elements greater than the pivot
4. Recursively call Quicksort on each of the subarrays
5. Base case -> return array when length of array < 2