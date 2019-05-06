function fizzBuzz (number) {
    let result = '';
    if(number%3 === 0){
        result= result + 'Fizz';
    }
    if (number%5 === 0){
        result= result + 'Buzz';
    }
    else if (number%3 !== 0 && number%5 !==0) {
        return number;
    }
    return result;
 }
 
 module.exports = fizzBuzz;