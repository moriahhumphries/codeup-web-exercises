var answer = (prompt('Are we there yet?').toLowerCase());

while (answer !== 'yes' && answer !== 'yeah') {
    var answer = prompt('Are we there yet?').toLowerCase();
}

alert('We made it!');