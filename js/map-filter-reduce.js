const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

// filter - users with at least 3 languages

let userLanguages = users.filter(users => users.languages.length >= 3);

console.log(userLanguages);

// map - create array of strings, each element is a users email address

let userEmail = users.map(users => users.email);
console.log(userEmail);

// reduce - sum total years experience, calculate average

let totalExperience = users.reduce((total, person) => {
    return total + person.yearsOfExperience;

}, 0);

console.log(`Total years of experience: ${totalExperience}`);
console.log(`Average years of experience: ${totalExperience / users.length}`);

// reduce - longest email from list of users

// function findLongestEmail(str) {
//     let longestEmail = str.split(' ').reduce(function(longest, currentWord) {
//         return currentWord.length > longest.length ? currentWord : longest;
//     }, "");
//     return longestEmail.length;
// }
// findLongestEmail(users.email);
// console.log(users.email);

let longestEmail = users.reduce((total, person) => {
    return total.email.length > person.email.length ? total.email:person;

});

//console.log(`Actual longest email, fernando@codeup.com: ${users[3].email.length}`);
console.log(longestEmail);
