// According to the result, i think this is a sum function 
// so the name of the function should be meaningful and pronounceable
// variable names have the same principle
function sumTwoNumber(num1, num2) {
    var sum = 0;
    // in this for loop just have one command line
    // so i think it does not need curly brackets
    for (var i = num1; i <= num2; i++) 
        sum = sum + i;
    return sum;
}

function calculate(num1, num2, check) {
    let result = sumTwoNumber(num1, num2);
    // in this if also have 1 command line
    // so i remove the curly brackets
    if(check == true) 
        result = result * 2;
    return result;
}

console.log(sumTwoNumber(1, 2))
console.log(calculate(1, 2, 1))
