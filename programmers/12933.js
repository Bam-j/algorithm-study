function solution(n) {
    let answer = '';
    let digitStr = n.toString().split('').map(v => parseInt(v));
    let temp = [];

    temp = digitStr.sort((a, b) => b - a);

    for (let value of temp) {
        answer += value+'';
    }


    return parseInt(answer);
}