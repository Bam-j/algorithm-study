function solution(n) {
    let answer = n.toString().split('').map(v => parseInt(v)).reverse();

    return answer;
}