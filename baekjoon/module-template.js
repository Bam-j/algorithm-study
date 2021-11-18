/*
    fs
 */
const input = require('fs').readFileSync('/dev/stdin').toString().split(' ');

/*
    readline
 */
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.on('line', function(line) {
}).on('close', function(){
    process.exit();
});


/*
    readline input
 */
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
    input = line.split(' ').map(el => parseInt(el));
}).on('close', function(){
    process.exit();
});