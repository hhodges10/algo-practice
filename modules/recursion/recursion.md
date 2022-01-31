## Recursion

- **Recursion** is when a method calls itself
- Every recursive method has tow cases:
	- **base case** -> what should happen to end recursion, stops the method from calling itself to avoid endless looping
	- **recursive case** -> when the method calls itself
- Recursion makes use of the **call stack**
	- all function calls go onto the call stack
	- call stack can get very large, taking up a lot of memory = recursion can sometimes be worse than loops because it can use a lot of memory
	- The call stack is what makes recursion work -> keeps track of the result of method calls from within the method
	- Method calls do not resolve until all of the methods called from inside of them have resolved
- **Example**:
```js
	const factorial = (num) => {
		if(num === 1) {
			return 1;
		} else {
			return num * factorial(num - 1);
		}
	}
```
- If num = 3, this is what happens:
	1. first call is to factorial(3)
	2. placed on call stack with num = 3
	3. recursively calls factorial(2)
	4. another item on call stack with num = 2
	5. recursively calls factorial (1)
	6. reaches base case, returns 1 and starts the process of removing from call stack
	7. 1 * 2 = 2, 2 is returned
	8. 2 * 3 = 6, 6 is returned
	9. factorial is done running, 6 is returned
