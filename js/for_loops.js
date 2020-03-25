// #2 showMultiplicationTable

function showMultiplicationTable(input) {
    for (var i = 1; i <= 10; i++) {
        var answer = input * i;
        console.log(input + ' x ' + i + ' = ' + answer);
    }
}

showMultiplicationTable(7);

// 10 random numbers between 20 and 200

var numberOfEvenNumbersFound = Math.floor(Math.random() * 200) + 20;
var numberOfOddNumbersFound = Math.floor(Math.random() * 200) + 20;
for (var i = 20; i <= 5; i++) {
    if (i % 2 === 0) {
        console.log('This number is even: ' + i);
        numberOfEvenNumbersFound++;
    } else if (i % 2 !== 0) {
        console.log('This number is odd: ' + i);
        numberOfOddNumbersFound++;
    }
}

// #3 Create a for loop and the code from previous lesson to generate 10 random numbers between 20 and 200 and output odd or even.

// #4 Create a for loop to show output

for(i = 1; i < 8; i++) {
    console.log(String(i).repeat(i))
}


// #5 console log for loop minus 5

for (var i = 100; i >= 5; i -= 5) {
    console.log('Minus 5: ' + i);
}




