const sum = require('./sum')

// console.log('Sum 1 and 1 should give 2: ', sum(1, 1));

test('Pass in two numbers should get sum of both as a result : ', () => {
    expect(sum(1, 1)).toBe(2);
    expect(sum(1, 2)).toBe(3);
})

test('Should work with positve and negative numbers : ', () => {
    expect(sum(-1, 1)).toBe(0);
    expect(sum(-1, -2)).toBe(-3);
})

test('Should work with floats and integers numbers : ', () => {
    expect(sum(-1.5, 1)).toBe(-.5);
    expect(sum(1, 2.12345)).toBe(3.12345);
    expect(sum(0, 0)).toBe(0);
})