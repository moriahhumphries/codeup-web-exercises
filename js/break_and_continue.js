



// do {
//     var userNumber = (prompt('Please enter an odd number between 1 and 50'));
//     if (userNumber < 1 || userNumber > 50) {
//         alert(userNumber + ' is not between 1 and 50');
//     } else if (userNumber % 2 === 0) {
//         alert(userNumber + ' is not a valid odd number');
//     } else if (isNaN(userNumber)) {
//         alert(userNumber + ' is not a number'); {
//
//         }
//
//     }
// } while (true);

var random = (Math.floor((Math.random()*50)+1));

console.log('Random odd number to skip: ' + random);


for (var i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        continue;
    }
    if (random === i) {
        console.log('Skipped number: ' + i);
    } else {
        console.log('Odd number: ' + i);
    }
    if (i >= 49) {
        break;
    }
}
