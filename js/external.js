// console.log('Hello from external Javascript');
//
// alert('Welcome to my website!');
//
// // Color Question
//
// var userFavColor = prompt('What is your favorite color?');
//
// alert('Great, ' + userFavColor  + ' is my favorite too!');
//
// // End Color Question
//
// // Movies Question
//
// var mermaid = prompt('How many days do you want to rent The Little Mermaid for?');
//
// alert('Okay, $' + (mermaid * 3)  + ' will be your cost for this rental.');
//
// var bear = prompt('How many days do you want to rent Brother Bear for?');
//
// alert('Okay, $' + (bear * 3)  + ' will be your cost for this rental.');
//
// var hercules = prompt('How many days do you want to rent Hercules for?');
//
// alert('Okay, $' + (hercules * 3)  + ' will be your cost for this rental.');
//
//
// var rentalTotal = (
//     parseInt(mermaid) + parseInt(bear) + parseInt(hercules)) * 3;
//
// alert('Total rental cost $' + rentalTotal);

// End Movies Question

// Contractor Question

// Rates

// var facebookRate = prompt('What is your rate for Facebook?');
// facebookRate = parseInt(facebookRate);
//
// var googleRate = prompt('What is your rate for Google?');
// googleRate = parseInt(googleRate);
//
//
// var amazonRate = prompt('What is your rate for Amazon?');
// amazonRate = parseInt(amazonRate);
//
// // Hours
//
// var facebookHours = prompt('How many hours did you work for Facebook this week?');
// facebookHours = parseInt(facebookHours);
//
//
//
// var googleHours = prompt('How many hours did you work for Google this week?');
// googleHours = parseInt(googleHours);
//
//
// var amazonHours = prompt('How many hours did you work for amazon this week?');
// amazonHours = parseInt(amazonHours);
//
// var totalDollars = (facebookRate * facebookHours) + (amazonRate * amazonHours) + (googleRate + googleHours);
//
// alert('Total amount made is $' + totalDollars);

// var isClassFull = false;
// var isClassConflict = false;
//
// var canAttendClass = (!isClassFull && !isClassConflict);
// alert('Student can attend class ' + canAttendClass);

var numberOfItems = prompt('How many items are you buying?');
numberOfItems = parseInt(numberOfItems);
var numberOfItemsRequired = prompt('How many items are required for the offer?')
numberOfItemsRequired = parseInt(numberOfItemsRequired)

var isOfferExpired = false;
var isCustomerPremium = false;

var isOfferValid = (isCustomerPremium && isOfferExpired) || (numberOfItems >= numberOfItemsRequired && !isOfferExpired);

alert('Offer is valid: ' + isOfferValid);





