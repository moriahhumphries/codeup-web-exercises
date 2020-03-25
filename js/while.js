var i = 2;

while (i <= 65536) {
    console.log(i);
    i *= 2;
}

// Ice Cream

var allCones = Math.floor(Math.random() * 50) + 50;


do {
    var soldCones = Math.floor(Math.random() * 5) + 1;

    if (soldCones < allCones) {
       // Can Sell
        console.log(soldCones + ' cones sold');
        allCones -= soldCones;
    } else {
        // Can't Sell, not enough
        console.log('Cannot sell you ' + soldCones + ' cones, I only have ' + allCones);
    }
} while (allCones > soldCones);

    console.log('All cones have been sold!');








