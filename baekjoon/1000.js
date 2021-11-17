/*
    fs모듈 이용 연습
 */
const input = require('fs').readFileSync('/dev/stdin').toString().split(' ');

const A = parseInt(input[0]);
const B = parseInt(input[1]);

console.log(A+B);

/*
    readline모듈 이용 연습
 */
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
    input = line.split(' ').map(el => parseInt(el));
}).on('close', function(){
    const A = parseInt(input[0]);
    const B = parseInt(input[1]);
    console.log(A+B);
    process.exit();
});

/*
    readline모듈에서 solution 부분 분리
 */
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
    input = line.split(' ').map(el => parseInt(el));
}).on('close', function(){ //이 안에 솔루션 코드 작성
    solution(input);
    process.exit();
});

const solution = input => {
    const A = parseInt(input[0]);
    const B = parseInt(input[1]);
    console.log(A+B);
};
