const recursion = require('./recursion');

test('factorial() should return 6 when given input of 3', () => {
    expect(recursion.factorial(3)).toEqual(6);
});

test('factorial() should return 1 when given input of 1', () => {
    expect(recursion.factorial(1)).toEqual(1);
});
