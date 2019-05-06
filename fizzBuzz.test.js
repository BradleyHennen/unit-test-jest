const fizzBuzz = require('./fizzbuzz');


test('Testing with 15 should return FizzBuzz',  () => {
   expect(fizzBuzz(15)).toBe('FizzBuzz');
})


test('Testing with 5 should return Fizz',  () => {
   expect(fizzBuzz(5)).toBe('Buzz');
})

test('Testing with 3 should return Fizz',  () => {
   expect(fizzBuzz(3)).toBe('Fizz');
})