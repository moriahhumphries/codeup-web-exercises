
function getLastCommit(username) {
    let url = `https://api.github.com/users/${username}/events/public`;

    return fetch(url, {headers: {'Authorization': `token ${gitHub}`}})
        .then(response => response.json()
            .then(data => console.log(data[0].created_at)));

}

getLastCommit('moriahhumphries')
    // .then(lastCommitDate => document.body.innerHTML = `${lastCommitDate}`, lastCommitDate);



// return fetch('https://api.github.com/users/moriahhumphries/events/public', {headers: {'Authorization': gitHub}})
//     .then(response => response.json())
//     .then(users => {
//
//         console.log(users[0]);
//
//
//     })
//     .catch(error => console.error(error));
//

// function wait() {
//
// }