// movies

var mermaid = 3;
var bear = 5;
var herc = 1;

var totalMermaid = mermaid * 3;
console.log('The total cost to rent The Little Mermaid is: $' + totalMermaid);
var totalBear = bear * 5;
console.log('The total cost to rent Brother Bear is: $' + totalBear);
var totalHerc = herc * 1;
console.log('The total cost to rent Hercules is: $' + totalHerc);

console.log('The total cost to rent all 3 movies for their specified days is: $' + (totalMermaid + totalBear + totalHerc));

var isClassFull = false;
var isClassConflict = false;

var canAttendClass = (!isClassFull && !isClassConflict);
console.log('Student can attend class: ' + canAttendClass);



