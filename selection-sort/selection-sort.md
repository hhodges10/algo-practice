## Selection Sort

*Time Complexity:* `O(n^2)`

*Implementation:*

1. Given an array
2. Find the smallest value of the input array
3. Add smallest value of input array to new array
4. Remove smallest value from input array
5. Repeat until everything has been sorted through

*Important Notes:*

- Not very efficient, has to look through array for the smallest value n times -> `O(n) * (O(n - 1) * O(n - 2) ... 2, 1)` => simplifies to `O(n^2)` since constants are removed for discussing time complexity