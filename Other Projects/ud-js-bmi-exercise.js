var markMass = 80;
var markHeight = 1.65;

var johnMass = 90;
var johnHeight = 1.70;

var markBMI = (markMass / (markHeight * markHeight));
console.log('Mark\'s BMI: ' + markBMI);

var johnBMI = (johnMass / (johnHeight * johnHeight));
console.log('John\'s BMI: ' + johnBMI);

var compareBMI = markBMI < johnBMI;

console.log("John has a higher BMI than Mark does: " + compareBMI);