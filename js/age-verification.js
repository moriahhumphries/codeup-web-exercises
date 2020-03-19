var age = Number(prompt('What is your age?'));

if(age <= 0) {
    console.log('Sorry, there was an error.');
}

if(age > 18 && age < 21) {
    console.log('You can come in, but you can\'t drink');
}

if(age === 21) {
    console.log('Happy 21st Birthday!');
}

if(age % 2 !== 0) {
    console.log('Your age is odd!');
}

if(age % Math.sqrt(age) === 0) {
    console.log('Your age is a perfect square!');
}

else if(age >= 21) {
    console.log('Come on in and drink!');
}
