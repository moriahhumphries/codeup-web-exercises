// var i = 2;
//
// while (i <= 65536) {
//     console.log(i);
//     i *= 2;
// }

// Ice Cream

var allCones = Math.floor(Math.random() * 50) + 50;
var soldCones = Math.floor(Math.random() * 5) + 1;

do {
    console.log(allCones);
    // var soldCones = Math.floor(Math.random() * 5) + 1;
    console.log(soldCones + " cones sold");

    console.log(allCones - soldCones);
    allCones--;
} while (soldCones < allCones);
console.log('I am out of cones');






