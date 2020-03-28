// isEven

function isEven(num) {
    if (num % 2 === 0) {
        return true;
    } else if (num % 2 !== 0) {
        return false;
    }
}

console.log(isEven(1));

// Factorial

function factorial(num) {
    var result = 1;
    for(var i = 2; i <= num; i++) {
        result *= i;
    }
    return result;
}

console.log(factorial(10));

// Kebab to snake

function kebabToSnake(str) {
    var newStr =  str.replace("-", "_");
    return newStr;
}

console.log(kebabToSnake("hello-world"));