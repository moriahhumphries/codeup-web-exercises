// #2 showMultiplicationTable

function showMultiplicationTable(input) {
    for (var i = 1; i <= 10; i++) {
        var answer = input * i;
        console.log(input + ' x ' + i + ' = ' + answer);
    }
}

showMultiplicationTable(7);

// #3 10 random numbers between 20 and 200

for (var i = 0; i < 10; i++) {
var randomNumber = Math.floor(Math.random() * 180) + 20;

if(randomNumber % 2 === 0) {
console.log(randomNumber + ' is even');
}  else {
    console.log(randomNumber + ' is odd');

}
}

// #4 Create a for loop to show output

for(i = 1; i <= 9; i++) {
    console.log(String(i).repeat(i))
}


// #5 console log for loop minus 5

for (var i = 100; i >= 5; i -= 5) {
    console.log('Minus 5: ' + i);
}




