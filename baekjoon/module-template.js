/*
    fs
 */
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');


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

//빠른 계산
//배열로 정답들을 다 담은후 배열을 출력
//console.log();가 여러줄일때 일일히 사용하는 것보다 빠른 방식

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let answer = [];

readline.on('line', function(line) {
    const input = line.split(' ');

    if (input.length === 2) {
        const a = parseInt(input[0]);
        const b = parseInt(input[1]);

        answer += a+b+'\n';
    }
}).on('close', function(){
    console.log(answer)
    process.exit();
});