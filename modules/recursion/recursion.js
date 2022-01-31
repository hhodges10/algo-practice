function factorial(num) {
    if(num === 1) {  // base case
        return 1;
    } else {  // recursive case3
        return num * factorial(num - 1);
    }
}

module.exports.factorial = factorial;
