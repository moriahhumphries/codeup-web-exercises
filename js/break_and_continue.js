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
