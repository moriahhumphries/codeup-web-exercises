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




// var isClassFull = false;
// var isClassConflict = false;
//
// if(!isClassFull && !isClassConflict){
//     alert('Student can attend class ' + 'yes');
// }

// var boughtTwoOrMore = false
// var notExpired = false
// var premiumMembes = true
//
// if(!boughtTwoOrMore && !notExpired){
//     alert('bought goodies')
// }
// var numberOfItems = prompt('How many items do you want to buy?');
//
// numberOfItems = parseInt(numberOfItems);
// var numberOfItemsRequired = prompt('How many items are required for the offer?');
// numberOfItemsRequired = parseInt(numberOfItemsRequired);
//
// var isOfferNotExpired = true;
// var isCustomerPremium = false;
// var isOfferValid = (isCustomerPremium && isOfferNotExpired) || (numberOfItems >= numberOfItemsRequired && isOfferNotExpired);
//
// alert('Offer is valid ' + isOfferValid);

var username = 'codeup'
var password = ' notastrongpassword'

var passChecker = (password.length > 5 && !password.includes(username) && username.length < 20 && !password.indexOf(" ") >= 0 && !username.indexOf(" ") >= 0)

alert(passChecker)